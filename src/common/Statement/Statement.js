import "./style.css";

const Statement = ({ data }) => {
  return (
    <div>
      <ul className="list">
        {data
          ? data.map(({ id, amount, product, category }) => (
              <li className="item" key={`item-${id}`}>
                <span className="content">
                  {id}. {amount}, {product} ({category})
                </span>
                <button className="button">X</button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Statement;
