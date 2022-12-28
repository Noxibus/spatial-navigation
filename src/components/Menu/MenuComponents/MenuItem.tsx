import React from "react";
import styled from "styled-components";

import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface MenuItemBoxProps {
  focused: boolean;
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
const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 171px;
  height: 51px;
  background-color: ${({ focused }) => (focused ? "#c448f0" : "opacity: 100")};
  border-color: white;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "2px" : 0)};
  box-sizing: border-box;
  margin-bottom: 37px;
`;

//wee menu box
function MenuItem() {
  const { ref, focused } = useFocusable();

  return <MenuItemBox ref={ref} focused={focused} />;
}

export default MenuItem;
