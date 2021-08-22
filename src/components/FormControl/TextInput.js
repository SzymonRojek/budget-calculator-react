import { productValidation } from "../../helpers/validation";

const TextInput = ({ register, errors, styledError }) => (
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
    {errors.item && <p style={styledError.message}>{errors.item.message}</p>}
  </div>
);

export default TextInput;
