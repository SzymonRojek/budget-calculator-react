const TextInput = (props) => {
  const {
    label,
    placeholder,
    register,
    value,
    validation,
    errors,
    styledError,
  } = props;

  return (
    <div className="form-control-wrapper">
      <label className="form-label" htmlFor="">
        {label}:
      </label>
      <input
        placeholder={placeholder}
        style={errors.item ? styledError.input : null}
        {...register(value, { ...validation })}
        className="form-control"
      ></input>
      {errors.item && <p style={styledError.message}>{errors.item.message}</p>}
    </div>
  );
};

export default TextInput;
