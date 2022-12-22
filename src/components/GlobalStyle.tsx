import styled, { createGlobalStyle } from "styled-components";

//Hides scrollbar icon at the bottom of rows
const GlobalStyle = createGlobalStyle`
   ::-webkit-scrollbar {
     display: none;
   }
 `;

//TODO: Come back later and examine if this export statement needs special typescript syntax
export default GlobalStyle;
