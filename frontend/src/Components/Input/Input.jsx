import './Input.css';

const Input = ({ type = 'text', label, className, onChange, value }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input
        type={type}
        className={className}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
