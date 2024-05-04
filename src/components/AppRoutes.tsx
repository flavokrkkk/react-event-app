import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import LoginPage from "../pages/LoginPage/LoginPage";
import EventPage from "../pages/EventPage/EventPage";
import { useAppSelector } from "../hooks/useAppSelector";

const AppRoutes = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

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
