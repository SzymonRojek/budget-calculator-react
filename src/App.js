import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import "./styles.css";
import { Section, Statement } from "./common";
import Form from "./components";
import {
  countBudget,
  useLocalStorageState,
  currencyFormatter,
} from "./helpers";
import { defaultIncomes, defaultExpenses } from "./helpers/defaultData";

function App() {
  const [incomes, setIncomes] = useLocalStorageState("incomes", defaultIncomes);
  const [expenses, setExpenses] = useLocalStorageState(
    "expenses",
    defaultExpenses
  );
  const [removedItem, setRemovedItem] = useState([]);
  const [isRemovedItem, setIsRemovedItem] = useState(false);

  const { totalIncomes, totalExpenses, budget } = countBudget(
    incomes,
    expenses
  );

  const addNewItem = (data) => {
    const submittedData = {
      id: uuidv4(),
      statement: data.statement,
      item: data.item,
      amount: data.amount,
      category: data.category,
    };

    submittedData.statement === "income"
      ? setIncomes((prevState) => [...prevState, submittedData])
      : setExpenses((prevState) => [...prevState, submittedData]);
  };

  const handleRemoveItem = (id, typeData, setData) => {
    setData(typeData.filter((item) => item.id !== id));

    setRemovedItem(typeData.filter((item) => item.id === id)[0].item);
    setIsRemovedItem(true);
  };

  useEffect(() => {
    const setIntervalId = setTimeout(() => {
      setIsRemovedItem(false);
    }, 2000);

    return () => clearTimeout(setIntervalId);
  }, [isRemovedItem]);

  return (
    <main className="main-container">
      <Section
        title="Incomes"
        amount={currencyFormatter(totalIncomes)}
        body={
          <Statement
            data={incomes}
            removeItem={(id) => handleRemoveItem(id, incomes, setIncomes)}
          />
        }
      />
      <Form
        addNewItem={addNewItem}
        budget={budget}
        isRemovedItem={isRemovedItem}
        removedItem={removedItem}
      />

      <Section
        title="Expenses"
        amount={currencyFormatter(totalExpenses)}
        body={
          <Statement
            data={expenses}
            removeItem={(id) => handleRemoveItem(id, expenses, setExpenses)}
          />
        }
      />
    </main>
  );
}

export default App;
