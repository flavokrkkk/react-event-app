import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { useAppSelector } from "../hooks/useAppSelector";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

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
