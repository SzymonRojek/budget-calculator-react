import { useState } from "react";
import uuid from "react-uuid";
import Form from "./components/Form";
import { data } from "./data";

import Section from "./common/Section/Section";
import Statement from "./common/Statement/Statement";

export default function App() {
  const [incomes, setIncomes] = useState();
  const [expenses, setExpenses] = useState();

  const addSubmittedItem = (data) => {
    const newData = {
      id: uuid(),
      statement: data.statement,
      product: data.product,
      amount: data.amount,
      category: data.category,
    };

    const expenseStatement = newData.filter(
      (item) => item.statement === "expense"
    );
    setExpenses(expenseStatement);
  };

  return (
    <>
      <Form addSubmittedItem={addSubmittedItem} />
      <Section title="Incomes:" body={<Statement data={incomes} />} />
      <Section title="Expenses:" body={<Statement data={expenses} />} />
    </>
  );
}
