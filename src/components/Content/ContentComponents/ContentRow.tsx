import React, { useCallback, useRef } from "react";
import {
  useFocusable,
  FocusContext,
  FocusDetails,
  FocusableComponentLayout,
  KeyPressDetails,
} from "@noriginmedia/norigin-spatial-navigation";

import assets from "../../../constants/assets";
import {
  ContentRowScrollingWrapper,
  ContentRowTitle,
  ContentRowWrapper,
  ContentRowScrollingContent,
} from "../ContentComponents/helpers/ContentRowHelpers";
import Asset from "../Asset/Asset";

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

export default ContentRow;
