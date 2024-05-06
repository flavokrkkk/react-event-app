import { Calendar } from "antd";
import { WrapperCalendar } from "./styled";
import { FC } from "react";
import { IEvent } from "../../models/IEvent";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalnedar: FC<EventCalendarProps> = ({ events }) => {
  console.log(events);
  return (
    <WrapperCalendar>
      <Calendar />
    </WrapperCalendar>
  );
};

export default EventCalnedar;
