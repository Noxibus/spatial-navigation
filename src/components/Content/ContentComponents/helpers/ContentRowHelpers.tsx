import styled from "styled-components";

//TODO: Emulate padding and styling of stv player, change font
export const ContentRowTitle = styled.div`
  color: #f6f6f6;
  margin-bottom: 22px;
  font-size: 27px;
  font-weight: 700;
  font-family: "Helvetica Neue";
  padding-left: 60px;
`;

//this component makes rows scroll
export const ContentRowScrollingWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 60px;
`;
//stylistic container
export const ContentRowWrapper = styled.div`
  margin-bottom: 37px;
`;

//where asset tiles live, their container. Deleting these properties means only one tile per row appears
export const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
`;
