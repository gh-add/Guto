import React, { useEffect, useRef } from "react";
import "../../styles/stack.css";

export default function CardStack({ children }) {
    const stackRef = useRef(null);

    useEffect(() => {
        const stack = stackRef.current;

        if (!stack) return;

        function swap(e) {
            const card = stack.lastElementChild;

            if (!card || !card.contains(e.target)) return;

            card.style.animation = "swap 700ms forwards";

            setTimeout(() => {
                card.style.animation = "";
                stack.prepend(card);
                [...stack.children].forEach((card, index) => {
                card.style.transition = "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)";
                card.style.setProperty("--index", index);
                });

                
            }, 700);
        }

        stack.addEventListener("click", swap);

        return () => {
            stack.removeEventListener("click", swap);
        };
    }, []);

    return (
        <div className="stack" ref={stackRef}>
            {children}
        </div>
    );
}