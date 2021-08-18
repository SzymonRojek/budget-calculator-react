import Header from "../Header/Header";
import "./style.css";

const Section = ({ title, body }) => (
  <section className="wrapper">
    <Header title={title} />
    <div className="bodyWrapper">{body}</div>
  </section>
);

export default Section;
