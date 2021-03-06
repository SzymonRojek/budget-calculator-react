import { categorySelect } from "../../../helpers";

const SelectInput = (props) => {
  const { label, register, validation, errors, styledError } = props;
  return (
    <div className="form-control-wrapper">
      <label className="form-label" htmlFor="description" id="category">
        {label}:
      </label>
      <select
        name="category"
        id="category"
        {...register("category", { ...validation })}
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
