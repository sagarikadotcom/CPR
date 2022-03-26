import React from "react";
import {Amplify} from "aws-amplify";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";

import GlobalRouter from "./GlobalRouter";
import { MUITheme } from './assets/MUITheme'
import { aws_config } from "./services/AWS/aws_config";
import Welcome from '../src/pages/Welcome'
Amplify.configure(aws_config);

function App() {
  return (
  
      <MUIThemeProvider theme={MUITheme}>
        <Welcome/>
      </MUIThemeProvider>
  );
}

export default App;
