import React from "react";
import '../assets/styles/_buttons.scss'

const Button = ({ children, size = "md", width="100", onClick }) => {
    const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";

    return (
        <button className={`btn-customs btn  ${sizeClass} w-${width} fw-medium text-capitalize`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;