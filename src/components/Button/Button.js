import React from "react";
import "./Button.css";

const Button = ({ onClick, type = 'button', variant = 'solid', children }) => {
    const handleClick = (e) => {
        if (type !== 'submit') {
            e.preventDefault();
        }

        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            type={type}
            className={`button ${variant}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;
