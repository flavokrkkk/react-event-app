import { Button, Layout } from "antd";
import { FC } from "react";
import {
  LinkTitle,
  NavbarItem,
  NavbarLeftSide,
  NavbarRightSide,
  NavbarTitle,
  SubTitleNavbar,
  WrapperNavbar,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../../routes";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useActions } from "../../../hooks/useActions";
import { AuthSelectors } from "../../../store/selectors";
import { NavLink } from "react-router-dom";

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
              <NavbarTitle>Event</NavbarTitle>
            </div>
            <div>
              <NavLink to={RouteNames.HOME}>
                <LinkTitle>Home</LinkTitle>
              </NavLink>
            </div>
            <div>
              <NavLink to={RouteNames.EVENT}>
                <LinkTitle>Events</LinkTitle>
              </NavLink>
            </div>
          </NavbarLeftSide>
          <NavbarRightSide>
            <NavbarItem>
              <SubTitleNavbar>{user.username}</SubTitleNavbar>
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
              <NavbarTitle>Event</NavbarTitle>
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
