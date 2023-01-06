import styled from "styled-components";

//Styling container for asset items, also points to dom ref
export const AssetWrapper = styled.div`
  margin-right: 22px;
  display: flex;
  flex-direction: column;
`;

//TODO: CHANGE FONT
export const AssetTitle = styled.div`
  color: #f6f6f6;
  margin-top: 10px;
  font-family: "Helvetica Neue";
  font-size: 24px;
  font-weight: 400;
`;

interface AssetBoxProps {
  focused: boolean;
  color: string;
}
//TODO: TEST CONDITIONALSD
//gallery tile - TODO: Replace coloured box with image
//color prop points to assets array, focused points to focus hook
export const AssetBox = styled.div<AssetBoxProps>`
  width: 225px;
  height: 127px;
  background-color: ${({ color }) => color};
  border-color: "#F6F6F6";
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "2px" : 0)};
  box-sizing: border-box;
`;
