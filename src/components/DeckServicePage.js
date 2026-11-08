import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import SEO from './SEO';
import services from '../data/deckServiceContent.json';
import media from '../data/deckServiceMedia.json';
import LocalDeckGallery from './LocalDeckGallery';
import ProjectVideoGallery from './ProjectVideoGallery';
import DeckServiceLinks from './DeckServiceLinks';
import ReviewsPanel, { ReviewsPreview } from './ReviewsPanel';
import comparisons from '../data/localDeckComparisons.json';
import { formatPhone } from './localDeckContact';
import '../styles/local-deck.css';
import '../styles/deck-services.css';

const phone = 'tel:+18597657267';

function ServiceAreas() {
  const areas = [['Nicholasville','nicholasville'],['Georgetown','georgetown'],['Versailles','versailles'],['Winchester','winchester'],['Richmond','richmond'],['Frankfort','frankfort'],['Berea','berea'],['Danville','danville']];
  return <section className="service-area-section"><div className="wrap"><div className="head"><span className="kick g">Close to home</span><h2 className="h2">Deck building across Central Kentucky.</h2><p className="lead">Based in Nicholasville and serving Lexington and nearby communities. Send your project address so we can confirm your visit.</p></div><nav className="service-area-links" aria-label="Local deck building services">{areas.map(([name,slug])=><a className="btn btn-w" key={slug} href={`/cities/${slug}-ky/deck-builder/`}>{name} deck building <span aria-hidden="true">→</span></a>)}</nav></div></section>;
}

function Estimate({ service }) {
  const [status, setStatus] = useState(''), [sending, setSending] = useState(false), [sent, setSent] = useState(false);
  const form = useRef(null), inFlight = useRef(false);
  const submit = async event => {
    event.preventDefault();
    if (inFlight.current) return;
    const values = Object.fromEntries(new FormData(form.current));
    if (!/^(?:1)?\d{10}$/.test(values.phone.replace(/\D/g, ''))) { setStatus('Enter a 10-digit phone number.'); form.current.elements.phone.focus(); return; }
    inFlight.current = true; setSending(true); setStatus('');
    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...values, project_type: service.navLabel || service.eyebrow, source: 'deck-service', placement: window.location.pathname, page: window.location.href, submission_stage: 'contact', ...Object.fromEntries(['utm_source','utm_medium','utm_campaign','gclid'].map(key => [key, params.get(key) || ''])) }) });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Request failed');
      setSent(true);
      window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'generate_lead', form: 'deck-service-estimate', service: window.location.pathname });
    } catch { setStatus('Your request could not be sent. Please try again or call (859) 765-7267.'); }
    finally { inFlight.current = false; setSending(false); }
  };
  return <section className="inline-estimate" id="estimate" aria-labelledby="estimate-title"><div className="wrap inline-estimate-layout">
    <div className="inline-estimate-copy"><span className="estimate-eyebrow"><i aria-hidden="true" /> Start with your space</span><h2 id="estimate-title">{service.formTitle || 'A better plan starts with a closer look.'}</h2><p>{service.formText || 'Tell us what needs to change. We’ll visit your home, look at the site and talk through the options before you commit.'}</p><ol className="estimate-steps"><li><b>01</b><span>Tell us where and what you’re planning.</span></li><li><b>02</b><span>Review materials, measurements and access.</span></li><li><b>03</b><span>Get a written scope and a clear estimate.</span></li></ol></div>
    <div className="inline-lead-form">{sent ? <div className="service-thanks" role="status" tabIndex={-1}><span className="kick g">Request received</span><h3>Thank you. We’ll be in touch.</h3><p>Our team will call within one business day to arrange your free on-site visit.</p><a className="btn btn-g" href={phone}>Call (859) 765-7267</a></div> : <form ref={form} onSubmit={submit}>
      <div className="estimate-form-heading"><span className="estimate-form-tag">Free on-site estimate</span><h3>Let’s talk about your project.</h3></div>
      <div className="inline-fields"><label htmlFor="service-name">Your name<input id="service-name" name="name" autoComplete="name" placeholder="e.g. Alex Smith" maxLength={160} required /></label><label htmlFor="service-phone">Phone number<input id="service-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(859) 555-0123" maxLength={20} onChange={event => { event.target.value = formatPhone(event.target.value); }} required /></label><label htmlFor="service-zip">ZIP code<input id="service-zip" name="zip" inputMode="numeric" autoComplete="postal-code" placeholder="e.g. 40502" pattern="[0-9]{5}" maxLength={5} required /></label><label htmlFor="service-email">Email (optional)<input id="service-email" name="email" type="email" autoComplete="email" placeholder="alex@example.com" maxLength={254} /></label><label className="full-field" htmlFor="service-details">What would you like to change? (optional)<textarea id="service-details" name="message" rows={3} maxLength={2000} placeholder="An aging deck, room for a table, more shade…" /></label></div>
      <div className="service-honey" aria-hidden="true"><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div>
      <p className="inline-status" role="status" aria-live="polite">{status}</p><button className="btn btn-o" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Request My Free Visit'}</button><p className="inline-privacy">We’ll contact you about your request. <a href="/privacy-policy/">Privacy policy</a></p>
    </form>}</div>
  </div></section>;
}

