
const { motion } = window.FramerMotion;

const WHY_DETAIL = [
  {
    icon: '💡',
    title: 'Business-first thinking',
    color: '#1A4FA0',
    desc: 'We take the time to understand your specific business context, goals, and constraints before recommending any approach. Our solutions are shaped by what you actually need — not by a standard template or off-the-shelf package.',
  },
  {
    icon: '🤝',
    title: 'Dependable, transparent execution',
    color: '#2D7DD2',
    desc: 'We communicate clearly at every step, set realistic expectations, and follow through on our commitments. You always know where things stand — no surprises, no over-promising.',
  },
  {
    icon: '⚙️',
    title: 'Flexible engagement models',
    color: '#6C3FC5',
    desc: 'Whether you need a one-time project, ongoing support, or a phased rollout, we adapt to your timeline and budget. We offer engagement structures that make sense for growing businesses at every stage.',
  },
  {
    icon: '🌱',
    title: 'Long-term partnership mindset',
    color: '#9B72E8',
    desc: 'We are invested in your long-term success, not just the first engagement. We build relationships that evolve as your business grows, staying connected to provide support when you need it most.',
  },
  {
    icon: '🏆',
    title: 'Experienced leadership',
    color: '#1A4FA0',
    desc: 'Speegile is led by a founder with 25+ years of professional experience, including senior roles at leading organisations. That depth of experience informs every engagement we take on.',
  },
];

function WhySpeegile() {
  return (
    <div>
      <PageHero
        tag="Why Speegile"
        headline="What makes us the right partner for your business growth."
        subheadline="Five principles that guide every client engagement — from first conversation to long-term partnership."
      />

      <section style={{ background:'#fff', padding:'48px 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            {WHY_DETAIL.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale:1.02, boxShadow:'0 0 32px rgba(108,63,197,0.18)' }}
                  className="why-card"
                  style={{
                    background:'#fff', borderRadius:20, padding:'32px 36px',
                    border:'1px solid rgba(108,63,197,0.1)',
                    boxShadow:'0 4px 24px rgba(26,79,160,0.07)',
                    display:'flex', gap:28, alignItems:'flex-start',
                  }}
                >
                  <motion.div
                    animate={{ y:[0,-6,0] }}
                    transition={{ duration:4+i*0.6, repeat:Infinity, ease:'easeInOut', delay:i*0.4 }}
                    style={{
                      width:72, height:72, borderRadius:18, flexShrink:0,
                      background:`linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                      border:`2px solid ${item.color}33`,
                      display:'flex', alignItems:'center', justifyContent:'center', fontSize:32,
                    }}
                  >{item.icon}</motion.div>
                  <div>
                    <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
                      <span style={{ fontSize:13, fontWeight:700, color:item.color, letterSpacing:'0.05em', textTransform:'uppercase' }}>
                        0{i+1}
                      </span>
                      <h3 style={{ fontSize:22, fontWeight:700, color:'#0B0F2A' }}>{item.title}</h3>
                    </div>
                    <p style={{ color:'#555', fontSize:16, lineHeight:1.8 }}>{item.desc}</p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background:'linear-gradient(135deg,#1A4FA0 0%,#6C3FC5 100%)', padding:'48px 24px', textAlign:'center' }}>
        <FadeUp>
          <h2 style={{ fontSize:'clamp(24px,3.5vw,42px)', fontWeight:800, color:'#fff', marginBottom:16 }}>
            Ready to Experience the Speegile Difference?
          </h2>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:16, marginBottom:40 }}>
            Let's start a conversation about how we can help your business grow.
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

Object.assign(window, { WhySpeegile });
