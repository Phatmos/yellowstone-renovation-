import * as React from "react";
import { Link } from "gatsby";
import "../styles/sales-tools.css";

const SalesToolsPage = () => {
    return (
        <main className="sales-root">
            <div className="sales-gradient-bg" />

            <header className="sales-header">
                <div className="sales-breadcrumb">Yellowstone · Internal</div>
                <h1 className="sales-title">Sales Tools Hub</h1>
                <p className="sales-subtitle">
                    Internal panel for our sales team. Choose the calculator you need,
                    enter the measurements from the site visit – and instantly get numbers
                    ready for the client.
                </p>
                <div className="sales-badges">
                    <span className="badge badge-danger">Internal use only</span>
                    <span className="badge badge-pill">Not for customers</span>
                </div>
            </header>

            <section className="sales-grid">

                {/* Fence estimator */}
                <article className="tool-card">
                    <div className="tool-tag">Most used</div>
                    <h2 className="tool-title">Fence Estimator</h2>
                    <p className="tool-description">
                        Fast calculator for wood and vinyl fences.
                        Choose length, post type, gates, trailer, permit, HOA —
                        everything is calculated automatically.
                    </p>
                    <ul className="tool-list">
                        <li>Materials + labor + margin</li>
                        <li>Trailer / permit / HOA in one click</li>
                        <li>Ready-to-send text for Zoho / email</li>
                    </ul>
                    <div className="tool-footer">
                        <Link className="tool-btn primary" to="/fence-estimator/">
                            Open fence estimator
                        </Link>
                        <span className="tool-note">v1.0 • live</span>
                    </div>
                </article>

                {/* Deck estimator - NOT AVAILABLE */}
                <article className="tool-card">
                    <div className="tool-tag tool-tag-soon">Coming Soon</div>
                    <h2 className="tool-title">Deck Estimator</h2>
                    <p className="tool-description">
                        Calculator for wood and composite decks.
                        Area, height, stairs, railing, Trex/TimberTech, demo – all in one form.
                    </p>
                    <ul className="tool-list">
                        <li>Frame, decking, railing, stairs</li>
                        <li>Demo and reconstruction of old deck</li>
                        <li>Separate materials / labor / upsell</li>
                    </ul>
                    <div className="tool-footer">
                        <button className="tool-btn disabled" disabled>
                            Coming Soon
                        </button>
                        <span className="tool-note">Under development</span>
                    </div>
                </article>

                {/* Siding estimator - NOT AVAILABLE */}
                <article className="tool-card">
                    <div className="tool-tag tool-tag-soon">Coming Soon</div>
                    <h2 className="tool-title">Siding & Exterior Estimator</h2>
                    <p className="tool-description">
                        Upcoming tool for siding, soffits, and exterior work.
                        Wall area calculation, windows, doors, and all material types.
                    </p>
                    <ul className="tool-list">
                        <li>Vinyl, James Hardie, board & batten</li>
                        <li>Separate labor / materials / dumpster</li>
                        <li>Auto-generated text for commercial proposal</li>
                    </ul>
                    <div className="tool-footer">
                        <button className="tool-btn disabled" disabled>
                            Coming Soon
                        </button>
                        <span className="tool-note">Planned next</span>
                    </div>
                </article>

            </section>
        </main>
    );
};

export default SalesToolsPage;