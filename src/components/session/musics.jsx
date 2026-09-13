import React from 'react'
import FadeInSection from "../partials/fadeInSection";
import CardStack from '../partials/cardStack';
import AsciiPortrait from "../partials/AsciiPortrait";
import "../../styles/musics.css";
const Musics = () => {

    const stack = [
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
        "images/about.jpg",
    ];

    return (
        <section id="musics">
            <FadeInSection>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">
                        <div className="col-12">
                            <h2>playlist</h2>
                        </div>
                        <div className="col-8">
                            <div className="music-container d-flex flex-column flex-lg-row align-items-center gap-4">
                                <div className="music-disc flex-shrink-0">
                                    <AsciiPortrait />
                                </div>

                                <div className="d-flex flex-column h-100">
                                    <h3 className="music-name">
                                        Lorem ipsum dolor sit amet
                                    </h3>

                                    <div className="music-buttons d-flex gap-2 mt-auto">
                                        <button className="music-btn">
                                            <i className="bi bi-chevron-left"></i>
                                        </button>

                                        <button className="music-btn">
                                            <i className="bi bi-play"></i>
                                        </button>

                                        <button className="music-btn">
                                            <i className="bi bi-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 d-flex justify-content-center mb-3">
                            <CardStack>
                                {stack.map((img, index) => (
                                    <div className="music-card card music-card" key={img} style={{ "--index": index, "--swap-distance": stack.length === 10 ? "400px" : "250px" }}>
                                        {index}
                                    </div>
                                ))}
                            </CardStack>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Musics;
