import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { useAppSelector } from "../hooks/useAppSelector";
import { AuthSelectors } from "../store/selectors";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";

const AppRoutes = () => {
  const { isAuth } = useAppSelector(AuthSelectors);

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, component }) => (
            <Route path={path} Component={component} key={path} />
          ))}
          <Route path="*" Component={HomePage} />
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
