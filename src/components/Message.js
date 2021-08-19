import "./style.css";

const Message = ({ isSubmitted }) => (
  <footer className="submitted-footer">
    {isSubmitted && <p className="animation-text-onSubmit">Submitted!</p>}
  </footer>
);

export default Message;
