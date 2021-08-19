import { useState } from "react";
import { useForm } from "react-hook-form";

import "./style.css";
import {
  radioButtonValidation,
  productValidation,
  amountValidation,
  selectValidation,
} from "../helpers/validation";

import { Header } from "../common";
import { styledError, categorySelect } from "../helpers";
import Message from "./Message";

const Form = ({ addSubmittedItem, countBudget }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);

    addSubmittedItem(data);
    reset();
  };

  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="container flex-item-one">
      <Header
        title={`Budget: ${countBudget} £`}
        style={{
          backgroundColor: countBudget < 0 ? "crimson" : "teal",
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-control-wrapper">
          <div>
            <p className="form-paragraph">Whether it is income or income:</p>
            <div>
              <input
                {...register("statement", { ...radioButtonValidation })}
                type="radio"
                value="income"
                id="income"
              />
              <label
                className="form-label form-label-padding"
                htmlFor="statement"
              >
                Income
              </label>
            </div>
            <div>
              <input
                {...register("statement", { ...radioButtonValidation })}
                type="radio"
                value="expense"
                id="statement"
              />
              <label
                className="form-label form-label-padding"
                htmlFor="statement"
              >
                Expense
              </label>
            </div>
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
            style={errors.product ? styledError.input : null}
            {...register("product", { ...productValidation })}
            className="form-control"
          ></input>
          {errors.product && (
            <p style={styledError.message}>{errors.product.message}</p>
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
      <Message isSubmitted={isSubmitted} />
    </div>
  );
};

export default Form;
