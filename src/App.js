import React from "react";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";

import GlobalRouter from "./GlobalRouter";
import { MUITheme } from './assets/MUITheme'
import Welcome from '../src/pages/Welcome'

function App() {
  return (
  
      <MUIThemeProvider theme={MUITheme}>
          <GlobalRouter />
      </MUIThemeProvider>
      
  );
}

export default App;

