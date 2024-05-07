import { Button, DatePicker, Form, Input, Select } from "antd";
import { FC } from "react";
import { rules } from "../../utils/rules";
import { IUser } from "../../models/IUser";

interface EventFormProps {
  guests: IUser[];
}

const EventForm: FC<EventFormProps> = ({ guests }) => {
  return (
    <Form>
      <Form.Item
        label="Название события"
        name="title"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Описание события"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Дата события" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Select>
          {guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button block>Создать</Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
