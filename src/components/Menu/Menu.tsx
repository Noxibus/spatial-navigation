import React, { useEffect } from "react";
import {
  useFocusable,
  FocusContext,
} from "@noriginmedia/norigin-spatial-navigation";

import MenuItem from "./MenuComponents/MenuItem";
import MenuWrapper from "./MenuComponents/MenuWrapper";

interface MenuProps {
  focusKey: string;
}

//TODO: GET NAVIGATEBYDIRECTION WORKING WITH A REMOTE AND GIVE IT A TYPE, TEST HOOKS
//Parent in the navigation tree
function Menu({ focusKey: focusKeyParam }: MenuProps) {
  const {
    //ref prop returned from onFocus/useFocusable
    ref,
    focusSelf,
    hasFocusedChild,
    focusKey,
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
    extraProps: { props: "props" },
  });

  //Focus on drawer menus first then from menu to gallery rows
  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    // <div data-testid="Menu-1">
    <FocusContext.Provider value={focusKey}>
      <MenuWrapper ref={ref} hasFocusedChild={hasFocusedChild}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuWrapper>
    </FocusContext.Provider>
    //  </div>
  );
}

export default Menu;
