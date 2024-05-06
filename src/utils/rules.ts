export const rules = {
  required: (message: string = "Please fill in the text field") => ({
    required: true,
    message,
  }),
};
