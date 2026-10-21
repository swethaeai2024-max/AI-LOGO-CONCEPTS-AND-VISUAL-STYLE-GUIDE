import { useState } from 'react';
import './App.css';

function App() {
  const [brand, setBrand] = useState('NEXOURA');
  const [tagline, setTagline] = useState('Imagine. Design. Inspire.');
  const [industry, setIndustry] = useState('Technology');
  const [color, setColor] = useState('#8b5cf6');
  const [active, setActive] = useState('Dashboard');
  const [generated, setGenerated] = useState(false);

  const features = [
    'Dashboard', 'Brand Creator', 'AI Logo Studio',
    'Originality Check', 'Color Palette', 'Typography',
    'Brand Style Guide', 'Mockup Studio', 'Prompt Library',
    'Before & After', 'Verification Report', 'Export Center'
  ];

  function downloadLogo() {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">
      <rect width="100%" height="100%" rx="25" fill="#ffffff"/>
      <circle cx="400" cy="110" r="55" fill="${color}"/>
      <path d="M375 125 L400 75 L425 125 L400 110 Z" fill="white"/>
      <text x="400" y="230" text-anchor="middle" font-size="48" font-weight="bold" fill="${color}">${brand}</text>
      <text x="400" y="275" text-anchor="middle" font-size="20" fill="#555">${tagline}</text>
    </svg>`;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    link.download = `${brand}-logo.svg`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  const descriptions = {
    'Brand Creator': 'Create your brand identity',
    'AI Logo Studio': 'Explore your logo concept',
    'Originality Check': 'Review your logo before submission',
    'Color Palette': 'Choose your brand colors',
    'Typography': 'Select your brand typography',
    'Brand Style Guide': 'Your brand guidelines',
    'Mockup Studio': 'Preview your brand on mockups',
    'Prompt Library': 'Save and reuse creative prompts',
    'Before & After': 'Compare your brand concepts',
    'Verification Report': 'Record your verification results',
    'Export Center': 'Download your brand assets'
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo"><span>✦</span> NEXOURA <small>AI</small></div>
        <p className="menu-label">WORKSPACE</p>
        {features.map((item, i) => (
          <button key={item}
            className={`nav-item ${active === item ? 'selected' : ''}`}
            onClick={() => setActive(item)}>
            <span>{['⌂','✧','✦','◉','◈','Aa','▤','▧','☷','⇄','✓','⇩'][i]}</span>
            {item}
          </button>
        ))}
        <div className="sidebar-bottom">✧ Your creative space</div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div><span className="status-dot"></span> Creative workspace</div>
          <button className="profile">S</button>
        </header>

        {active === 'Dashboard' ? (
          <>
            <section className="welcome">
              <div>
                <span className="eyebrow">✦ AI BRANDING WORKSPACE</span>
                <h1>Bring your ideas<br />to <span>life.</span></h1>
                <p>Create a memorable brand identity with your creative AI workspace.</p>
                <button className="primary" onClick={() => setActive('Brand Creator')}>
                  Start Creating ↗
                </button>
              </div>
              <div className="hero-art">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="gem">✦</div>
                <span className="float-tag">✧ Creativity meets AI</span>
              </div>
            </section>

            <div className="section-heading">
              <div><h2>Your workspace</h2><p>Everything you need to build your brand.</p></div>
            </div>

            <div className="stats">
              <div className="stat-card"><span>✦</span><p>Brand workspace</p><h3>NEXOURA AI</h3></div>
              <div className="stat-card"><span>◈</span><p>Creative tools</p><h3>12 Features</h3></div>
              <div className="stat-card"><span>↗</span><p>Current project</p><h3>{brand}</h3></div>
            </div>

            <div className="section-heading"><div><h2>Explore features</h2><p>Select a tool to get started.</p></div></div>
            <div className="feature-grid">
              {features.slice(1).map((item, i) => (
                <button className="feature-card" key={item} onClick={() => setActive(item)}>
                  <span className={`feature-icon icon-${i}`}>{['✧','✦','◉','◈','Aa','▤','▧','☷','⇄','✓','⇩'][i]}</span>
                  <h3>{item}</h3>
                  <p>{descriptions[item]}</p>
                  <b>Open tool ↗</b>
                </button>
              ))}
            </div>
          </>
        ) : (
          <section className="tool-page">
            <button className="back" onClick={() => setActive('Dashboard')}>← Dashboard</button>
            <span className="eyebrow">NEXOURA AI WORKSPACE</span>
            <h1>{active}</h1>
            <p className="tool-description">{descriptions[active] || 'Build your brand identity.'}</p>

            {(active === 'Brand Creator' || active === 'AI Logo Studio') && (
              <div className="form-card">
                <label>Brand name</label>
                <input value={brand} onChange={e => setBrand(e.target.value)} placeholder="Enter brand name" />
                <label>Industry</label>
                <select value={industry} onChange={e => setIndustry(e.target.value)}>
                  <option>Technology</option><option>Fashion</option><option>Food</option>
                  <option>Education</option><option>Beauty</option><option>Healthcare</option>
                </select>
                <label>Tagline</label>
                <input value={tagline} onChange={e => setTagline(e.target.value)} />
                <label>Brand color</label>
                <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                <button className="primary" onClick={() => setGenerated(true)}>Create Preview ✦</button>
                {generated && <div className="logo-preview" style={{color}}>
                  <span>✦</span><h2>{brand || 'YOUR BRAND'}</h2><p>{tagline}</p>
                  <small>{industry} · Logo concept preview</small>
                  <button className="primary" onClick={downloadLogo}>Download Logo SVG ↓</button>
                </div>}
              </div>
            )}

            {active === 'Color Palette' && (
              <div className="palette-grid">
                {['#8b5cf6','#3b82f6','#ec4899','#111827','#f9a8d4'].map(c => (
                  <button key={c} onClick={() => setColor(c)} style={{background:c}}>
                    {c} {color === c ? '✓' : ''}
                  </button>
                ))}
                <p>Selected color: <b>{color}</b></p>
              </div>
            )}

            {active === 'Typography' && (
              <div className="form-card">
                <h2>Typography Preview</h2><h1>{brand}</h1>
                <p>{tagline}</p><p>Modern · Clear · Memorable</p>
              </div>
            )}

            {active === 'Originality Check' && (
              <div className="form-card">
                <h2>Logo Review Checklist</h2>
                <p>□ Check similar logos using image search.</p>
                <p>□ Review trademarks in your target market.</p>
                <p>□ Record sources and review findings.</p>
                <p className="notice">This checklist does not perform an automated similarity scan or provide legal clearance.</p>
              </div>
            )}

            {active === 'Brand Style Guide' && (
              <div className="form-card">
                <h2>{brand} — Brand Guide</h2><p>Tagline: {tagline}</p>
                <p>Industry: {industry}</p><p>Primary color: {color}</p>
                <p>Typography: Modern sans-serif</p>
                <button className="primary" onClick={() => window.print()}>Print / Save Guide</button>
              </div>
            )}

            {active === 'Mockup Studio' && (
              <div className="mockups">
                <div className="mockup-card" style={{background:color,color:'white'}}><h2>{brand}</h2><p>BUSINESS CARD</p></div>
                <div className="mockup-card"><h2 style={{color}}>✦ {brand}</h2><p>PACKAGING CONCEPT</p></div>
                <div className="mockup-card"><h2 style={{color}}>✦</h2><p>{brand} T-SHIRT CONCEPT</p></div>
              </div>
            )}

            {active === 'Prompt Library' && (
              <div className="form-card">
                <h3>Brand logo prompt</h3>
                <p>Create a modern {industry} logo for {brand}. Use {color} as the primary color. Style: minimal, memorable, professional. Tagline: {tagline}.</p>
                <button className="primary" onClick={() => navigator.clipboard.writeText(`Create a modern ${industry} logo for ${brand}. Use ${color}. Tagline: ${tagline}.`)}>
                  Copy Prompt
                </button>
              </div>
            )}

            {active === 'Before & After' && (
              <div className="mockups">
                <div className="mockup-card"><h2>Before</h2><p>Initial brand concept</p></div>
                <div className="mockup-card" style={{color}}><h2>After · {brand}</h2><p>{tagline}</p></div>
              </div>
            )}

            {active === 'Verification Report' && (
              <div className="form-card"><h2>Verification Report</h2>
                <p>Project: {brand}</p><p>Industry: {industry}</p>
                <p>Color selected: {color}</p><p>Logo preview created: {generated ? 'Yes' : 'Not yet'}</p>
                <p>Originality scan: Manual review required.</p>
                <button className="primary" onClick={() => window.print()}>Print Report</button>
              </div>
            )}

            {active === 'Export Center' && (
              <div className="form-card">
                <h2>Export your assets</h2><p>Brand: {brand}</p>
                <button className="primary" onClick={downloadLogo}>Download Logo (SVG) ↓</button>
                <button className="secondary" onClick={() => window.print()}>Print brand report</button>
              </div>
            )}
          </section>
        )}
        <footer>© 2026 NEXOURA AI · Imagine. Design. Inspire.</footer>
      </main>
    </div>
  );
}

export default App;
