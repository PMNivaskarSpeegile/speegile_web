
/**
 * Lightweight Framer Motion polyfill.
 * Implements: motion.*, AnimatePresence, useInView, useAnimation
 * using CSS transitions + IntersectionObserver + React state.
 */
(function () {
  const { useState, useEffect, useRef, forwardRef, createElement: h } = React;

  // Map style key values: { y: 20, opacity: 0, scale: 0.95, x: -10, rotate: 45 }
  function stateToStyle(state = {}) {
    const s = {};
    if (state.opacity !== undefined) s.opacity = state.opacity;
    if (state.scale !== undefined || state.y !== undefined || state.x !== undefined || state.rotate !== undefined) {
      const sc = state.scale !== undefined ? `scale(${state.scale})` : '';
      const tx = state.x !== undefined ? `translateX(${state.x}px)` : '';
      const ty = state.y !== undefined ? `translateY(${state.y}px)` : '';
      const ro = state.rotate !== undefined ? `rotate(${state.rotate}deg)` : '';
      s.transform = [sc, tx, ty, ro].filter(Boolean).join(' ') || undefined;
    }
    if (state.boxShadow !== undefined) s.boxShadow = state.boxShadow;
    if (state.height !== undefined) s.height = typeof state.height === 'number' ? state.height + 'px' : state.height;
    return s;
  }

  function makeTransition(transition = {}) {
    const dur = transition.duration !== undefined ? transition.duration : 0.4;
    const delay = transition.delay || 0;
    const ease = transition.ease || 'ease';
    const easeFn = Array.isArray(ease) ? `cubic-bezier(${ease.join(',')})` : ease === 'easeOut' ? 'ease-out' : ease === 'easeIn' ? 'ease-in' : ease === 'easeInOut' ? 'ease-in-out' : ease === 'linear' ? 'linear' : 'ease-out';
    return `all ${dur}s ${easeFn} ${delay}s`;
  }

  // Motion component factory
  function createMotionComponent(tag) {
    return forwardRef(function MotionEl(props, ref) {
      const {
        initial, animate, exit, transition = {},
        whileHover, whileTap, whileFocus,
        whileInView, viewport,
        style = {}, children, layoutId,
        ...rest
      } = props;

      const elRef = useRef(null);
      const combinedRef = ref || elRef;

      // Track states
      const [hovered, setHovered] = useState(false);
      const [tapped, setTapped] = useState(false);
      const [focused, setFocused] = useState(false);
      const [inView, setInView] = useState(false);
      const [mounted, setMounted] = useState(false);

      // Determine target animate state
      // If animate is an array (keyframes like { y:[0,-6,0] }), use CSS animation instead
      const hasKeyframes = animate && typeof animate === 'object' &&
        Object.values(animate).some(v => Array.isArray(v));

      // IntersectionObserver for whileInView / animate (when initial differs)
      useEffect(() => {
        const el = combinedRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true);
              if (viewport?.once) obs.disconnect();
            } else if (!viewport?.once) {
              setInView(false);
            }
          },
          { rootMargin: viewport?.margin || '-60px' }
        );
        obs.observe(el);
        return () => obs.disconnect();
      }, []);

      useEffect(() => {
        // tiny delay so initial→animate transition fires
        const t = setTimeout(() => setMounted(true), 20);
        return () => clearTimeout(t);
      }, []);

      // Build current style
      let currentStyle = { ...style };

      // Base transition
      currentStyle.transition = makeTransition(transition);

      // Start from initial, transition to animate
      if (initial && !hasKeyframes) {
        const base = mounted ? stateToStyle(typeof animate === 'object' && !Array.isArray(animate) ? animate : {}) : stateToStyle(initial);
        Object.assign(currentStyle, base);
      } else if (animate && !hasKeyframes && typeof animate === 'object') {
        // If inView gating: only animate.opacity/y etc when inView
        // But for non-inView we just apply immediately
        Object.assign(currentStyle, stateToStyle(animate));
      }

      // whileHover / whileTap / whileFocus overrides
      if (hovered && whileHover) Object.assign(currentStyle, stateToStyle(whileHover));
      if (tapped && whileTap) Object.assign(currentStyle, stateToStyle(whileTap));
      if (focused && whileFocus) Object.assign(currentStyle, stateToStyle(whileFocus));

      // Keyframe animation via CSS
      if (hasKeyframes) {
        // We'll approximate: just use the middle keyframe as the "animate" state
        // For floating effects, apply a CSS animation class
        const yFrames = animate.y;
        const opFrames = animate.opacity;
        const scaleFrames = animate.scale;
        if (yFrames) {
          const dur = transition.duration || 3;
          const delay = transition.delay || 0;
          const repeat = transition.repeat === Infinity ? 'infinite' : (transition.repeat || 1);
          currentStyle.animation = `float-y-${Math.abs(yFrames[1] || 6)} ${dur}s ease-in-out ${delay}s ${repeat}`;
        }
        if (opFrames) {
          const dur = transition.duration || 4;
          const delay = transition.delay || 0;
          currentStyle.animation = `pulse-opacity ${dur}s ease-in-out ${delay}s infinite`;
        }
      }

      const handlers = {};
      if (whileHover) {
        handlers.onMouseEnter = () => setHovered(true);
        handlers.onMouseLeave = () => { setHovered(false); setTapped(false); };
      }
      if (whileTap) {
        handlers.onMouseDown = () => setTapped(true);
        handlers.onMouseUp = () => setTapped(false);
      }
      if (whileFocus) {
        handlers.onFocus = (e) => { setFocused(true); props.onFocus?.(e); };
        handlers.onBlur = (e) => { setFocused(false); props.onBlur?.(e); };
      } else {
        if (props.onFocus) handlers.onFocus = props.onFocus;
        if (props.onBlur) handlers.onBlur = props.onBlur;
      }

      return h(tag, { ...rest, ref: combinedRef, style: currentStyle, ...handlers }, children);
    });
  }

  // Animate presence — simplified: just renders children, fade exit handled by CSS
  function AnimatePresence({ children, mode }) {
    return h(React.Fragment, null, children);
  }

  // useInView hook
  function useInView(ref, options = {}) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options.once) obs.disconnect();
          } else if (!options.once) {
            setInView(false);
          }
        },
        { rootMargin: options.margin || '-60px' }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, []);
    return inView;
  }

  function useAnimation() {
    const [state, setState] = useState({});
    return { start: setState, state };
  }

  // Build motion object with all HTML tags
  const TAGS = ['div','span','p','h1','h2','h3','h4','h5','h6','a','button','nav','section','article','ul','li','form','input','textarea','select','img','svg','path','main','header','footer'];
  const motion = {};
  TAGS.forEach(tag => motion[tag] = createMotionComponent(tag));

  // Inject CSS keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float-y-6 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
    @keyframes float-y-8 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    @keyframes float-y-4 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
    @keyframes pulse-opacity { 0%,100%{opacity:0.3} 50%{opacity:0.5} }
    @keyframes spin { to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(style);

  window.FramerMotion = { motion, AnimatePresence, useInView, useAnimation };
})();
