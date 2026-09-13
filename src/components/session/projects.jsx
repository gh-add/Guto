import React from 'react'
import FadeInSection from "../partials/fadeInSection";
import "../../styles/projects.css";

const Projects = () => {

    const imgstack = [
        "./images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg"
    ];

    return (
        <section id="projects">
            <FadeInSection>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                        <div className="col-12">
                            <h2>software</h2>
                        </div>
                        <div className="project-container col-lg-12">
                            <FadeInSection 
                            delay="100ms">
                            <div className="project-card">
                                <div className="project-card-header">
                                    <h5>Project 1</h5>
                                    <span className="project-card-badge">fullstack project</span>
                                </div>
                                <div>
                                    <p className="project-card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem saepe totam facilis architecto dolores mollitia ea minus dolore eos similique, perspiciatis neque, adipisci molestias assumenda minima asperiores repellendus accusamus quo!
                                    </p>
                                    <div className="tags-container mt-auto">
                                        <span className="tags">Tag 1</span>
                                        <span className="tags">Tag 2</span>
                                        <span className="tags">Tag 3</span>
                                    </div>
                                </div>
                            </div>
                            </FadeInSection>

                            <FadeInSection 
                            delay="200ms">
                            <div className="project-card">
                                <div className="project-card-header">
                                    <h5>Project 1</h5>
                                    <span className="project-card-badge">fullstack project</span>
                                </div>
                                <div>
                                    <p className="project-card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem saepe totam facilis architecto dolores mollitia ea minus dolore eos similique, perspiciatis neque, adipisci molestias assumenda minima asperiores repellendus accusamus quo!
                                    </p>
                                    <div className="tags-container mt-auto">
                                        <span className="tags">Tag 1</span>
                                        <span className="tags">Tag 2</span>
                                        <span className="tags">Tag 3</span>
                                    </div>
                                </div>
                            </div>
                            </FadeInSection>

                            <FadeInSection 
                            delay="300ms">
                            <div className="project-card">
                                <div className="project-card-header">
                                    <h5>Project 1</h5>
                                    <span className="project-card-badge">fullstack project</span>
                                </div>
                                <div>
                                    <p className="project-card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem saepe totam facilis architecto dolores mollitia ea minus dolore eos similique, perspiciatis neque, adipisci molestias assumenda minima asperiores repellendus accusamus quo!
                                    </p>
                                    <div className="tags-container">
                                        <span className="tags">Tag 1</span>
                                        <span className="tags">Tag 2</span>
                                        <span className="tags">Tag 3</span>
                                    </div>
                                </div>
                            </div>
                            </FadeInSection>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Projects;
