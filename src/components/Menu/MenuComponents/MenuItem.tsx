import React from "react";
import styled from "styled-components";

import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";

interface MenuItemBoxProps {
  focused: boolean;
}

const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 171px;
  height: 51px;
  background-color: #c448f0;
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
