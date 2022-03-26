import React from "react";
import {Amplify} from "aws-amplify";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";

import GlobalRouter from "./GlobalRouter";
import { MUITheme } from './assets/MUITheme'
import { aws_config } from "./services/AWS/aws_config";

Amplify.configure(aws_config);

function App() {
  return (
  
      <MUIThemeProvider theme={MUITheme}>
        <GlobalRouter />
      </MUIThemeProvider>
  );
}

export default App;
