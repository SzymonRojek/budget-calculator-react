import { useState, useEffect } from "react";

import "./styles.css";
import { Header } from "../common";
import { styledError, styledBudget, currencyFormatter } from "../helpers";
import { Message } from "./Message";
import { Form } from "./Form";

const BudgetCalculator = (props) => {
  const { addNewItem, budget, removedItem, isRemovedItem, className } = props;

  const [isAddedItem, setIsAddedItem] = useState(false);
  const [addedItem, setAddedItem] = useState("");

  useEffect(() => {
    const setIntervalId = setTimeout(() => setIsAddedItem(false), 2000);

    return () => clearTimeout(setIntervalId);
  }, [isAddedItem]);

  return (
    <div className="container flex-item-one">
      <Header
        style={{
          backgroundColor: styledBudget(budget),
        }}
        title="Budget"
        amount={currencyFormatter(budget)}
      />

      <Form
        setIsAddedItem={setIsAddedItem}
        addNewItem={addNewItem}
        setAddedItem={setAddedItem}
        styledError={styledError}
      />

      <Message
        isAddedItem={isAddedItem}
        addedItem={addedItem}
        isRemovedItem={isRemovedItem}
        removedItem={removedItem}
        className={className}
      />
    </div>
  );
};

export default BudgetCalculator;
