import { Button, Layout } from "antd";
import { FC } from "react";
import {
  NavbarItem,
  NavbarLeftSide,
  NavbarRightSide,
  WrapperNavbar,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useActions } from "../../../hooks/useActions";
import { AuthSelectors } from "../../../store/selectors";

const Navbar: FC = () => {
  const { isAuth, user } = useAppSelector(AuthSelectors);
  const navigate = useNavigate();

  const { logout } = useActions();

  const handleNaviagteLogin = () => {
    navigate(RouteNames.LOGIN);
  };

  const handleNavigateLogout = () => {
    logout();
  };
  return (
    <Layout.Header>
      {isAuth ? (
        <WrapperNavbar>
          <NavbarLeftSide>
            <div>
              <h1>Event</h1>
            </div>
          </NavbarLeftSide>
          <NavbarRightSide>
            <NavbarItem>
              <h4>{user.username}</h4>
            </NavbarItem>
            <NavbarItem>
              <Button onClick={handleNavigateLogout}>Log out</Button>
            </NavbarItem>
          </NavbarRightSide>
        </WrapperNavbar>
      ) : (
        <WrapperNavbar>
          <NavbarLeftSide>
            <div>
              <h1>Event</h1>
            </div>
          </NavbarLeftSide>
          <NavbarRightSide>
            <div>
              <Button onClick={handleNaviagteLogin}>Login in</Button>
            </div>
          </NavbarRightSide>
        </WrapperNavbar>
      )}
    </Layout.Header>
  );
};

export default Navbar;
