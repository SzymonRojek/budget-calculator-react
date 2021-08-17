import { useState } from "react";
import uuid from "react-uuid";
import Form from "./components/Form";

export default function App() {
  const [submittedData, setSubmittedData] = useState();
  const addSubmittedItem = (data) => {
    setSubmittedData({
      id: uuid(),
      statement: data.statement,
      product: data.product,
      amount: data.amount,
      category: data.category,
    });
  };

  return (
    <>
      <Form addSubmittedItem={addSubmittedItem} />;
    </>
  );
}
