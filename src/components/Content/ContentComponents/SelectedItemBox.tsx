import styled from "styled-components";

//the big box at the top of the screen, could link to media assets
const SelectedItemBox = styled.div`
  height: 282px;
  width: 1074px;
  background-color: ${({ color }) => color};
  margin-bottom: 37px;
`;

export default SelectedItemBox;
