import "./style.css";

const Statement = ({ data, removeItem, className }) => {
  return (
    <div className={className}>
      <ul className="list">
        {data &&
          data.map(({ id, amount, product, category }, index) => (
            <li className="item" key={`item-${id}`}>
              <span className="content">
                {product} {category}, {amount} £}
              </span>
              <button className="button" onClick={() => removeItem(id)}>
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Statement;
