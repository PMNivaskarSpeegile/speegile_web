
const { motion, AnimatePresence } = window.FramerMotion;

const NAV_LINKS = [
  { label: 'Home', hash: '#/' },
  { label: 'Human Capital Solutions', hash: '#/human-capital' },
  { label: 'Analytics Solutions', hash: '#/analytics-solutions' },
  { label: 'Why Speegile', hash: '#/why-speegile' },
  { label: 'About Us', hash: '#/about' },
  { label: 'Contact', hash: '#/contact' },
];

function SpeegileLogoSVG({ size = 140 }) {
  const height = Math.round(size * 0.42);
  return (
    <img
      src="assets/SpeegileLogo-clean.png"
      alt="Speegile"
      width={size}
      height={height}
      style={{ display: 'block', objectFit: 'contain' }}
    />
  );
}

function Navbar({ currentHash }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => setMobileOpen(false), [currentHash]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(11,15,42,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(108,63,197,0.18)',
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.35)' : 'none',
        padding: '0 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <SpeegileLogoSVG size={100} />
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
          {NAV_LINKS.map(link => {
            const active = currentHash === link.hash;
            return (
              <a key={link.hash} href={link.hash} style={{
                textDecoration: 'none', padding: '8px 12px', fontSize: 14, fontWeight: 500,
                color: active ? '#9B72E8' : 'rgba(255,255,255,0.82)',
                position: 'relative', transition: 'color 0.2s',
              }} className="nav-link">
                {link.label}
                {active && (
                  <motion.div layoutId="nav-underline" style={{
                    position: 'absolute', bottom: 2, left: 12, right: 12, height: 2,
                    background: 'linear-gradient(90deg, #1A4FA0, #6C3FC5)',
                    borderRadius: 2,
                  }} />
                )}
              </a>
            );
          })}
          <a href="#/contact" style={{
            marginLeft: 8, padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14,
            background: 'linear-gradient(135deg, #1A4FA0, #6C3FC5)',
            color: '#fff', textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(108,63,197,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }} className="cta-btn">Talk to Us</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(o => !o)} className="nav-hamburger" style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 8,
          display: 'none', flexDirection: 'column', gap: 5,
        }}>
          <span style={{ width: 24, height: 2, background: '#fff', borderRadius: 2, display: 'block', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ width: 24, height: 2, background: '#fff', borderRadius: 2, display: 'block', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ width: 24, height: 2, background: '#fff', borderRadius: 2, display: 'block', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', background: 'rgba(11,15,42,0.98)', backdropFilter: 'blur(14px)' }}
            className="nav-mobile-drawer"
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map(link => (
                <a key={link.hash} href={link.hash} style={{
                  textDecoration: 'none', padding: '12px 0', fontSize: 16, fontWeight: 500,
                  color: currentHash === link.hash ? '#9B72E8' : 'rgba(255,255,255,0.82)',
                  borderBottom: '1px solid rgba(26,79,160,0.08)',
                }}>{link.label}</a>
              ))}
              <a href="#/contact" style={{
                marginTop: 16, padding: '14px 20px', borderRadius: 8, fontWeight: 600, fontSize: 15,
                background: 'linear-gradient(135deg, #1A4FA0, #6C3FC5)',
                color: '#fff', textDecoration: 'none', textAlign: 'center',
              }}>Talk to Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

Object.assign(window, { Navbar, SpeegileLogoSVG });
