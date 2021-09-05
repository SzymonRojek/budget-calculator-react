import Header from "./../Header";
import "./styles.css";

const Section = ({ title, amount, body, style }) => (
  <section className="wrapper">
    <Header title={title} amount={amount} style={style} />
    <div className="bodyWrapper">{body}</div>
  </section>
);

export default Section;
