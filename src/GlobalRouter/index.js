import React, { Suspense, Component } from "react";
import { BrowserRouter as ReactRouter, Route, Routes } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";

import { setupRouteAuthentications } from "./Routes";
import Footer from "../components/Footer";

class GlobalRouter extends Component {
  render() {
    const routes = setupRouteAuthentications(this.props.isLoggedIn);
    return (
      <ReactRouter>
        <Suspense fallback={<LinearProgress />}>
          <Routes>
            {Object.values(routes).map((route) => {
     
              return <Route key={route.name} path={route.path} exact component={route.component} />;
            })}
        
          </Routes>
           {this.props.isLoggedIn && <Footer />}
        </Suspense>
      </ReactRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(GlobalRouter);
