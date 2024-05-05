import { Button, Form, Input } from "antd";
import { FC } from "react";
import { rules } from "../../utils/rules";

const LoginForm: FC = () => {
  return (
    <Form>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="username"
        rules={[rules.required("Please input your password!")]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
