import "./styles.css";
import { currencyFormatter } from "./../../helpers";
import DeleteButton from "../DeleteButton";

const Statement = ({ data, removeItem, className }) => (
  <div className={className}>
    <ul className="list">
      {data &&
        data.map(({ id, amount, item, category }) => (
          <li className="item" key={`item-${id}`}>
            <span className="content">
              {item} ({category}) <div>{currencyFormatter(amount)}</div>
            </span>
            <DeleteButton removeItem={() => removeItem(id)} />
          </li>
        ))}
    </ul>
  </div>
);

export default Statement;
