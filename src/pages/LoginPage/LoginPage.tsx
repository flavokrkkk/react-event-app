import { Card, Layout } from "antd";
import { FC, useState } from "react";
import { Container } from "../../styles/global";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSetIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Layout>
      <Container>
        <Card>
          {isVisible ? (
            <LoginForm handleSetIsVisible={handleSetIsVisible} />
          ) : (
            <RegisterForm handleSetIsVisible={handleSetIsVisible} />
          )}
        </Card>
      </Container>
    </Layout>
  );
};

export default LoginPage;
