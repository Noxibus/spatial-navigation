import React from "react";
import styled from "styled-components";
import menucategories from "../../../constants/menu-categories";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface MenuItemBoxProps {
  focused: boolean;
  // title: string;
}

export const MenuRowTitle = styled.div`
  color: #f6f6f6;
  margin-bottom: 22px;
  font-size: 27px;
  font-weight: 700;
  font-family: "Helvetica Neue";
  padding-left: 60px;
`;

// background-color: ${({ focused }) => (focused ? "#c448f0" : "opacity: 100")};
//TODO: TEST CONDITIONAL RENDERING
const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 171px;
  height: 51px;
  background-color: ${({ focused }) => (focused ? "#c448f0" : "opacity: 100")};

  border-style: solid;
  border-width: ${({ focused }) => (focused ? "2px" : 0)};
  box-sizing: border-box;
  margin-bottom: 37px;
`;

const MenuItemText = styled.div`
  font-size: 24px;
  font-weight: 400px;
  color: #f6f6f6;
  margin: 10px;
  text-align: center;
  font-weight: bold;
`;

interface MenuItemProps {
  title: string;
}

//wee menu box
function MenuItem({ title }: MenuItemProps) {
  const { ref, focused } = useFocusable();

  //TODO: Configure onClick props with route and navigation
  return (
    <MenuItemBox ref={ref} focused={focused}>
      <MenuItemText>{title} </MenuItemText>
    </MenuItemBox>
  );
}

export default MenuItem;
