import "./style.css";

const styledFooter = {
  backgroundColor: "teal",
  color: "white",
};

const Message = ({ isAddedItem, addedItem, isRemovedItem, removedItem }) => (
  <footer
    className="submitted-footer"
    style={isAddedItem || isRemovedItem ? styledFooter : null}
  >
    {isAddedItem && (
      <p className="animation-text-onSubmit">{addedItem} added!</p>
    )}

    {isRemovedItem && (
      <p className="animation-text-onSubmit">{removedItem} removed!</p>
    )}
  </footer>
);

export default Message;
