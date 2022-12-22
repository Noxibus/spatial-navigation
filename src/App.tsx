import React from "react";
import { init } from "@noriginmedia/norigin-spatial-navigation";

import GlobalStyle from "./components/GlobalStyle";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import AppContainer from "./components/AppContainer";

init({
  debug: true,
  visualDebug: false,
});

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
