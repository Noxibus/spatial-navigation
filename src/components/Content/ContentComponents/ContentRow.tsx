// import React, { useCallback, useEffect, useState, useRef } from "react";
// import styled from "styled-components";
// import shuffle from "lodash/shuffle";
// import {
//   useFocusable,
//   FocusDetails,
//   FocusableComponentLayout,
//   KeyPressDetails,
// } from "@noriginmedia/norigin-spatial-navigation";

// interface ContentRowProps {
//     title: string;
//     onAssetPress: (props: object, details: KeyPressDetails) => void;
//     onFocus: (
//       layout: FocusableComponentLayout,
//       props: object,
//       details: FocusDetails
//     ) => void;
//   }
//   //pulls all content row logic together
//   function ContentRow({
//     title: rowTitle,
//     onAssetPress,
//     onFocus,
//   }: ContentRowProps) {
//     const { ref, focusKey } = useFocusable({
//       onFocus,
//     });

//     const scrollingRef = useRef(null);
//     //const scrollingRef = useRef();

//     //tearing this nd associated logic stops focus working
//     //TODO: Unpack and understand this callback
//     const onAssetFocus = useCallback(
//       ({ x }: { x: number }) => {
//         scrollingRef.current.scrollTo({
//           left: x,
//           behavior: "smooth",
//         });
//       },
//       //TODO: What is scrolling ref
//       [scrollingRef]
//     );

// export default ContentRow;
