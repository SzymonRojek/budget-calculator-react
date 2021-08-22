import { categorySelect } from "../../helpers";
import { selectValidation } from "../../helpers/validation";

const SelectInput = ({ register, errors, styledError }) => {
  return (
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
  );
};

export default SelectInput;
