import { Button, DatePicker, Form, Input, Select } from "antd";
import React, { FC, useState } from "react";
import { IUser } from "../../models/IUser";
import { IEvent } from "../../models/IEvent";
import { formatDate } from "../../utils/date";
import { Moment } from "moment";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AuthSelectors } from "../../store/selectors";
import { rules } from "../../utils/rules";

interface EventFormProps {
  guests: IUser[];
  onSubmit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, onSubmit }) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  });

  const { user } = useAppSelector(AuthSelectors);

  const handleSelectChange = (guest: string) => {
    setEvent({ ...event, guest });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, description: event.target.value });
  };

  const handleSelectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const onFormSubmit = () => {
    onSubmit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={onFormSubmit}>
      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input value={event.description} onChange={handleInputChange} />
      </Form.Item>

      <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
        <DatePicker onChange={handleSelectDate} />
      </Form.Item>

      <Form.Item
        label="Выберите гостя"
        name={"guest"}
        rules={[rules.required()]}
      >
        <Select onChange={handleSelectChange}>
          {guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block>
          Создать
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
