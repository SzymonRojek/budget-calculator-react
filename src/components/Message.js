import "./style.css";

const styledFooter = {
  backgroundColor: "teal",
  color: "white",
};

const Message = (props) => {
  const { isAddedItem, addedItem, isRemovedItem, removedItem } = props;

  return (
    <footer
      className="submitted-footer "
      style={isAddedItem || isRemovedItem ? styledFooter : null}
    >
      <p className="animation-text-onSubmit">
        {(isAddedItem && `${addedItem} added!`) ||
          (isRemovedItem && `${removedItem} removed!`)}
      </p>
    </footer>
  );
};

export default Message;
