import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import { Section, Statement } from "./common";
import Form from "./components/Form";
import { countBudget } from "./countBudget";
import { useLocalStorageState } from "./useLocalStorage";

export default function App() {
  const [incomes, setIncomes] = useLocalStorageState("incomes", []);
  const [expenses, setExpenses] = useLocalStorageState("expenses", []);

  const addSubmittedItem = (data) => {
    const submittedData = {
      id: uuidv4(),
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
