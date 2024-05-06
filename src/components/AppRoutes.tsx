import { Route, Routes, useNavigate } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../routes";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";
import { AuthSelectors } from "../store/selectors";
import EventPage from "../pages/EventPage/EventPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const AppRoutes = () => {
  const { isAuth } = useAppSelector(AuthSelectors);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(RouteNames.EVENT);
    } else {
      navigate(RouteNames.LOGIN);
    }
  }, [isAuth]);

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, component }) => (
            <Route path={path} Component={component} key={path} />
          ))}
          <Route path="*" Component={EventPage} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, component }) => (
            <Route path={path} Component={component} key={path} />
          ))}
          <Route path="*" Component={LoginPage} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
