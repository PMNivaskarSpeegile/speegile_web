
const { motion } = window.FramerMotion;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: '#0B0F2A',
      borderTop: '3px solid transparent',
      borderImage: 'linear-gradient(90deg, #1A4FA0, #6C3FC5) 1',
      padding: '60px 24px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <a href="#/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 16 }}>
              <SpeegileLogoSVG size={130} />
            </a>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, marginTop: 12 }}>
              Helping businesses grow through people and data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Quick Links</h4>
            {[
              { label: 'Home', hash: '#/' },
              { label: 'Why Speegile', hash: '#/why-speegile' },
              { label: 'About Us', hash: '#/about' },
              { label: 'Contact', hash: '#/contact' },
            ].map(l => (
              <a key={l.hash} href={l.hash} style={{
                display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none',
                marginBottom: 10, transition: 'color 0.2s',
              }} className="footer-link">{l.label}</a>
            ))}
          </div>

          {/* Services — only navbar items */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Services</h4>
            {[
              { label: 'Human Capital Solutions', hash: '#/human-capital' },
              { label: 'Analytics Solutions', hash: '#/analytics-solutions' },
            ].map(l => (
              <a key={l.label} href={l.hash} style={{
                display: 'block', color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none',
                marginBottom: 10, transition: 'color 0.2s',
              }} className="footer-link">{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Contact</h4>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 10 }}>📞 9920930934</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 10 }}>📧 p.nivaskar@speegile.com</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 10 }}>📍 Borivali, Mumbai</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>© {year} Speegile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
