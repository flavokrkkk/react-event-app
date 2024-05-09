import styled from "styled-components";

export const WrapperNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
`;

export const SubTitleNavbar = styled.h4`
  color: #fff;
  text-transform: uppercase;
`;

export const NavbarRightSide = styled.div`
  display: flex;
  align-items: center;
`;
export const NavbarItem = styled.div`
  padding: 0 20px 0 20px;
  transition: all 1s ease-out;
  &:hover {
    background-color: #fff;
    color: #000000;
  }
`;

export const NavbarLeftSide = styled.div`
  display: flex;
  gap: 30px;
`;

export const LinkTitle = styled.div`
  text-decoration: none;
  color: #fff;
`;

export const NavbarTitle = styled.h1`
  color: #fff;
`;
