import React, { useCallback, useState } from "react";
import {
  useFocusable,
  FocusContext,
  FocusDetails,
  FocusableComponentLayout,
  KeyPressDetails,
} from "@noriginmedia/norigin-spatial-navigation";

import ScrollingRows from "./ContentComponents/ScrollingRows";
import rows from "../../constants/rows";
import {
  SelectedItemBox,
  SelectedItemTitle,
  SelectedItemWrapper,
} from "./ContentComponents/helpers/SelectedItemHelpers";
import {
  ContentTitle,
  ContentWrapper,
} from "./ContentComponents/helpers/ContentHelpers";
import ContentRow from "./ContentComponents/ContentRow";

//TODO: ADDRESS INTERFACT DUPLICATION HERE AND IN ASSET.TSX
interface AssetProps {
  title: string;
  color: any;
  bannerImage: any;
  onEnterPress: (props: object, details: KeyPressDetails) => void;
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}
//brings all content logic together into one component
function Content() {
  const { ref, focusKey } = useFocusable();

  //Ripping out state and assetPress completely breaks things
  const [selectedAsset, setSelectedAsset] = useState(null);

  const onAssetPress = useCallback((asset: AssetProps) => {
    setSelectedAsset(asset);
  }, []);

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
            // bannerImage={selectedAsset ? selectedAsset.color : "#9916C7"}
            // //
            color={selectedAsset ? selectedAsset.bannerImage : "#9916C7"}
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
