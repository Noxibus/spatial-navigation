import styled from "styled-components";

//links to a content ref which seems to be linked to the way focused items and menus are connected.
//Deleting will cause strange behaviour
const ScrollingRows = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

export default ScrollingRows;
