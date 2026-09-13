import React, { useEffect, useRef } from "react";
import "../../styles/skills.scss";

const SkillsTrack = ({ skills }) => {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        let position = 0;
        let animationId;

        let dragging = false;
        let startX = 0;
        let startPosition = 0;

        const speed = 0.5;

        const animate = () => {
            if (!dragging) {
                position -= speed;
            }

            const halfWidth = track.scrollWidth / 2;

            if (position <= -halfWidth) {
                position += halfWidth;
            }

            if (position > 0) {
                position -= halfWidth;
            }

            track.style.transform = `translateX(${position}px)`;

            animationId = requestAnimationFrame(animate);
        };

        const handleMouseDown = (event) => {
            dragging = true;
            startX = event.clientX;
            startPosition = position;
        };

        const handleMouseMove = (event) => {
            if (!dragging) return;

            const movement = event.clientX - startX;

            position = startPosition + movement;
        };

        const handleMouseUp = () => {
            dragging = false;
        };

        const handleMouseLeave = () => {
            dragging = false;
        };

        track.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        track.addEventListener("mouseleave", handleMouseLeave);

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);

            track.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            track.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="skills-track">
            <div className="skills-list" ref={trackRef}>

                {skills.map((skill, i) => (
                    <div className="track-skill" key={i}>
                        <div className="skill-badge-track">
                            <i>{skill}</i>
                        </div>
                    </div>
                ))}

                {skills.map((skill, i) => (
                    <div className="track-skill" key={`clone-${i}`}>
                        <div className="skill-badge-track">
                            <i>{skill}</i>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default SkillsTrack;
