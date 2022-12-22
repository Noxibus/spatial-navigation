import styled from "styled-components";

//the big box at the top of the screen, could link to media assets
export const SelectedItemBox = styled.div`
  height: 282px;
  width: 1074px;
  background-color: ${({ color }) => color};
  margin-bottom: 37px;
`;

//wrapper for the selected item icon (large one at the top of)
export const SelectedItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//exactly what you think this is TODO: Change font
export const SelectedItemTitle = styled.div`
  position: absolute;
  bottom: 75px;
  left: 100px;
  color: white;
  font-size: 27px;
  font-weight: 400;
  font-family: "Helvetica Neue";
`;
