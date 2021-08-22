import { amountValidation } from "../../helpers/validation";

const AmountInput = ({ register, errors, styledError }) => (
  <div className="form-control-wrapper">
    <label className="form-label" htmlFor="amount">
      Amount:
    </label>
    <input
      placeholder="enter an amount"
      type="number"
      style={errors.amount ? styledError.input : null}
      className="form-control"
      {...register("amount", { ...amountValidation })}
    ></input>
    {errors.amount && (
      <p style={styledError.message}>{errors.amount.message}</p>
    )}
  </div>
);

export default AmountInput;
