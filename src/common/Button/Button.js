import "./styles.css";

const Button = ({ label, onClick, style }) => (
  <button className="button" onClick={onClick} style={style}>
    {label}
  </button>
);

export default Button;