function BeforeAfter() {
  const [index, setIndex] = useState(0), [position, setPosition] = useState(50);
  const item = comparisons[index];
  return <section className="bg-mint transformations" id="transformations"><div className="wrap"><div className="head c"><span className="kick g">Before &amp; after</span><h2 className="h2">Same home. <span className="ul-g">A different way to use it.</span></h2></div><div className="ba"><div className="ba-media"><div className="bas" data-portrait={item.portrait || false} style={{ '--pos': `${position}%`, '--p': `${position}%` }}><img src={item.before} alt={`Before: ${item.title}`} loading="lazy" /><img className="af" src={item.after} alt={`After: ${item.title}`} loading="lazy" style={{ clipPath: `inset(0 0 0 ${position}%)` }} /><span className="ln" style={{ left: `${position}%` }} /><span className="kn" style={{ left: `${position}%` }} aria-hidden="true">⇆</span><span className="t b">BEFORE</span><span className="t a">AFTER</span><input type="range" min="0" max="100" value={position} onChange={event => setPosition(Number(event.target.value))} aria-label="Compare before and after" /></div><div className="bathumbs">{comparisons.map((project, i) => <button key={project.before} type="button" aria-label={`Show ${project.title}`} aria-current={i === index} onClick={() => { setIndex(i); setPosition(50); }}><img src={project.thumbnail || project.after} alt="" loading="lazy" /></button>)}</div></div><div className="bainfo"><span className="comparison-count">Project {index+1} of {comparisons.length}</span><h3>{item.title}</h3><p>{item.description}</p></div></div></div></section>;
}

function HomeownerStories() {
  const videos = useRef(null);
  useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) entry.target.pause(); }), { threshold: .1 }); const list = [...videos.current.querySelectorAll('video')]; list.forEach(video => observer.observe(video)); return () => { observer.disconnect(); list.forEach(video => video.pause()); }; }, []);
  return <section className="bg-mint" id="stories" ref={videos}><div className="wrap"><div className="head c"><span className="kick g">Homeowner stories</span><h2 className="h2">What the build <span className="ul-g">was like.</span></h2></div><div className="vrow testimonial-row">{[['perryville','A deck build in Perryville.'],['lexington','A Lexington homeowner’s experience.']].map(([key,title]) => <article className="vc customer-story" key={key}><video controls playsInline preload="none" poster={`/local-deck/img/story-${key}-hd.webp`} src={`/local-deck/video/story-${key}-hd.mp4`} aria-label={title} /><div className="story-copy"><h3>{title}</h3></div></article>)}</div></div></section>;
}

function SelectedWork({ service }) {
  return <section className="service-selected-work"><div className="wrap"><div className="head c"><span className="kick g">Project details</span><h2 className="h2">{service.galleryHeading}</h2><p className="lead">{service.galleryText}</p></div><div className="service-selected-projects">{service.galleryImages.map(photo=><figure key={photo.src}><img src={photo.src} alt={photo.alt} width="1200" height="900" loading="lazy" decoding="async" /><figcaption>{photo.alt}</figcaption></figure>)}</div></div></section>;
}

function ServiceDetails({ service }) {
  return <div className="service-details">{service.sections.map((section,index)=><section key={section.id || section.heading} className={index%2?'bg-mint':''}><div className="wrap service-editorial"><div><span className="kick g">{section.eyebrow || `Plan the details · 0${index+1}`}</span><h2 className="h2">{section.heading}</h2>{section.image && <img src={section.image} alt={section.alt || ''} loading="lazy" width="1200" height="900" />}</div><div>{(Array.isArray(section.text)?section.text:[section.text]).map((text,i)=><p key={i}>{text}</p>)}{section.items && <ul>{section.items.map(item=><li key={item}>{item}</li>)}</ul>}{section.link && <a href={section.link.href}>{section.link.label} →</a>}</div></div></section>)}</div>;
}

