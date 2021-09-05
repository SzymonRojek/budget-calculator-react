import { useForm } from "react-hook-form";

import "./styles.css";
import { RadioInput, TextInput, NumberInput, SelectInput } from "./FormControl";
import {
  itemValidation,
  amountValidation,
  radioButtonValidation,
  selectValidation,
} from "./../../helpers/validation";

const Form = (props) => {
  const { setIsAddedItem, addNewItem, setAddedItem, styledError } = props;

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-control-wrapper">
        <div>
          <p className="form-paragraph">Whether it is income or expense:</p>

          <RadioInput
            value="income"
            keyword="statement"
            label="income"
            register={register}
            validation={radioButtonValidation}
          />

          <RadioInput
            value="expense"
            label="expense"
            register={register}
            validation={radioButtonValidation}
          />

          {errors.statement && (
            <p style={styledError.message}>{errors.statement.message}</p>
          )}
        </div>
      </div>

      <TextInput
        label="Describe your item"
        placeholder="enter your product"
        register={register}
        value="item"
        validation={itemValidation}
        errors={errors}
        styledError={styledError}
      />

      <NumberInput
        label="Amount"
        placeholder="enter an amount"
        value="amount"
        register={register}
        validation={amountValidation}
        errors={errors}
        styledError={styledError}
      />

      <SelectInput
        label="Choose category"
        register={register}
        validation={selectValidation}
        errors={errors}
        styledError={styledError}
      />

      <button className="form-button">Submit</button>
    </form>
  );
};

export default Form;
