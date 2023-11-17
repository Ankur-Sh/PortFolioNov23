import React, { useState, useEffect } from "react";
import "./CursorAnimation.css"; // Import your CSS file

const CursorAnimation = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", updateCursorPosition);

        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="cursor"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
    );
};

export default CursorAnimation;
