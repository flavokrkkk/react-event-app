import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { rules } from "../../utils/rules";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../hooks/useActions";
import { AuthSelectors } from "../../store/selectors";
import { useDebounced } from "../../hooks/useDebounced";

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useActions();
  const debouncedUsername = useDebounced(setUsername, 500);
  const debouncedPassword = useDebounced(setPassword, 500);

  const { isError, isLoading } = useAppSelector(AuthSelectors);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    login(username, password);
  };
  console.log({ username, password });
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
    <Form
      onFinish={onFormSubmit}
      style={{ width: 400, height: 200, alignContent: "center" }}
    >
      {isError && <div>{isError}</div>}
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
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
