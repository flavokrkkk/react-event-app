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
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { AuthActionCreators } from "../../../store/reducers/auth/action-creators";

const Navbar: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleNavigation = () => {
    navigate(RouteNames.LOGIN);
  };

  const handleReplaceNavigate = () => {
    dispatch(AuthActionCreators.logout());
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
              <h4>Egor Yarovitsyn</h4>
            </NavbarItem>
            <NavbarItem>
              <Button onClick={handleReplaceNavigate}>Log out</Button>
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
              <Button onClick={handleNavigation}>Login in</Button>
            </div>
          </NavbarRightSide>
        </WrapperNavbar>
      )}
    </Layout.Header>
  );
};

export default Navbar;
