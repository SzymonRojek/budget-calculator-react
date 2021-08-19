const countBudget = (incomes, expenses) => {
  let totalIncomes = 0;
  let totalExpenses = 0;

  for (const element of incomes) {
    totalIncomes = totalIncomes + +element.amount;
  }

  for (const element of expenses) {
    totalExpenses = totalExpenses + +element.amount;
  }

  return totalIncomes - totalExpenses;
};

export default countBudget;
