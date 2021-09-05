import "./styles.css";
import Button from "../Button";

const ConfirmRemove = ({ dataItemToRemove, removeItem, cancelRemoveItem }) => (
  <div className="confirm-wrapper">
    <p>
      Are you sure you want to remove
      <span style={{ color: "crimson" }}> {dataItemToRemove.item}</span> ?
    </p>
    <div className="buttons-wrapper">
      <Button
        label="y"
        onClick={removeItem}
        style={{ backgroundColor: "crimson" }}
      />

      <Button
        label="n"
        onClick={() => cancelRemoveItem()}
        style={{ backgroundColor: "#66a182" }}
      />
    </div>
  </div>
);

export default ConfirmRemove;
