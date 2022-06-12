import './Button.css';
import React from "react";

const STYLES = ['btn_primary', 'btn_secondary'];
const SIZES = ['btn_medium', 'btn_large', 'btn_mobile', 'btn_outline'];
const COLOR = ['primary', 'secondary', 'blue', 'green'];

export const Button = ({
                           children,
                           buttonStyle,
                           buttonSize,
                           buttonColor,

                       }) => {
    const style = STYLES.contains(buttonStyle) ? buttonStyle : STYLES[0];
    const size = STYLES.contains(buttonSize) ? buttonSize : SIZES[0];
    const color = STYLES.contains(buttonColor) ? buttonColor : COLOR[0];

    return (
        <a href='/' className={`btn ${style} ${size} ${color}`}
        >
            {children}
        </a>
    );
};

