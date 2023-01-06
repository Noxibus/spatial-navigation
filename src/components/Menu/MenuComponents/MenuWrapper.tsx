import styled from "styled-components";

interface MenuWrapperProps {
  hasFocusedChild: boolean;
}
//container for the side drawer menu
//TODO: Hide side menu if it isn't focused
const MenuWrapper = styled.div<MenuWrapperProps>`
  flex: 1;
  max-width: 246px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ hasFocusedChild }) => "#151515"};
  padding-top: 37px;
`;
// background-color: ${({ hasFocusedChild }) =>
// hasFocusedChild ? "#151515" : "opacity: 100"};
export default MenuWrapper;
