import "./style.css";

const Header = ({ title, style }) => {
  return (
    <header className="header" style={style}>
      <h2 className="heading">{title}</h2>
    </header>
  );
};

export default Header;
