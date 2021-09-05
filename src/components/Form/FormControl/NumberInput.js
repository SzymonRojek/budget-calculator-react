const NumberInput = (props) => {
  const {
    label,
    placeholder,
    register,
    validation,
    value,
    errors,
    styledError,
  } = props;

  return (
    <div className="form-control-wrapper">
      <label className="form-label" htmlFor="amount">
        {label}:
      </label>
      <input
        placeholder={placeholder}
        type="number"
        step="0.01"
        min="0"
        style={errors.amount ? styledError.input : null}
        className="form-control"
        {...register(value, { ...validation })}
      ></input>
      {errors.amount && (
        <p style={styledError.message}>{errors.amount.message}</p>
      )}
    </div>
  );
};
export default NumberInput;
