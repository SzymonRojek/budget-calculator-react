import "./styles.css";

const Header = ({ style, title, amount }) => (
  <header className="header" style={style}>
    <h2 className="heading">
      {title}: <span className="heading-amount">{amount}</span>
    </h2>
  </header>
);

export default Header;
