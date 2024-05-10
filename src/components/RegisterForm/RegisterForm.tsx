import { Button, Form, Input } from "antd";
import {
  SpanForm,
  TitleForm,
  WrapperButton,
  WrapperError,
  WrapperForm,
} from "./styled";
import { rules } from "../../utils/rules";
import { FC } from "react";

interface RegisterFormProps {
  handleSetIsVisible: () => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ handleSetIsVisible }) => {
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
        <SpanForm onClick={handleSetIsVisible}>
          Есть аккаунт? Авторизуйтесь!
        </SpanForm>

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
