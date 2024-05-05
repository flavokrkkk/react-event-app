import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { rules } from "../../utils/rules";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const { isError, isLoading } = useAppSelector((state) => state.authReducer);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault;
    dispatch(AuthActionCreators.login(username, password));
  };

  const handleChangeInputName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };
  const handleChangeInputPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  return (
    <Form onFinish={onFormSubmit}>
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
