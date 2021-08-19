import "./style.css";

const styledFooter = {
  backgroundColor: "teal",
  color: "white",
};
const Message = ({ isSubmitted }) => (
  <footer
    className="submitted-footer"
    style={isSubmitted ? styledFooter : null}
  >
    {isSubmitted && <p className="animation-text-onSubmit">Submitted!</p>}
  </footer>
);

export default Message;
