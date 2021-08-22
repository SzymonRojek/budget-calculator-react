import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

import "./styles.css";
import { Section, Statement } from "./common";
import Form from "./components";
import { countBudget, useLocalStorageState } from "./helpers";
import { initialIncome, initialExpenses } from "./helpers/initialData";
import { useState } from "react";

function App() {
  const [incomes, setIncomes] = useLocalStorageState("incomes", initialIncome);
  const [expenses, setExpenses] = useLocalStorageState(
    "expenses",
    initialExpenses
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
        title={`Incomes: ${totalIncomes} £`}
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
        title={`Expenses: ${totalExpenses} £`}
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
