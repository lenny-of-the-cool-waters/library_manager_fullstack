import React from "react";
import { ReactDOM } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./styles/themes";
import App from "./components/App";
// import * as serviceWorker from './serviceWorker';
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,

  document.getElementById("root")
);

// serviceWorker.register();