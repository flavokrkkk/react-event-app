import { FC } from "react";
import Error from "../../components/Error/Error.tsx";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../routes/index.ts";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import { AuthSelectors } from "../../store/selectors.ts";

interface ErrorPageProps {
  error?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
  const navigate = useNavigate();

  const { isAuth } = useAppSelector(AuthSelectors);
  const handleNavigation = () =>
    isAuth ? navigate(RouteNames.EVENT) : navigate(RouteNames.LOGIN);
  return <Error error={error} onClick={handleNavigation} />;
};

export default ErrorPage;
