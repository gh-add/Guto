import React, { useEffect, useRef } from 'react'
import FadeInSection from "../partials/fadeInSection";
import SkillsTrack from "../partials/skillsTrack";
import "../../styles/skills.scss";

const Skills = () => {

    const Skills = [
        "Python",
        "Typescript",
        "React.js",
        "Java",
        "Javascript ES6+",
        "Python",
        "Typescript",
        "React.js",
        "Java",
        "Javascript ES6+",
        "Python",
        "Typescript",
        "React.js"
    ];

    const cloudRef = useRef(null);

    useEffect(() => {
        const skills = cloudRef.current?.querySelectorAll('.skill-badge');

        if (!skills?.length) return;

        const supportsOffsetDistance =
            CSS?.supports?.('offset-distance', '0%');

        const supportsMotionOffset =
            CSS?.supports?.('motion-offset', '0%');

        if (!supportsOffsetDistance && !supportsMotionOffset) {
            console.warn('offset-distance não é suportado neste navegador.');
            return;
        }

        const time = 15000;

        const animations = [];

        skills.forEach((skill, i) => {

            const delay = -(time * (i / skills.length));

            const player = skill.animate(
                [
                    {
                        offsetDistance: '100%',
                        motionOffset: '100%'
                    },
                    {
                        offsetDistance: '0%',
                        motionOffset: '0%'
                    }
                ],
                {
                    duration: time,
                    iterations: Infinity,
                    fill: 'both',
                    easing: 'ease-in',
                    delay
                }
            );

            const icon = skill.querySelector('i');

            if (icon) {
                const scaler = icon.animate(
                    [
                        {
                            transform: 'scale(0)',
                            opacity: 0
                        },
                        {
                            transform: 'scale(1)',
                            opacity: 1
                        },
                        {
                            transform: 'scale(0)',
                            opacity: 0
                        }
                    ],
                    {
                        duration: time,
                        iterations: Infinity,
                        direction: 'normal',
                        fill: 'both',
                        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
                        delay
                    }
                );

                animations.push(scaler);
            }

            animations.push(player);
        });

        return () => {
            animations.forEach(animation => animation.cancel());
        };

    }, []);

    return (
        <section id="skills">
            <FadeInSection>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0 mb-4 mb-lg-5 align-items-center justify-content-center">

                        <div className="d-flex align-items-center gap-3">
                            <h2 className="mb-0 mr-2">
                                skills
                            </h2>

                            <SkillsTrack skills={Skills} />
                        </div>

                        <div className="col-6 col-md-4 skills-cloud" ref={cloudRef}>
                            {Skills.map((skill, i) => (
                                <div className="skill-badge"><i>{skill}</i></div>
                            ))}
                        </div>

                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Skills;