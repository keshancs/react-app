import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const buttonStyles = ["btn--primary", "btn--outline"];
const buttonSizes = ["btn--medium", "btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = buttonStyles.includes(buttonStyle)
        ? buttonStyle
        : buttonStyles[0];
    const checkButtonSize = buttonSizes.includes(buttonSize)
        ? buttonSize
        : buttonSizes[0];

    return (
        <Link to="/sign-up" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
