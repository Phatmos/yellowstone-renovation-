import React from "react";
import comparisons from "../data/localDeckComparisons.json";

export default function LocalDeckComparisons() {
  const first = comparisons[0];
  return <section className="bg-mint transformations" id="transformations" aria-labelledby="transformations-title">
    <div className="wrap">
      <div className="head c"><span className="kick g">Before &amp; after</span><h2 className="h2" id="transformations-title">Same home. <span className="ul-g">A whole new backyard.</span></h2><p className="lead">Real Yellowstone projects. Drag the handle to see what changed.</p></div>
      <div className="ba">
        <div className="ba-media">
          <div className="bas" id="bas" data-portrait={first.portrait || false}>
            <img id="baB" src={first.before} alt={`Before: ${first.title}`} loading="lazy" decoding="async" />
            <img className="af" id="baA" src={first.after} alt={`After: ${first.title}`} loading="lazy" decoding="async" />
            <span className="ln" /><span className="kn" aria-hidden="true">⇆</span><span className="t b">BEFORE</span><span className="t a">AFTER</span>
            <input type="range" min="0" max="100" defaultValue="50" aria-label="Before and after slider" />
          </div>
          <div className="ba-controls"><div className="nav2"><button id="baP" type="button" aria-label="Previous project">‹</button><button id="baX" type="button" aria-label="Next project">›</button></div><div className="bathumbs" id="bathumbs" aria-label="Choose a before and after project">
            {comparisons.map((project, index) => <button key={project.before} type="button" aria-label={`Show ${project.title}`} aria-current={index === 0}><img src={project.thumbnail || project.after} alt="" loading="lazy" /></button>)}
          </div></div>
        </div>
        <div className="bainfo"><span className="comparison-count" id="baCount">Project 1 of {comparisons.length}</span><h3 id="baT">{first.title}</h3><p id="baD">{first.description}</p><p className="comparison-hint">Move the slider, or choose another project below the photo.</p><div><button className="btn btn-o btn-lg" data-open="est">Plan My Deck Transformation</button></div></div>
      </div>
    </div>
  </section>;
}
