import { Route, Routes, useNavigate } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../routes";
import { useAppSelector } from "../hooks/useAppSelector";
import { useEffect } from "react";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
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
          <Route path="*" Component={ErrorPage} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, component }) => (
            <Route path={path} Component={component} key={path} />
          ))}
          <Route path="*" Component={ErrorPage} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
