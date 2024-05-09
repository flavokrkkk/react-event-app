import { Button, Form, Input } from "antd";
import { TitleForm, WrapperButton, WrapperError, WrapperForm } from "./styled";
import { rules } from "../../utils/rules";

const RegisterForm = () => {
  return (
    <WrapperForm>
      <TitleForm>Registration</TitleForm>
      <Form>
        <WrapperError></WrapperError>
        <Form.Item
          label="Username"
          name="username"
          rules={[rules.required("Please input your username!")]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[rules.required("Please input your password!")]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <WrapperButton>
            <Button block type="default" htmlType="submit">
              Submit
            </Button>
          </WrapperButton>
        </Form.Item>
      </Form>
    </WrapperForm>
  );
};

export default RegisterForm;
