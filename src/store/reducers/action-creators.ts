import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creators";
import { MoodActionCreators } from "./mood/action-creators";

export const AllActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
  ...MoodActionCreators,
};
