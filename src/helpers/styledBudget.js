const styledBudget = (budget) =>
  budget < 0 ? "crimson" : budget === 0 ? "teal" : budget > 0 ? "#74b9ff" : "";

export default styledBudget;
