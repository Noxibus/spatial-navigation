import React, { useCallback, useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import shuffle from "lodash/shuffle";
import {
  useFocusable,
  init,
  FocusContext,
  FocusDetails,
  FocusableComponentLayout,
  KeyPressDetails,
} from "@noriginmedia/norigin-spatial-navigation";

//TODO: BREAK DOWN INTO MODULAR COMPONENTS, SUSS OUT APP STATE AND DATA FLOW

init({
  debug: true,
  visualDebug: false,
});

const rows = shuffle([
  {
    title: "Recommended",
  },
  {
    title: "Movies",
  },
  {
    title: "Series",
  },
  {
    title: "TV Channels",
  },
  {
    title: "Sport",
  },
]);

//TODO: REPLACE COLOURS WITH IMAGES
const assets = [
  {
    title: "Taggart",
    color: "C448F0",
  },
  {
    title: "Take The High Road",
    color: "#AB8DFF",
  },
  {
    title: "Coronation Street",
    color: "#512EB0",
  },
  {
    title: "I'm a Celebrity",
    color: "C448F0",
  },
  {
    title: "Loose Women",
    color: "#9916C7",
  },
  {
    title: "Low Winter Sun",
    color: "#512EB0",
  },
  {
    title: "Litvenenko",
    color: "C448F0",
  },
  {
    title: "Spies Among Friends",
    color: "#AB8DFF",
  },
  {
    title: "Catch Phrase",
    color: "#512EB0",
  },
];

interface MenuItemBoxProps {
  focused: boolean;
}

const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 171px;
  height: 51px;
  background-color: #c448f0;
  border-color: white;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? "2px" : 0)};
  box-sizing: border-box;
  margin-bottom: 37px;
`;

//wee menu box
function MenuItem() {
  const { ref, focused } = useFocusable();

  return <MenuItemBox ref={ref} focused={focused} />;
}

interface MenuWrapperProps {
  hasFocusedChild: boolean;
}

//container for the side drawer menu
//TODO: Figure out how to make this into a normal functional component, research styled-components vs functional components
//TODO: Hide side menu if it isn't focused
const MenuWrapper = styled.div<MenuWrapperProps>`
  flex: 1;
  max-width: 246px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ hasFocusedChild }) =>
    hasFocusedChild ? "#151515" : "#362C56"};
  padding-top: 37px;
`;

interface MenuProps {
  focusKey: string;
}

//TODO: GET NAVIGATEBYDIRECTION WORKING WITH A REMOTE AND GIVE IT A TYPE
//Parent in the navigation tree
function Menu({ focusKey: focusKeyParam }: MenuProps) {
  const {
    ref,
    focusSelf,
    hasFocusedChild,
    focusKey,
    // setFocus, -- to set focus manually to some focusKey
    // navigateByDirection, -- to manually navigate by direction
    // pause, -- to pause all navigation events
    // resume, -- to resume all navigation events
    // updateAllLayouts, -- to force update all layouts when needed
    // getCurrentFocusKey -- to get the current focus key
  } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    // preferredChildFocusKey: null,
    //Are these doing anything at present? > NO
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: "bar" },
  });
  //Helps us shift focus from menu to gallery rows
  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <MenuWrapper ref={ref} hasFocusedChild={hasFocusedChild}>
        {/* TODO: ADD TITLES TO MENUITEMS */}
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuWrapper>
    </FocusContext.Provider>
  );
}

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

//responsible for how content assets are rendered
const ContentWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

//Page title
const ContentTitle = styled.div`
  color: white;
  font-size: 48px;
  font-weight: 600;
  font-family: "Helvetica Neue";
  text-align: left;
  margin-top: 52px;
  margin-bottom: 37px;
  margin-left: 60px;
`;

//wrapper for the selected item icon (large one at the top of)
const SelectedItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//the big box at the top of the screen, could link to media assets
const SelectedItemBox = styled.div`
  height: 282px;
  width: 1074px;
  background-color: ${({ color }) => color};
  margin-bottom: 37px;
`;

//exactly what you think this is TODO: Change font
const SelectedItemTitle = styled.div`
  position: absolute;
  bottom: 75px;
  left: 100px;
  color: white;
  font-size: 27px;
  font-weight: 400;
  font-family: "Helvetica Neue";
`;

//contains a ref which seems to be linked to the way focused items and menus are connected.
//Deleting will cause strange behaviour
const ScrollingRows = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex-shrink: 1;
  flex-grow: 1;
`;

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

const AppContainer = styled.div`
  background-color: #221c35;
  width: 1440px;
  height: 810px;
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
   ::-webkit-scrollbar {
     display: none;
   }
 `;

function App() {
  return (
    <React.StrictMode>
      <AppContainer>
        <GlobalStyle />
        <Menu focusKey="MENU" />
        <Content />
      </AppContainer>
    </React.StrictMode>
  );
}

export default App;
