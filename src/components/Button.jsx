import '../assets/styles/button.css'

const Button = ({ type, text, onClick, className = "btn-main-color", size = 'w-100', dataToggle = null, dataTarget = null }) => {
    return (
        <button
            type={type}
            className={`btn  ${size} ${className}`}
            onClick={onClick}
            data-bs-toggle={dataToggle}
            data-bs-target={dataTarget}
        >
            {text}
        </button>
    );
};

export default Button;