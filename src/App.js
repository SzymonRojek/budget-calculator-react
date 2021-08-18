import { useState } from "react";
import uuid from "react-uuid";
import Form from "./components/Form";
import Section from "./common/Section/Section";
import Statement from "./common/Statement/Statement";
import { countBudget } from "./countBudget";

import "./styles.css";

export default function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addSubmittedItem = (data) => {
    const submittedData = {
      id: uuid(),
      statement: data.statement,
      product: data.product,
      amount: data.amount,
      category: data.category,
    };

    submittedData.statement === "income"
      ? setIncomes((prevState) => [...prevState, submittedData])
      : setExpenses((prevState) => [...prevState, submittedData]);
  };

  const handleRemoveIncomes = (id) =>
    setIncomes(incomes.filter((item) => item.id !== id));

  const handleRemoveExpenses = (id) =>
    setExpenses(incomes.filter((item) => item.id !== id));

  return (
    <main className="main-container">
      <Form
        addSubmittedItem={addSubmittedItem}
        countBudget={countBudget(incomes, expenses)}
      />
      <Section
        title="Incomes:"
        body={<Statement data={incomes} removeItem={handleRemoveIncomes} />}
      />
      <Section
        title="Expenses:"
        body={<Statement data={expenses} removeItem={handleRemoveExpenses} />}
      />
    </main>
  );
}
