const countBudget = (incomes, expenses) => {
  let totalIncomes = 0;
  let totalExpenses = 0;

  for (const element of incomes) {
    totalIncomes = totalIncomes + +element.amount;
  }

  for (const element of expenses) {
    totalExpenses = totalExpenses + +element.amount;
  }

  const budget = totalIncomes - totalExpenses;

  return { totalIncomes, totalExpenses, budget };
};

export default countBudget;
