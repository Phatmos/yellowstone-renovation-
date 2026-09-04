import React from "react";
import completedProjects from "../data/completedProjects";
import "../styles/OtherCompletedProjects.css";

const OtherCompletedProjects = ({ currentProject }) => {
    const recentProjects = completedProjects
        .filter((project) => project.link !== currentProject)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    if (!recentProjects.length) return null;

    return (
        <section className="other-completed-projects">
            <div className="other-completed-inner">
                <div className="other-completed-top">
                    <span>More Completed Projects</span>
                    <h2>Our Recent Work</h2>
                    <p>
                        Explore more completed deck, fence, and outdoor renovation projects
                        by Yellowstone Renovation.
                    </p>
                </div>

                <div className="other-completed-grid">
                    {recentProjects.map((project) => (
                        <a
                            href={project.link}
                            className="other-completed-card"
                            key={project.link}
                        >
                            <div className="other-completed-image">
                                <img src={project.image} alt={project.title} />
                                <div className="other-completed-badge">
                                    {project.category}
                                </div>
                            </div>

                            <div className="other-completed-content">
                                <p>{project.location}</p>
                                <h3>{project.title}</h3>
                                <strong>View Project →</strong>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="other-completed-action">
                    <a href="/projects-showcase/">View All Projects</a>
                </div>
            </div>
        </section>
    );
};

export default OtherCompletedProjects;