import Header from "./../Header";
import "./styles.css";

const Section = ({ title, amount, body, className }) => (
  <section className="wrapper">
    <Header title={title} amount={amount} className={className} />
    <div className="bodyWrapper">{body}</div>
  </section>
);

export default Section;
