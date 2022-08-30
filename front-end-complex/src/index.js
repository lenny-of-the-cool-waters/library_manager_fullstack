import React from "react";
import {createRoot} from 'react-dom/client';
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Themes from "./themes";
import App from "./components/App";
// import * as serviceWorker from "./serviceWorker";
import { UserProvider } from "./context/UserContext";
import { LayoutProvider } from "./context/LayoutContext";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <LayoutProvider>
    <UserProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </UserProvider>
  </LayoutProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
