import { Card, Layout } from "antd";
import { FC } from "react";
import { Container } from "../../styles/global";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: FC = () => {
  return (
    <Layout>
      <Container>
        <Card>
        <LoginForm />
        </Card>
      </Container>
    </Layout>
  );
};

export default LoginPage;
