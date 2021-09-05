import "./styles.css";

const DeleteButton = ({ removeItem }) => (
  <button className="button" onClick={removeItem}>
    X
  </button>
);

export default DeleteButton;
