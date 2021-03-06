export const radioButtonValidation = {
  required: { value: true, message: "Choose income or expense" },
  valueAsNumber: { value: true, message: "Please, type only numbers" },
};

export const itemValidation = {
  required: { value: true, message: "Please fill out this field" },
  pattern: {
    value: /^\D[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/,
    message: "Description is invalid",
  },
  minLength: { value: 3, message: "Min length of description is 3" },
  maxLength: { value: 40, message: "Max length of name is 40" },
};

export const amountValidation = {
  required: { value: true, message: "Please fill out this field" },
};

export const selectValidation = {
  required: { value: true, message: "Please choose category" },
};
