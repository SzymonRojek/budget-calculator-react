import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./style.css";
import {
  radioButtonValidation,
  productValidation,
  amountValidation,
  selectValidation,
} from "../helpers/validation";

import { Header } from "../common";
import { styledError, categorySelect, styledBudget } from "../helpers";
import Message from "./Message";
import { RadioInput } from "./FormControl";

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
        title={`Budget: ${budget} £`}
        style={{
          backgroundColor: styledBudget(budget),
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-control-wrapper">
          <div>
            <p className="form-paragraph">Whether it is income or income:</p>
            {/* <div>
              <input
                {...register("statement", { ...radioButtonValidation })}
                type="radio"
                value="income"
                id="statement"
              />
              <label
                className="form-label form-label-padding"
                htmlFor="statement"
              >
                Income
              </label>
            </div> */}
            <RadioInput value="income" label="income" />

            <RadioInput value="expense" label="expense" />

            {errors.statement && (
              <p style={styledError.message}>{errors.statement.message}</p>
            )}
          </div>
        </div>

        <div className="form-control-wrapper">
          <label className="form-label" htmlFor="">
            Describe your item:
          </label>
          <input
            placeholder="enter your product"
            style={errors.item ? styledError.input : null}
            {...register("item", { ...productValidation })}
            className="form-control"
          ></input>
          {errors.item && (
            <p style={styledError.message}>{errors.item.message}</p>
          )}
        </div>
        <div className="form-control-wrapper">
          <label className="form-label" htmlFor="amount">
            Amount:
          </label>
          <input
            placeholder="enter an amount"
            type="number"
            style={errors.amount ? styledError.input : null}
            {...register("amount", { ...amountValidation })}
            className="form-control"
          ></input>
          {errors.amount && (
            <p style={styledError.message}>{errors.amount.message}</p>
          )}
        </div>

        <div className="form-control-wrapper">
          <label className="form-label" htmlFor="description" id="category">
            Choose category:
          </label>
          <select
            name="category"
            id="category"
            {...register("category", { ...selectValidation })}
            className="form-control form-control-select"
          >
            <option value="">select</option>
            {categorySelect.map((el) => (
              <option key={`option-${el}`} value={el}>
                {el}
              </option>
            ))}
          </select>
          {errors.category && (
            <p style={styledError.message}>{errors.category.message}</p>
          )}
        </div>

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
