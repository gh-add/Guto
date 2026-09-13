import React from 'react'
import FadeInSection from "../partials/fadeInSection";
import CardStack from "../partials/cardStack";
import "../../styles/about.css";

const About = () => {
    const frase1 = (
        <p>
            I am currently a <b>Software Engineer</b> at
            <a href="https://www.ads.google.com/"> Google</a>, where I help build
            autobidder models that make Google Search money. Previously, I was at{" "}
            <a href="https://www.aboutamazon.com/"> Amazon</a> and{" "}
            <a href="https://newsroom.pinterest.com/company/"> Pinterest.</a>
        </p>
    );

    const frase2 = (
        <p>
            In my free time, I’m nerdy about tech gadgets, love literary fiction, and
            play way too many battle royale games. Oh, I make content too.
        </p>
    );

    const techStack = [
        "Python",
        "Typescript",
        "React.js",
        "Java",
        "Javascript ES6+",
    ];

    const imgstack = [
        "./images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg"
    ];

    return (
        <section id="about">
            <FadeInSection>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">

                        <div className="col-md-8 col-lg-6 d-flex justify-content-center mb-3">
                            <CardStack>
                                {imgstack.map((img, index) => (
                                    <div className="card img-card" key={img} style={{"--index": index,"--swap-distance": imgstack.length === 10 ? "400px" : "250px"}}>
                                        <img src={img} />
                                    </div>
                                ))}
                            </CardStack>
                        </div>

                        <div className="col-lg-6">
                            <h2>about me</h2>

                            <div>
                                {frase1}

                                <p>
                                    Estas são algumas das tecnologias com as quais tenho trabalhado:
                                </p>

                                <ul className="tech-stack">
                                    {techStack.map((techItem, i) => (
                                        <FadeInSection
                                            key={i}
                                            delay={(i + 1) * 100 + "ms"}
                                        >
                                            <li>{techItem}</li>
                                        </FadeInSection>
                                    ))}
                                </ul>

                                {frase2}
                            </div>
                        </div>

                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default About;
