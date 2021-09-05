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

  const [isCancelRemoveItem, setIsCancelRemoveItem] = useState(true);
  const [dataItemToRemove, setDataItemToRemove] = useState({});

  const handleDataItemToRemove = (id, typeData) => {
    setDataItemToRemove(typeData.filter((item) => item.id === id)[0]);
    setIsCancelRemoveItem(true);
  };

  const handleRemoveItem = (id, typeData, setData) => {
    setData(typeData.filter((item) => item.id !== id));

    setRemovedItem(typeData.filter((item) => item.id === id)[0].item);

    setIsRemovedItem(true);
  };

  const handleCancelRemoveItem = () => setIsCancelRemoveItem(false);

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
            dataItemToRemove={dataItemToRemove}
            confirmRemoveItem={(id) => handleDataItemToRemove(id, incomes)}
            removeItem={(id) => handleRemoveItem(id, incomes, setIncomes)}
            cancelRemoveItem={() => handleCancelRemoveItem()}
            isCancelRemoveItem={isCancelRemoveItem}
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
        style={{ backgroundColor: "crimson" }}
        body={
          <Statement
            data={expenses}
            dataItemToRemove={dataItemToRemove}
            confirmRemoveItem={(id) => handleDataItemToRemove(id, expenses)}
            removeItem={(id) => handleRemoveItem(id, expenses, setExpenses)}
            cancelRemoveItem={() => handleCancelRemoveItem()}
            isCancelRemoveItem={isCancelRemoveItem}
          />
        }
      />
    </main>
  );
}

export default App;
