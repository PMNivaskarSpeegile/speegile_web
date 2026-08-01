
const { motion, useInView, useAnimation } = window.FramerMotion;

// Reusable fade-in section wrapper
function FadeUp({ children, delay = 0, style = {} }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Gradient button
function GradBtn({ href, children, outline = false }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(108,63,197,0.5)' }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'inline-block', textDecoration: 'none',
        padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15,
        background: outline ? 'transparent' : 'linear-gradient(135deg, #1A4FA0, #6C3FC5)',
        color: '#fff',
        border: outline ? '2px solid rgba(255,255,255,0.6)' : 'none',
        cursor: 'pointer', letterSpacing: '0.01em',
        transition: 'border-color 0.2s',
      }}
    >{children}</motion.a>
  );
}

// Animated counter
function CountUp({ end, suffix = '', duration = 2000 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });
  React.useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const endNum = parseInt(end);
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * endNum));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// Why Speegile 5 pillars data
const WHY_ITEMS = [
  { icon: '💡', title: 'Business-first thinking', desc: 'We understand business needs before recommending solutions.' },
  { icon: '🤝', title: 'Dependable, transparent execution', desc: 'Honest communication and reliable delivery at every stage.' },
  { icon: '⚙️', title: 'Flexible engagement models', desc: 'We adapt to your timeline, budget and project structure.' },
  { icon: '🌱', title: 'Long-term partnership mindset', desc: 'We invest in your success beyond the first engagement.' },
  { icon: '🏆', title: 'Experienced leadership', desc: 'Backed by 25+ years of professional experience.' },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', background: '#0B0F2A', position: 'relative',
        display: 'flex', alignItems: 'center', overflow: 'hidden',
      }}>
        {/* Animated background orbs */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '15%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(44,125,210,0.35) 0%, transparent 70%)' }} />
          <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ position: 'absolute', bottom: '20%', right: '8%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,63,197,0.35) 0%, transparent 70%)' }} />
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            style={{ position: 'absolute', top: '40%', right: '30%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,79,160,0.3) 0%, transparent 70%)' }} />
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, maxWidth: 760, marginBottom: 28, textAlign: 'center' }}>
            Helping Businesses Grow Through{' '}
            <span style={{ background: 'linear-gradient(135deg, #2D7DD2, #9B72E8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              People and Data
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: 580, marginBottom: 48, textAlign: 'center' }}>
            Recruitment, staffing, training, and business analytics solutions designed for practical results.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <GradBtn href="#/contact">Talk to Us</GradBtn>
            <GradBtn href="#/human-capital" outline>Explore Services</GradBtn>
          </motion.div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
            style={{ marginTop: 50, display: 'flex', gap: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { val: '2018', suffix: '', label: 'Year Founded' },
              { val: '25', suffix: '+', label: 'Years Leadership Experience' },
              { val: '25', suffix: '+', label: 'Customers Served' },
            ].map((s, i) => (
              <div key={s.label} style={{
                textAlign: 'center', padding: '20px 40px',
              }}>
                <div style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                  <CountUp end={s.val} suffix={s.suffix} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: '#fff', padding: '56px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FadeUp>
            <p style={{ color: '#6C3FC5', fontWeight: 600, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Our Services</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#0B0F2A', marginBottom: 16 }}>What We Do</h2>
            <p style={{ fontSize: 17, color: '#555', maxWidth: 720, lineHeight: 1.7 }}>
              Speegile supports growing businesses through two focused service areas.
            </p>
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginTop: 56 }}>
            {[
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="url(#g1)"/><path d="M13 28c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="20" cy="16" r="4" fill="#fff"/><defs><linearGradient id="g1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#1A4FA0"/><stop offset="1" stopColor="#6C3FC5"/></linearGradient></defs></svg>
                ),
                title: 'Human Capital Solutions',
                desc: 'Connect with the right talent to build stronger teams for sustainable growth.',
                services: ['Recruitment', 'Staff Augmentation', 'Fresher Skill Development Programs'],
                href: '#/human-capital',
              },
              {
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="url(#g2)"/><rect x="10" y="24" width="4" height="8" rx="1" fill="#fff"/><rect x="18" y="18" width="4" height="14" rx="1" fill="#fff"/><rect x="26" y="12" width="4" height="20" rx="1" fill="#fff"/><path d="M11 22l8-8 8 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="g2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#2D7DD2"/><stop offset="1" stopColor="#6C3FC5"/></linearGradient></defs></svg>
                ),
                title: 'Analytics Solutions',
                desc: 'Convert business data into actionable insights that unlock sustainable growth.',
                services: ['Analytics Consulting', 'Analytics Platform'],
                href: '#/analytics-solutions',
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(108,63,197,0.22)' }}
                  style={{
                    background: '#fff', borderRadius: 20, padding: 40,
                    border: '1px solid rgba(108,63,197,0.1)',
                    boxShadow: '0 4px 24px rgba(26,79,160,0.08)',
                    height: '100%', display: 'flex', flexDirection: 'column',
                  }}
                >
                  <div style={{ marginBottom: 20 }}>{card.icon}</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0B0F2A', marginBottom: 12 }}>{card.title}</h3>
                  <p style={{ color: '#666', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{card.desc}</p>
                  <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 32, flex: 1 }}>
                    {card.services.map(s => (
                      <li key={s} style={{ color: '#444', fontSize: 14, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg, #1A4FA0, #6C3FC5)', display: 'inline-block', flexShrink: 0 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <a href={card.href} style={{
                    color: '#1A4FA0', fontWeight: 600, fontSize: 14, textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 4,
                  }}>Learn More <span style={{ fontSize: 18 }}>→</span></a>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SPEEGILE STRIP */}
      <section style={{ background: '#0B0F2A', padding: '48px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,79,160,0.2) 0%, rgba(108,63,197,0.2) 100%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <FadeUp>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              Why Businesses Trust <img src="assets/SpeegileLogo-clean.png" alt="Speegile" style={{ height: 44, objectFit: 'contain', verticalAlign: 'middle' }} />
            </h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40 }}>
            {WHY_ITEMS.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: 20, marginBottom: 20,
                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 34,
                  }}>{item.icon}</div>
                  <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{item.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6, maxWidth: 180 }}>{item.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1A4FA0 0%, #6C3FC5 100%)', padding: '48px 24px', textAlign: 'center' }}>
        <FadeUp>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Ready to grow your business?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 40 }}>
            Let's discuss how Speegile can help you build the right team and make better decisions.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <GradBtn href="#/contact">Talk to Us</GradBtn>
            <GradBtn href="#/human-capital" outline>Explore Services</GradBtn>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, FadeUp, GradBtn, CountUp, WHY_ITEMS });
