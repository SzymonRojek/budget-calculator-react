import "./styles.css";
import { currencyFormatter } from "./../../helpers";
import ConfirmRemove from "../ConfirmRemove";
import Button from "../Button";

const Statement = (props) => {
  const {
    data,
    dataItemToRemove,
    confirmRemoveItem,
    removeItem,
    cancelRemoveItem,
    isCancelRemoveItem,
    className,
  } = props;

  return (
    <div className={className}>
      <ul className="list">
        {data.map(({ id, amount, item, category }) => (
          <li className="item" key={`item-${id}`}>
            {dataItemToRemove.id === id && isCancelRemoveItem ? (
              <ConfirmRemove
                removeItem={() => removeItem(id)}
                cancelRemoveItem={cancelRemoveItem}
                dataItemToRemove={dataItemToRemove}
              />
            ) : (
              <>
                <span className="content">
                  {item} ({category}) <div>{currencyFormatter(amount)}</div>
                </span>
                <Button
                  label="x"
                  style={{ backgroundColor: "crimson" }}
                  onClick={() => confirmRemoveItem(id)}
                />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statement;
