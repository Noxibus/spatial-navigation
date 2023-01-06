import GlobalStyle from "../GlobalStyle";
import Content from "../Content/Content";
import Menu from "../Menu/Menu";
import AppContainer from "../AppContainer";
import React from "react";

function Homepage() {
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

export default Homepage;
