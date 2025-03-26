import './Button.css';

const Button = ({ text, className, onClick, children }) => {
  return (
    <div className="button">
      <button className={className} onClick={onClick}>
        {text}
        {children}
      </button>
    </div>
  );
};

export default Button;
