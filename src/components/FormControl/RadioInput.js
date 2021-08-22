import { useForm } from "react-hook-form";
import { radioButtonValidation } from "../../helpers/validation";

const RadioInput = ({ label, value }) => {
  const { register } = useForm();

  return (
    <div>
      <input
        {...register("statement", { ...radioButtonValidation })}
        type="radio"
        id="statement"
        value={value}
      />
      <label className="form-label form-label-padding" htmlFor="statement">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
