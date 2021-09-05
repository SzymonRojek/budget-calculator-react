const RadioInput = ({ value, register, validation, label }) => (
  <div>
    <input
      type="radio"
      id="statement"
      value={value}
      {...register("statement", { ...validation })}
    />
    <label className="form-label form-label-padding" htmlFor="statement">
      {label}
    </label>
  </div>
);

export default RadioInput;
