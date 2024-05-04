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

const Navbar: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(RouteNames.LOGIN);
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
              <Button onClick={handleNavigation}>Log out</Button>
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
