import "./../style.css";

const styledAddedItem = {
  backgroundColor: "teal",
  color: "white",
};

const styledRemovedItem = {
  backgroundColor: "crimson",
  color: "white",
};

const Message = (props) => {
  const { isAddedItem, addedItem, isRemovedItem, removedItem } = props;

  return (
    <footer
      className="submitted-footer "
      style={
        isAddedItem ? styledAddedItem : isRemovedItem ? styledRemovedItem : null
      }
    >
      <p className="animation-text-onSubmit">
        {(isAddedItem && `${addedItem} added!`) ||
          (isRemovedItem && `${removedItem} removed!`)}
      </p>
    </footer>
  );
};

export default Message;
