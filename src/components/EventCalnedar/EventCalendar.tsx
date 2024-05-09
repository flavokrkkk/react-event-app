import { Calendar } from "antd";
import { WrapperCalendar, WrapperEvent } from "./styled";
import { FC } from "react";
import { IEvent } from "../../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalnedar: FC<EventCalendarProps> = ({ events }) => {
  const cellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(
      (event) => event.date === formatedDate
    );
    return (
      <div>
        {currentDayEvents.map((event, index) => (
          <WrapperEvent key={index}>{event.description}</WrapperEvent>
        ))}
      </div>
    );
  };
  return (
    <WrapperCalendar>
      <Calendar dateCellRender={cellRender} />
    </WrapperCalendar>
  );
};

export default EventCalnedar;
