import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import { Section, Statement } from "./common";
import Form from "./components";
import { countBudget, useLocalStorageState } from "./helpers";
import { initialIncome, initialExpenses } from "./helpers/initialData";

function App() {
  const [incomes, setIncomes] = useLocalStorageState("incomes", initialIncome);

  const [expenses, setExpenses] = useLocalStorageState(
    "expenses",
    initialExpenses
  );

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
    setExpenses(expenses.filter((item) => item.id !== id));

  return (
    <main className="main-container">
      <Section
        title="Incomes:"
        body={<Statement data={incomes} removeItem={handleRemoveIncomes} />}
      />
      <Form
        addSubmittedItem={addSubmittedItem}
        countBudget={countBudget(incomes, expenses)}
      />

      <Section
        title="Expenses:"
        body={<Statement data={expenses} removeItem={handleRemoveExpenses} />}
      />
    </main>
  );
}

export default App;
