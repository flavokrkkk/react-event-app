import { Button } from "antd";
import { ErrorPageBlock, Hr, WrapperErrorPage } from "./styled";
import { FC } from "react";

interface ErrorComponentsProps {
  onClick?: () => void;
  error: string | undefined;
}

const Error: FC<ErrorComponentsProps> = ({ onClick, error }) => {
  return (
    <WrapperErrorPage>
      <ErrorPageBlock>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </ErrorPageBlock>
      <Hr />
      <ErrorPageBlock>
        {error ? (
          <p>{error}</p>
        ) : (
          <p>
            But if you don't change your direction, and if you keep looking, you
            may end up where you are heading.
          </p>
        )}
      </ErrorPageBlock>
      <Button onClick={onClick}>Take me home</Button>
    </WrapperErrorPage>
  );
};

export default Error;
