import { AppDispatch } from "../..";
import { eventSlice } from "./eventSlice";
import { UserService } from "../../../api/UserService";

export const EventActionCreators = {
  getAllGuests: eventSlice.actions.fetchAllGuests,
  setEvents: eventSlice.actions.setEvents,
  setIsError: eventSlice.actions.eventsIsError,

  fetchAllGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.getAllGuests(response.data));
    } catch (err) {
      dispatch(
        EventActionCreators.setIsError(`Не удалось получить users${err}`)
      );
    }
  },
};
