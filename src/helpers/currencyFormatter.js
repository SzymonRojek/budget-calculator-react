import currency from "currency.js";

const currencyFormatter = (totalStatement) =>
  currency(totalStatement, {
    symbol: "£",
    decimal: ",",
    separator: ".",
  }).format();

export default currencyFormatter;
