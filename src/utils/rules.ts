// import moment, { Moment } from "moment";

export const rules = {
  required: (message: string = "Please fill in the text field") => ({
    required: true,
    message,
  }),
  // isDateAfter: (message: string) => () => ({
  //   validator(_: any, value: Moment) {
  //     if (moment().isSameOrAfter(value)) {
  //       return Promise.resolve();
  //     }
  //     return Promise.reject(new Error(message));
  //   },
  // }),
};
