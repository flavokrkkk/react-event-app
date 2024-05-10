import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { rules } from "../../utils/rules";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/useActions";
import { AuthSelectors } from "../../store/selectors";
import { useDebounced } from "../../hooks/useDebounced";
import {
  SpanForm,
  TitleError,
  TitleForm,
  WrapperButton,
  WrapperError,
  WrapperForm,
} from "./styled.ts";

interface LoginFormProps {
  handleSetIsVisible: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ handleSetIsVisible }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useActions();
  const debouncedUsername = useDebounced(setUsername, 200);
  const debouncedPassword = useDebounced(setPassword, 200);

  const { isError, isLoading } = useAppSelector(AuthSelectors);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    login(username, password);
  };
  const handleChangeInputName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    debouncedUsername(event.target.value);
  };
  const handleChangeInputPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    debouncedPassword(event.target.value);
  };
  return (
    <WrapperForm>
      <TitleForm>Authorization</TitleForm>
      <Form onFinish={onFormSubmit}>
        <WrapperError>
          {isError && <TitleError>{isError}</TitleError>}
        </WrapperError>
        <Form.Item
          label="Username"
          name="username"
          rules={[rules.required("Please input your username!")]}
        >
          <Input value={username} onChange={handleChangeInputName} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[rules.required("Please input your password!")]}
        >
          <Input
            type="password"
            value={password}
            onChange={handleChangeInputPassword}
          />
        </Form.Item>
        <SpanForm onClick={handleSetIsVisible}>
          Нет аккаунта? Зарегистрируйтесь!
        </SpanForm>
        <Form.Item>
          <WrapperButton>
            <Button block type="default" htmlType="submit" loading={isLoading}>
              Submit
            </Button>
          </WrapperButton>
        </Form.Item>
      </Form>
    </WrapperForm>
  );
};

export default LoginForm;
