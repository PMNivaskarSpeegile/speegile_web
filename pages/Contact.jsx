
const { motion, AnimatePresence } = window.FramerMotion;

function ContactPage() {
  const [form, setForm] = React.useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1800);
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: 10, fontSize: 15,
    border: '1.5px solid rgba(108,63,197,0.2)', outline: 'none',
    background: '#fff', color: '#1a1a2e', fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box',
  };

  return (
    <div>
      <PageHero
        tag="Contact"
        headline="Let's Talk"
        subheadline="Tell us about your business needs. We'll get back to you within 1 business day."
      />

      <section style={{ background: '#F0F4FF', padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>

          {/* Form */}
          <FadeUp>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ textAlign: 'center', padding: '60px 40px', background: '#fff', borderRadius: 24, boxShadow: '0 4px 32px rgba(108,63,197,0.12)' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    style={{
                      width: 80, height: 80, borderRadius: '50%', margin: '0 auto 24px',
                      background: 'linear-gradient(135deg,#1A4FA0,#6C3FC5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path d="M8 18l7 7 13-14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: '#0B0F2A', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7 }}>
                    Thank you for reaching out. We'll get back to you within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  style={{ background: '#fff', borderRadius: 24, padding: '40px', boxShadow: '0 4px 32px rgba(108,63,197,0.1)' }}
                >
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0B0F2A', marginBottom: 32 }}>Send us a message</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 16 }}>
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', required: true },
                      { name: 'company', label: 'Company Name', type: 'text', required: true },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>{f.label}</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(108,63,197,0.15)' }}
                          type={f.type} name={f.name} required={f.required}
                          value={form[f.name]} onChange={handleChange}
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#6C3FC5'}
                          onBlur={e => e.target.style.borderColor = 'rgba(108,63,197,0.2)'}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 16 }}>
                    {[
                      { name: 'email', label: 'Email Address', type: 'email', required: true },
                      { name: 'phone', label: 'Phone Number', type: 'tel' },
                    ].map(f => (
                      <div key={f.name}>
                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>{f.label}</label>
                        <motion.input
                          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(108,63,197,0.15)' }}
                          type={f.type} name={f.name} required={f.required}
                          value={form[f.name]} onChange={handleChange}
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#6C3FC5'}
                          onBlur={e => e.target.style.borderColor = 'rgba(108,63,197,0.2)'}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>Service Interest</label>
                    <select name="service" value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = '#6C3FC5'}
                      onBlur={e => e.target.style.borderColor = 'rgba(108,63,197,0.2)'}
                    >
                      <option value="">Select a service…</option>
                      <option value="human-capital">Human Capital Solutions</option>
                      <option value="analytics">Analytics Solutions</option>
                      <option value="both">Both</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#444', marginBottom: 6 }}>Message / Requirement</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.005, boxShadow: '0 0 0 3px rgba(108,63,197,0.15)' }}
                      name="message" rows={5} value={form.message} onChange={handleChange}
                      placeholder="Tell us about your business needs…"
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                      onFocus={e => e.target.style.borderColor = '#6C3FC5'}
                      onBlur={e => e.target.style.borderColor = 'rgba(108,63,197,0.2)'}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(108,63,197,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    disabled={submitting}
                    style={{
                      width: '100%', padding: '16px', borderRadius: 10, border: 'none', cursor: 'pointer',
                      background: 'linear-gradient(135deg,#1A4FA0,#6C3FC5)',
                      color: '#fff', fontWeight: 700, fontSize: 16, fontFamily: 'inherit',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    }}
                  >
                    {submitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', display: 'inline-block' }}
                        />
                        Sending…
                      </>
                    ) : 'Send Message'}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeUp>

          {/* Contact info */}
          <FadeUp delay={0.15}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0B0F2A', marginBottom: 32 }}>Get in touch</h3>
              {[
                { icon: '📞', label: 'Phone', val: '9920930934' },
                { icon: '📧', label: 'Email', val: 'p.nivaskar@speegile.com' },
                { icon: '📍', label: 'Location', val: 'Borivali, Mumbai' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 16, marginBottom: 28, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: 'linear-gradient(135deg,rgba(26,79,160,0.12),rgba(108,63,197,0.12))',
                    border: '1px solid rgba(108,63,197,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  }}>{c.icon}</div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</p>
                    <p style={{ fontSize: 15, color: '#333' }}>{c.val}</p>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 40, padding: 28, borderRadius: 18, background: 'linear-gradient(135deg,#0B0F2A,#1a2050)', border: '1px solid rgba(155,114,232,0.2)' }}>
                <p style={{ color: '#9B72E8', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Response Time</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>
                  We respond to all enquiries within <strong style={{ color: '#fff' }}>1 business day</strong>.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { ContactPage });
