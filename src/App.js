import { useState } from "react";
import uuid from "react-uuid";
import Form from "./components/Form";
import { data } from "./data";
import Income from "./components/Income";

export default function App() {
  const [submittedData, setSubmittedData] = useState({});

  const addSubmittedItem = (data) => {
    const newData = {
      id: uuid(),
      statement: data.statement,
      product: data.product,
      amount: data.amount,
      category: data.category,
    };

    setSubmittedData(newData);
  };

  return (
    <>
      <Form handleData={addSubmittedItem} />
      <Income data={data} />
    </>
  );
}
