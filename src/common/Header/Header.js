import "./style.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h2 className="heading">{title}</h2>
    </header>
  );
};

export default Header;
