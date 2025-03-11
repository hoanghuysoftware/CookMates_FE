import '../assets/styles/button.css'

const Button = ({ type, text, onClick, className = "btn-main-color", size='w-100' }) => {
    return (
        <button 
            type={type} 
            className={`btn  ${size} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;