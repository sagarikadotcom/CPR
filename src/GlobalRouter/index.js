import React, { Suspense, Component } from "react";
import { BrowserRouter as ReactRouter, Route, Routes } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";

import { GlobalRoutes } from "./Routes";
import Footer from "../components/Footer";
import Welcome from '../pages/Welcome'
class GlobalRouter extends Component {
  render() {
    const routes = GlobalRoutes;
    return (
      <ReactRouter>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {Object.values(routes).map((route) => {
     
              return <Route key={route.name} path={route.path} exact element={<route.component/>} />;
            })}
          </Routes>
           {this.props.isLoggedIn && <Footer />}
        </Suspense>
      </ReactRouter>
    );
  }
}


export default GlobalRouter;
