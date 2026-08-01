
const { motion } = window.FramerMotion;

function AboutPage() {
  return (
    <div>
      <PageHero
        tag="About Us"
        headline={<>Practical Solutions.<br/>Trusted Relationships.<br/>Sustainable Growth.</>}
        subheadline="Speegile helps businesses grow through focused Human Capital and Analytics solutions."
      />

      {/* About section */}
      <section style={{ background:'#fff', padding:'48px 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:64, alignItems:'start' }}>
            <FadeUp>
              <p style={{ color:'#6C3FC5', fontWeight:600, fontSize:13, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:12 }}>Our Story</p>
              <h2 style={{ fontSize:'clamp(24px,3.5vw,40px)', fontWeight:800, color:'#0B0F2A', marginBottom:24 }}>About Speegile</h2>
              <p style={{ color:'#555', fontSize:16, lineHeight:1.85, marginBottom:16 }}>
                Established in <strong>2018</strong>, Speegile supports growing businesses with dependable Human Capital and Analytics solutions.
              </p>
              <p style={{ color:'#555', fontSize:16, lineHeight:1.85, marginBottom:16 }}>
                Led by <strong>Purushottam Nivaskar</strong>, Founder — drawing on <strong>25+ years</strong> of professional experience including roles at <strong>TCS</strong>.
              </p>
              <p style={{ color:'#555', fontSize:16, lineHeight:1.85, marginBottom:24 }}>
                We have supported <strong>25+ customers across India</strong>, spanning Indian businesses, US-based IT consulting firms, European software product companies, Indian fintech firms, and multiple non-IT sectors.
              </p>
              <blockquote style={{
                borderLeft:'4px solid', borderImage:'linear-gradient(#1A4FA0,#6C3FC5) 1',
                paddingLeft:20, margin:0,
              }}>
                <p style={{ color:'#333', fontSize:17, fontStyle:'italic', lineHeight:1.7 }}>
                  "We believe stronger growth happens when the right people and the right decisions come together."
                </p>
              </blockquote>
            </FadeUp>

            {/* Founder card */}
            <FadeUp delay={0.15}>
              <motion.div
                whileHover={{ boxShadow:'0 0 40px rgba(108,63,197,0.2)' }}
                style={{
                  background:'linear-gradient(135deg,#0B0F2A 0%,#1a2050 100%)',
                  borderRadius:24, padding:44, border:'1px solid rgba(155,114,232,0.2)',
                  textAlign:'center',
                }}
              >
                {/* Avatar */}
                <div style={{
                  width:140, height:140, borderRadius:'50%', marginBottom:24,
                  border:'4px solid rgba(155,114,232,0.6)',
                  boxShadow:'0 0 32px rgba(108,63,197,0.5)',
                  overflow:'hidden', flexShrink:0,
                  margin:'0 auto 24px auto',
                }}>
                  <img src="assets/founder.jpeg" alt="Purushottam Nivaskar"
                    style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 15%' }} />
                </div>
                <h3 style={{ fontSize:22, fontWeight:700, color:'#fff', marginBottom:6 }}>Purushottam Nivaskar</h3>
                <p style={{ color:'#9B72E8', fontWeight:600, fontSize:14, marginBottom:16 }}>Founder, Speegile</p>
                <p style={{ color:'rgba(255,255,255,0.65)', fontSize:15, lineHeight:1.7 }}>
                  25+ years in technology and business leadership, including senior roles at TCS. Brings deep expertise across human capital development and business analytics.
                </p>
              </motion.div>

              {/* Stat callouts */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginTop:24 }}>
                {[
                  { val:'2018', label:'Year Founded' },
                  { val:'25+', label:'Years Experience' },
                  { val:'25+', label:'Customers' },
                ].map(s => (
                  <div key={s.label} style={{
                    background:'#F0F4FF', borderRadius:14, padding:'18px 12px', textAlign:'center',
                    border:'1px solid rgba(108,63,197,0.12)',
                  }}>
                    <div style={{ fontSize:26, fontWeight:800, color:'#1A4FA0', lineHeight:1 }}>
                      <CountUp end={parseInt(s.val)} suffix={s.val.includes('+') ? '+' : ''} />
                    </div>
                    <div style={{ color:'#777', fontSize:11, marginTop:6, lineHeight:1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why clients */}
      <section style={{ background:'#0B0F2A', padding:'48px 24px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(26,79,160,0.15) 0%,rgba(108,63,197,0.15) 100%)', pointerEvents:'none' }}/>
        <div style={{ maxWidth:1100, margin:'0 auto', position:'relative' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(22px,3.5vw,40px)', fontWeight:800, color:'#fff', textAlign:'center', marginBottom:56 }}>
              Why Clients Work With Us
            </h2>
          </FadeUp>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:20, alignItems:'stretch' }}>
            {[
              { icon: '💡', title: 'Business-First Thinking' },
              { icon: '🤝', title: 'Dependable, transparent execution'},
              { icon: '⚙️', title: 'Flexible Engagement Models' },
              { icon: '🌱', title: 'Long-Term Partnership' },
              { icon: '🏆', title: 'Experienced Leadership' }
            ].map((item,i) => (
              <FadeUp key={item.title} delay={i*0.1}>
                <motion.div
                  whileHover={{ scale:1.05, boxShadow:'0 0 24px rgba(108,63,197,0.3)' }}
                  style={{
                    background:'rgba(255,255,255,0.06)', borderRadius:18, padding:'24px 16px', textAlign:'center',
                    border:'1px solid rgba(155,114,232,0.15)',
                    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                    // minHeight:120,
                    height: 160,
                  }}
                >
                  <div style={{ fontSize:30, marginBottom:10 }}>{item.icon}</div>
                  <h4 style={{ color:'#fff', fontWeight:700, fontSize:13, lineHeight:1.4, margin:0 }}>{item.title}</h4>                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'linear-gradient(135deg,#1A4FA0 0%,#6C3FC5 100%)', padding:'48px 24px', textAlign:'center' }}>
        <FadeUp>
          <h2 style={{ fontSize:'clamp(22px,3.5vw,40px)', fontWeight:800, color:'#fff', marginBottom:16 }}>
            Let's Build Something Together
          </h2>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:16, marginBottom:40 }}>
            Reach out to discuss your business needs.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            <GradBtn href="#/contact">Talk to Us</GradBtn>
            <GradBtn href="#/human-capital" outline>Explore Services</GradBtn>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage });
