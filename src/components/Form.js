import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./style.css";
import { Header } from "../common";
import { styledError, styledBudget, currencyFormatter } from "../helpers";
import { Message } from "./Message";
import { RadioInput, TextInput, NumberInput, SelectInput } from "./FormControl";

const Form = (props) => {
  const { addNewItem, budget, removedItem, isRemovedItem, className } = props;

  const [isAddedItem, setIsAddedItem] = useState(false);
  const [addedItem, setAddedItem] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsAddedItem(true);
    addNewItem(data);
    setAddedItem(data.item);
    reset();
  };

  useEffect(() => {
    const setIntervalId = setTimeout(() => setIsAddedItem(false), 2000);

    return () => clearTimeout(setIntervalId);
  }, [isAddedItem]);

  return (
    <div className="container flex-item-one">
      <Header
        style={{
          backgroundColor: styledBudget(budget),
        }}
        title="Budget"
        amount={currencyFormatter(budget)}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-control-wrapper">
          <div>
            <p className="form-paragraph">Whether it is income or income:</p>

            <RadioInput value="income" label="income" register={register} />

            <RadioInput value="expense" label="expense" register={register} />

            {errors.statement && (
              <p style={styledError.message}>{errors.statement.message}</p>
            )}
          </div>
        </div>

        <TextInput
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <NumberInput
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <SelectInput
          register={register}
          errors={errors}
          styledError={styledError}
        />

        <button className="form-button">Submit</button>
      </form>

      <Message
        isAddedItem={isAddedItem}
        addedItem={addedItem}
        isRemovedItem={isRemovedItem}
        removedItem={removedItem}
        className={className}
      />
    </div>
  );
};

export default Form;
