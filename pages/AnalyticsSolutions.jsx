
const { motion } = window.FramerMotion;

function AnalyticsPage() {
  return (
    <div>
      <PageHero
        tag="Analytics Solutions"
        headline="Convert business data into actionable insights that unlock sustainable growth."
        subheadline="Dashboards, reporting, insights, and process improvement solutions designed for growing businesses."
      />

      {/* Problem */}
      <section style={{ background:'#F0F4FF', padding:'48px 24px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(24px,3.5vw,40px)', fontWeight:800, color:'#0B0F2A', marginBottom:20 }}>
              Better Visibility Enables Better Performance
            </h2>
            <p style={{ color:'#555', fontSize:17, lineHeight:1.8, maxWidth:700 }}>
              Many businesses have data but lack timely visibility, clear measures, and actionable insights.
              Speegile helps businesses unlock valuable insights from data that improve sales, finance, operations, and overall performance.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section style={{ background:'#fff', padding:'48px 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <FadeUp><h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:800, color:'#0B0F2A', marginBottom:48 }}>Our Services</h2></FadeUp>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:32, alignItems:'stretch' }}>
            <FadeUp delay={0} style={{ display:'flex' }}>
              <motion.div
                whileHover={{ scale:1.03, boxShadow:'0 0 32px rgba(108,63,197,0.22)' }}
                style={{ background:'#fff', borderRadius:20, padding:44, border:'1px solid rgba(108,63,197,0.1)', boxShadow:'0 4px 24px rgba(26,79,160,0.08)', display:'flex', flexDirection:'column', width:'100%' }}
              >
                <div style={{ width:52, height:52, borderRadius:14, background:'linear-gradient(135deg,#1A4FA0,#6C3FC5)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20 }}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M5 21l5-5 4 4 7-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 style={{ fontSize:22, fontWeight:700, color:'#0B0F2A', marginBottom:12 }}>Analytics Consulting</h3>
                <p style={{ color:'#666', fontSize:15, lineHeight:1.7, marginBottom:24 }}>
                  We help businesses define meaningful measures, uncover valuable insights, and identify improvement opportunities.
                </p>
                <p style={{ color:'#888', fontSize:13, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:12 }}>Includes</p>
                <ul style={{ paddingLeft:0, listStyle:'none' }}>
                  {['Business pain-point assessment','KPI definition','Analytics workflow design'].map(it => (
                    <li key={it} style={{ color:'#444', fontSize:14, marginBottom:8, display:'flex', alignItems:'center', gap:8 }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background:'linear-gradient(135deg,#1A4FA0,#6C3FC5)', display:'inline-block', flexShrink:0 }}/>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.15} style={{ display:'flex' }}>
              <motion.div
                whileHover={{ scale:1.03, boxShadow:'0 0 32px rgba(108,63,197,0.22)' }}
                style={{ background:'#fff', borderRadius:20, padding:44, border:'1px solid rgba(108,63,197,0.1)', boxShadow:'0 4px 24px rgba(26,79,160,0.08)', display:'flex', flexDirection:'column', width:'100%' }}
              >
                <div style={{ width:52, height:52, borderRadius:14, background:'linear-gradient(135deg,#2D7DD2,#9B72E8)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20 }}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="4" y="4" width="8" height="8" rx="2" fill="#fff"/><rect x="14" y="4" width="8" height="8" rx="2" fill="rgba(255,255,255,0.6)"/><rect x="4" y="14" width="8" height="8" rx="2" fill="rgba(255,255,255,0.6)"/><rect x="14" y="14" width="8" height="8" rx="2" fill="#fff"/></svg>
                </div>
                <h3 style={{ fontSize:22, fontWeight:700, color:'#0B0F2A', marginBottom:12 }}>Analytics Platform</h3>
                <p style={{ color:'#666', fontSize:15, lineHeight:1.7, marginBottom:24 }}>
                  Our platform gives businesses clear visibility through tailored dashboards, secure access, and decision-ready insights.
                </p>
                <p style={{ color:'#888', fontSize:13, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:12 }}>Includes</p>
                <ul style={{ paddingLeft:0, listStyle:'none' }}>
                  {['Custom dashboards','Data integration setup','Role-based access','Automated refresh'].map(it => (
                    <li key={it} style={{ color:'#444', fontSize:14, marginBottom:8, display:'flex', alignItems:'center', gap:8 }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background:'linear-gradient(135deg,#2D7DD2,#9B72E8)', display:'inline-block', flexShrink:0 }}/>
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why */}
      <section style={{ background:'#F0F4FF', padding:'48px 24px' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:800, color:'#0B0F2A', marginBottom:40 }}>
              Why Speegile
            </h2>
          </FadeUp>
          <WhyList items={[
            'Clear understanding of business needs and challenges',
            'Fit-for-purpose, user-friendly analytics solutions',
            'Clear reporting with actionable insights',
            'Flexible engagement models',
            'Long-term partnership mindset',
          ]} />
          <FadeUp delay={0.3}>
            <p style={{ marginTop:28, paddingTop:20, borderTop:'1px solid rgba(108,63,197,0.1)', fontSize:'clamp(18px,2.5vw,26px)', fontWeight:700 }}>
              Understand <span style={{ color:'#F5A623' }}>DATA</span>, Unlock <span style={{ color:'#F5A623' }}>GROWTH</span>
            </p>
          </FadeUp>
        </div>
      </section>

      <CtaBanner
        title="Need Better Visibility and Control Across Your Business?"
        subtitle="Let's discuss your reporting and analytics needs. Your journey to data-driven decisions starts here."
        // extraBtn={
        //   <motion.a
        //     href="https://d21txo8rrd1f3.cloudfront.net/assets/speegile-analytics-brochure.pdf"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(255,255,255,0.3)' }}
        //     whileTap={{ scale: 0.97 }}
        //     style={{
        //       display: 'inline-block', textDecoration: 'none',
        //       padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15,
        //       background: 'transparent', color: '#fff',
        //       border: '2px solid rgba(255,255,255,0.6)',
        //       cursor: 'pointer', letterSpacing: '0.01em',
        //     }}
        //   >
        //     Download Brochure
        //   </motion.a>
        // }
      />
    </div>
  );
}

Object.assign(window, { AnalyticsPage });
