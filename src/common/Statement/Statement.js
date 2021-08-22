import "./style.css";

const Statement = ({ data, removeItem, className }) => (
  <div className={className}>
    <ul className="list">
      {data &&
        data.map(({ id, amount, item, category }) => (
          <li className="item" key={`item-${id}`}>
            <span className="content">
              {item} ({category}), {amount} £
            </span>
            <button className="button" onClick={() => removeItem(id)}>
              X
            </button>
          </li>
        ))}
    </ul>
  </div>
);

export default Statement;
