import React from "react";
import {
  useFocusable,
  FocusDetails,
  FocusableComponentLayout,
  KeyPressDetails,
} from "@noriginmedia/norigin-spatial-navigation";

import { AssetTitle, AssetBox, AssetWrapper } from "./AssetHelpers";

interface AssetProps {
  title: string;
  color: any;
  //bannerImage: any;
  onEnterPress: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
//An asset is made up of asset data, wrapper, box, and title
function Asset({
  title,
  color,
  //bannerImage,
  onEnterPress,
  onFocus,
}: AssetProps) {
  //TODO: TEST HOOK
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

export default Asset;