export default function DeckServicePage({ slug }) {
  const service = services[slug], images = media[slug], root = useRef(null);
  const [menu, setMenu] = useState(false);
  const hub = slug === 'decking';
  useEffect(() => { const header = root.current.querySelector('.topwrap'); const measure = () => root.current.style.setProperty('--top', `${header.getBoundingClientRect().height}px`); const observer = new ResizeObserver(measure); observer.observe(header); measure(); return () => observer.disconnect(); }, []);
  useEffect(() => { root.current.classList.toggle('has-menu', menu); const close = event => { if (event.key === 'Escape') setMenu(false); }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, [menu]);
  const schema = { '@context':'https://schema.org', '@graph': [
    { '@type':'Service', '@id':`https://yellowstonerenovation.com/${slug}/#service`, name: service.h1, serviceType: service.navLabel || service.eyebrow, description:service.description, url:`https://yellowstonerenovation.com/${slug}/`, provider:{'@id':'https://yellowstonerenovation.com/#organization'}, areaServed:['Lexington, KY','Nicholasville, KY','Georgetown, KY','Richmond, KY','Versailles, KY','Frankfort, KY'] },
    { '@type':'BreadcrumbList', itemListElement:[{ '@type':'ListItem',position:1,name:'Home',item:'https://yellowstonerenovation.com/' }, ...(!hub ? [{ '@type':'ListItem',position:2,name:'Decks & outdoor living',item:'https://yellowstonerenovation.com/decking/' }] : []), { '@type':'ListItem',position:hub?2:3,name:service.navLabel || service.eyebrow,item:`https://yellowstonerenovation.com/${slug}/` }] },
    { '@type':'FAQPage', mainEntity:service.faqs.map(faq=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}})) }
  ] };
  const related = service.related?.map(item => typeof item === 'string' ? item : item.href?.replace(/^\/|\/$/g,''));
  return <><SEO title={service.title} description={service.description} pathname={`/${slug}/`} image={`/deck-services/${slug}-social.jpg`} imageAlt={service.heroAlt} /><Helmet><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" /><script type="application/ld+json">{JSON.stringify(schema).replace(/</g,'\\u003c')}</script></Helmet>
  <div className={`local-deck-page deck-service-page service-${slug}`} ref={root}><a className="service-skip" href="#main">Skip to content</a>
    <div className="topwrap"><div className="obar"><div className="wrap"><b>Free on-site estimate.</b><a href="#estimate">Let’s look at your project.</a></div></div><header className="hdr"><div className="wrap"><a className="logo" href="/" aria-label="Yellowstone Renovation home"><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" width="640" height="131" /></a><nav className="nav" aria-label="Main navigation"><a href="/decking/" aria-current={hub?'page':undefined}>Decks</a><a href="#projects">Projects</a><a href="#reviews">Reviews</a><a href="/">Home</a></nav><a className="hcall" href={phone}><i aria-hidden="true">☎</i><span>(859) 765-7267</span></a><a className="btn btn-o hbtn" href="#estimate">Free Estimate</a><button className="burger" type="button" aria-label="Open navigation" aria-controls="service-menu" aria-expanded={menu} onClick={() => setMenu(true)}>☰</button></div></header></div>
    <div className="mnav" id="service-menu" hidden={!menu}><div className="top"><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" /><button className="xb" type="button" aria-label="Close navigation" onClick={() => setMenu(false)}>×</button></div><nav aria-label="Mobile navigation">{Object.entries(services).map(([key,item]) => <a key={key} href={`/${key}/`} aria-current={key===slug?'page':undefined}>{item.navLabel || item.eyebrow}</a>)}<a href="/">Home</a></nav><a className="btn btn-o" href="#estimate" onClick={() => setMenu(false)}>Free Estimate</a></div>
    <main id="main"><section className={`hero service-hero${hub?' service-hero-hub':''}`} aria-labelledby="service-h1"><div className="slides"><img className="on" src={images.hero.src} srcSet={`${images.mobile.src} ${images.mobile.width}w, ${images.hero.src} ${images.hero.width}w`} sizes="100vw" alt={service.heroAlt} width={images.hero.width} height={images.hero.height} style={{objectPosition:service.heroPosition || 'center'}} fetchPriority="high" /></div><div className={`wrap ${hub?'service-hero-grid':''}`}><div className="service-hero-copy"><span className="tag">{service.eyebrow}</span><h1 id="service-h1">{service.h1Lead || service.h1} {service.h1Accent && <span className="ul-o">{service.h1Accent}</span>}</h1><p className="sub">{service.heroText}</p><div className="trust"><span>Family-owned</span><a href="#reviews">Read homeowner reviews ↗</a></div><div className="ctas"><a className="btn btn-o btn-lg" href="#estimate">Get My Free Estimate</a><a className="btn btn-glass btn-lg" href={phone}>Call (859) 765-7267</a></div></div>{hub && <div className="deck-video service-intro"><div className="scr"><iframe title="Meet Yellowstone Renovation, your local deck builders" src="https://www.youtube.com/embed/9XcXhPwMEYE?controls=1&playsinline=1&rel=0" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div></div>}</div></section>
    <nav className="service-breadcrumb wrap" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span>{!hub && <><a href="/decking/">Decks &amp; outdoor living</a><span aria-hidden="true">/</span></>}<span>{service.navLabel || service.eyebrow}</span></nav>
    <section className="service-intro-section"><div className="wrap service-editorial"><div><span className="kick g">{service.eyebrow}</span><h2 className="h2">{service.introTitle}</h2></div><div><p className="lead">{service.introText}</p>{service.introLink && <a href={service.introLink.href}>{service.introLink.label} →</a>}</div></div></section>
    <Estimate service={service} />
    {!hub && <><SelectedWork service={service} /><ServiceDetails service={service} /></>}
    <ProjectVideoGallery heading={service.videoHeading} description={service.videoText} />
    <section id="projects"><div className="wrap"><div className="head c"><span className="kick g">The Yellowstone project archive</span><h2 className="h2">Decks, details and outdoor spaces.</h2><p className="lead">Our full collection includes wood, composite, covered spaces and work in progress. Open any photo for a closer look.</p></div><LocalDeckGallery /></div></section>
    {hub && <ServiceDetails service={service} />}
    {hub && <BeforeAfter />}
    <DeckServiceLinks current={slug} slugs={hub?undefined:related} heading={hub?'Choose your deck. Plan the whole backyard.':'Compare the options before you decide.'} />
    {hub && <ServiceAreas />}<HomeownerStories /><ReviewsPreview />
    <section id="faq"><div className="wrap faqw"><div className="side"><span className="kick g">Questions about {service.navLabel?.toLowerCase() || 'your project'}</span><h2 className="h2">Details worth <span className="ul-g">talking through.</span></h2><p className="lead">Have a question about your home? <a href={phone}>Call (859) 765-7267.</a></p></div><div className="faq">{service.faqs.map(faq=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
    <section className="service-final bg-dark"><div className="wrap"><h2 className="h2">{service.finalTitle || 'Let’s make your outdoor space work better.'}</h2><p>{service.finalText || 'Start with a free visit, practical options and a written estimate.'}</p><a className="btn btn-o btn-lg" href="#estimate">Request My Free Visit</a></div></section></main>
    <footer><div className="f1"><div className="wrap"><div><a href="/" className="logo"><img src="/local-deck/img/logo.webp" alt="Yellowstone Renovation" width="640" height="131" /></a><p>Family-owned. Serving Lexington and Central Kentucky.</p><a href={phone}>(859) 765-7267</a><br /><a href="mailto:info@yellowstonerenovation.com">info@yellowstonerenovation.com</a></div><nav className="service-footer-links" aria-label="Deck services">{Object.entries(services).map(([key,item])=><a href={`/${key}/`} key={key}>{item.navLabel || item.eyebrow}</a>)}<a href="/">Home</a><a href="/projects-showcase/">All projects</a><a href="/cities/">Service areas</a></nav></div></div><div className="f3"><div className="wrap"><span>© {new Date().getFullYear()} Yellowstone Renovation</span><a href="/privacy-policy/">Privacy policy</a><a href="/terms-of-service/">Terms of service</a></div></div></footer>
    <div className="service-sticky"><a href={phone}>Call</a><a href="#estimate">Free Estimate</a></div><ReviewsPanel />
  </div></>;
}
