
const { motion } = window.FramerMotion;

function PageHero({ headline, subheadline, tag }) {
  return (
    <section style={{
      background: '#0B0F2A', padding: '140px 24px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <motion.div animate={{ scale: [1,1.2,1], opacity:[0.3,0.5,0.3] }} transition={{ duration: 8, repeat: Infinity }}
          style={{ position:'absolute', top:'20%', right:'10%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle, rgba(108,63,197,0.35) 0%, transparent 70%)' }}/>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center' }}>
        {tag && (
          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
            style={{ color:'#9B72E8', fontWeight:600, fontSize:13, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:16, textAlign:'center' }}>
            {tag}
          </motion.p>
        )}
        <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
          style={{ fontSize:'clamp(28px,5vw,56px)', fontWeight:800, color:'#fff', lineHeight:1.3, marginBottom:20, textAlign:'center' }}>
          {headline}
        </motion.h1>
        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
          style={{ fontSize:'clamp(15px,2vw,19px)', color:'rgba(255,255,255,0.7)', lineHeight:1.7, maxWidth:640, textAlign:'center' }}>
          {subheadline}
        </motion.p>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, items }) {
  return (
    <motion.div
      whileHover={{ scale:1.03, boxShadow:'0 0 32px rgba(108,63,197,0.22)' }}
      style={{
        background:'#fff', borderRadius:20, padding:40,
        border:'1px solid rgba(108,63,197,0.1)',
        boxShadow:'0 4px 24px rgba(26,79,160,0.08)',
        height:'100%', display:'flex', flexDirection:'column',
      }}
    >
      <h3 style={{ fontSize:22, fontWeight:700, color:'#0B0F2A', marginBottom:12 }}>{title}</h3>
      <p style={{ color:'#666', fontSize:15, lineHeight:1.7, marginBottom:20, flex:1 }}>{desc}</p>
      {items && (
        <ul style={{ paddingLeft:0, listStyle:'none' }}>
          {items.map(it => (
            <li key={it} style={{ color:'#444', fontSize:14, marginBottom:8, display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'linear-gradient(135deg,#1A4FA0,#6C3FC5)', display:'inline-block', flexShrink:0 }} />
              {it}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function WhyList({ items }) {
  return (
    <ul style={{ paddingLeft:0, listStyle:'none' }}>
      {items.map((item, i) => (
        <FadeUp key={item} delay={i * 0.08}>
          <motion.li
            whileHover={{ x: 6 }}
            style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 0', borderBottom:'1px solid rgba(108,63,197,0.08)' }}
          >
            <span style={{ width:28, height:28, borderRadius:8, background:'linear-gradient(135deg,#1A4FA0,#6C3FC5)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5l3.5 3.5 5.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span style={{ color:'#333', fontSize:16 }}>{item}</span>
          </motion.li>
        </FadeUp>
      ))}
    </ul>
  );
}

function CtaBanner({ title, subtitle, extraBtn }) {
  return (
    <section style={{ background:'linear-gradient(135deg,#1A4FA0 0%,#6C3FC5 100%)', padding:'48px 24px', textAlign:'center' }}>
      <FadeUp>
        <h2 style={{ fontSize:'clamp(22px,3.5vw,40px)', fontWeight:800, color:'#fff', marginBottom:12 }}>{title}</h2>
        <p style={{ color:'rgba(255,255,255,0.8)', fontSize:16, marginBottom:36, maxWidth:520, margin:'0 auto 36px' }}>{subtitle}</p>
        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <GradBtn href="#/contact">Talk to Us</GradBtn>
          {extraBtn}
        </div>
      </FadeUp>
    </section>
  );
}

function HumanCapitalPage() {
  return (
    <div>
      <PageHero
        tag="Human Capital Solutions"
        headline="Connect with the right talent to build stronger teams for sustainable growth."
        subheadline="Recruitment, staffing, and fresher skill development programs designed for growing businesses."
      />

      {/* Problem */}
      <section style={{ background:'#F0F4FF', padding:'48px 24px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(24px,3.5vw,40px)', fontWeight:800, color:'#0B0F2A', marginBottom:20 }}>
              Hiring the Right Talent Should Be Easier
            </h2>
            <p style={{ color:'#555', fontSize:17, lineHeight:1.8, maxWidth:700 }}>
              Speegile helps businesses identify, hire, and develop talent across fresher to experienced talent needs.
              We help businesses reduce their hiring effort by connecting them with genuine and relevant candidates.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section style={{ background:'#fff', padding:'48px 24px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <FadeUp><h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:800, color:'#0B0F2A', marginBottom:48 }}>Our Services</h2></FadeUp>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:28, alignItems:'stretch' }}>
            {[
              { title:'Recruitment', desc:'We help businesses hire permanent talent from entry-level to experienced roles.' },
              { title:'Staff Augmentation', desc:'We help businesses access contract and project-based resources based on their needs.' },
              { title:'Fresher Skill Development Programs', desc:'We help businesses build pipelines of job-ready entry-level talent through customized development programs.' },
            ].map((c,i) => <FadeUp key={c.title} delay={i*0.12} style={{ display:'flex' }}><ServiceCard {...c} /></FadeUp>)}
          </div>
        </div>
      </section>

      {/* Why */}
      <section style={{ background:'#F0F4FF', padding:'48px 24px' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <FadeUp>
            <h2 style={{ fontSize:'clamp(22px,3vw,36px)', fontWeight:800, color:'#0B0F2A', marginBottom:32 }}>
              Why Speegile
            </h2>
          </FadeUp>
          <WhyList items={[
            'Practical understanding of business roles',
            'Focus on relevant and genuine candidates',
            'Well-managed, process-driven hiring support',
            'Adaptable to changing business needs',
            'Long-term partnership mindset',
          ]} />
          <FadeUp delay={0.3}>
            <p style={{ color:'#666', fontSize:16, marginTop:28, paddingTop:20, borderTop:'1px solid rgba(108,63,197,0.1)' }}>
              Your reliable partner for human capital enrichment.
            </p>
          </FadeUp>
        </div>
      </section>

      <CtaBanner
        title="Need Hiring Support or Team Expansion?"
        subtitle="Let's discuss your requirement. Discover the Speegile advantage and strengthen your workforce today."
        // extraBtn={
        //   <motion.a
        //     href="https://d21txo8rrd1f3.cloudfront.net/assets/speegile-human-capital-brochure.pdf"
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

Object.assign(window, { HumanCapitalPage, PageHero, ServiceCard, WhyList, CtaBanner });
