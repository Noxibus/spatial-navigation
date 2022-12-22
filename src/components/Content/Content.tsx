import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import {
  useFocusable,
  FocusContext,
  FocusDetails,
  FocusableComponentLayout,
  KeyPressDetails,
} from "@noriginmedia/norigin-spatial-navigation";

import ContentWrapper from "./ContentComponents/ContentWrapper";
import ScrollingRows from "./ContentComponents/ScrollingRows";
import SelectedItemWrapper from "./ContentComponents/SelectedItemWrapper";
import SelectedItemTitle from "./ContentComponents/SelectedItemTitle";
import SelectedItemBox from "./ContentComponents/SelectedItemBox";
import ContentTitle from "./ContentComponents/ContentTitle";
import rows from "../../constants/rows";
import assets from "../../constants/assets";

//Styling container for asset items, also points to dom ref
const AssetWrapper = styled.div`
  margin-right: 22px;
  display: flex;
  flex-direction: column;
`;

interface AssetBoxProps {
  focused: boolean;
  color: string;
}

//gallery tile - TODO: Replace coloured box with image
//color prop points to assets array, focused points to focus hook
const AssetBox = styled.div<AssetBoxProps>`
  width: 225px;
  height: 127px;
  background-color: ${({ color }) => color};
  border-color: "#F6F6F6";
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "2px" : 0)};
  box-sizing: border-box;
`;

//TODO: CHANGE FONT
const AssetTitle = styled.div`
  color: #f6f6f6;
  margin-top: 10px;
  font-family: "Helvetica Neue";
  font-size: 24px;
  font-weight: 400;
`;

interface AssetProps {
  title: string;
  color: string;
  onEnterPress: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}

//An asset is made up of asset data, wrapper, box, and title
function Asset({ title, color, onEnterPress, onFocus }: AssetProps) {
  const { ref, focused } = useFocusable({
    onEnterPress,
    onFocus,
    extraProps: {
      title,
      color,
    },
  });

  return (
    <AssetWrapper ref={ref}>
      <AssetBox color={color} focused={focused} />
      <AssetTitle>{title}</AssetTitle>
    </AssetWrapper>
  );
}

//stylistic container
const ContentRowWrapper = styled.div`
  margin-bottom: 37px;
`;

//TODO: Emulate padding and styling of stv player, change font
const ContentRowTitle = styled.div`
  color: #f6f6f6;
  margin-bottom: 22px;
  font-size: 27px;
  font-weight: 700;
  font-family: "Helvetica Neue";
  padding-left: 60px;
`;

//this component makes rows scroll
const ContentRowScrollingWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  padding-left: 60px;
`;

//where asset tiles live, their container. Deleting these properties means only one tile per row appears
const ContentRowScrollingContent = styled.div`
  display: flex;
  flex-direction: row;
`;
////////////////////////////////////////
interface ContentRowProps {
  title: string;
  onAssetPress: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
//pulls all content row logic together
function ContentRow({
  title: rowTitle,
  onAssetPress,
  onFocus,
}: ContentRowProps) {
  const { ref, focusKey } = useFocusable({
    onFocus,
  });

  const scrollingRef = useRef(null);
  //const scrollingRef = useRef();

  //tearing this nd associated logic stops focus working
  //TODO: Unpack and understand this callback
  const onAssetFocus = useCallback(
    ({ x }: { x: number }) => {
      scrollingRef.current.scrollTo({
        left: x,
        behavior: "smooth",
      });
    },
    //TODO: What is scrolling ref
    [scrollingRef]
  );

  ////////////////////////////////////////

  //TODO: Map out lifecycle of focusKey
  return (
    <FocusContext.Provider value={focusKey}>
      <ContentRowWrapper ref={ref}>
        <ContentRowTitle>{rowTitle}</ContentRowTitle>
        <ContentRowScrollingWrapper ref={scrollingRef}>
          <ContentRowScrollingContent>
            {assets.map(({ title, color }) => (
              <Asset
                key={title}
                title={title}
                color={color}
                onEnterPress={onAssetPress}
                onFocus={onAssetFocus}
              />
            ))}
          </ContentRowScrollingContent>
        </ContentRowScrollingWrapper>
      </ContentRowWrapper>
    </FocusContext.Provider>
  );
}

//brings all content logic together into one component
function Content() {
  const { ref, focusKey } = useFocusable();

  //Ripping out state and assetPress completely breaks things
  const [selectedAsset, setSelectedAsset] = useState(null);

  const onAssetPress = useCallback((asset: AssetProps) => {
    setSelectedAsset(asset);
  }, []);

  //TODO: Suss out this thing
  const onRowFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  return (
    <FocusContext.Provider value={focusKey}>
      <ContentWrapper>
        <ContentTitle>STV Player Clone</ContentTitle>
        <SelectedItemWrapper>
          <SelectedItemBox
            color={selectedAsset ? selectedAsset.color : "#9916C7"}
          />
          <SelectedItemTitle>
            {selectedAsset
              ? selectedAsset.title
              : 'Press "Enter" to select an asset'}
          </SelectedItemTitle>
        </SelectedItemWrapper>
        <ScrollingRows ref={ref}>
          <div>
            {rows.map(({ title }) => (
              <ContentRow
                key={title}
                title={title}
                onAssetPress={onAssetPress}
                onFocus={onRowFocus}
              />
            ))}
          </div>
        </ScrollingRows>
      </ContentWrapper>
    </FocusContext.Provider>
  );
}

export default Content;
