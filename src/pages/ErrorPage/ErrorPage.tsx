import { FC } from "react";
import Error from "../../components/Error/Error.tsx";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../routes/index.ts";
import { useAppSelector } from "../../hooks/useAppSelector.ts";

interface ErrorPageProps {
  error?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  const navigate = useNavigate();

  const { isAuth } = useAppSelector((state) => state.authReducer);

  const handleNavigation = () =>
    isAuth ? navigate(RouteNames.EVENT) : navigate(RouteNames.LOGIN);
  return <>{error ? <h1>{error}</h1> : <Error onClick={handleNavigation} />}</>;
};

export default ErrorPage;
