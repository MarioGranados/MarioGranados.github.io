import './Button.css';

const STYLES = ['btn_primary', 'btn_secondary', 'btn_outline'];
const SIZES = ['btn_medium', 'btn_large', 'btn_mobile'];
const COLOR = ['primary', 'secondary', 'blue', 'green'];

export const Button = ({
                           children,
                           buttonStyle,
                           buttonSize,
                           buttonColor,

                       }) => {
    const style = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const size = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const color = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <a href='/' className={`btn ${style} ${size} ${color}`}
        >
            {children}
        </a>
    );
};

