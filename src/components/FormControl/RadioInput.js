import React from "react";
import { radioButtonValidation } from "../../helpers/validation";

const RadioInput = ({ value, register, label }) => (
  <div>
    <input
      type="radio"
      id="statement"
      value={value}
      {...register("statement", { ...radioButtonValidation })}
    />
    <label className="form-label form-label-padding" htmlFor="statement">
      {label}
    </label>
  </div>
);

export default RadioInput;
