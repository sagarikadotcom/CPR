import { lazy } from "react";


const Welcome = lazy(() => import("../pages/Welcome"));

const WelcomeComponent = Welcome;

const WELCOME_PATH = "/welcome";

export const GlobalRoutes = {
  WELCOME: {
    name: "welcome",
    path: "/",
    exact: true,
    component: WelcomeComponent,
  },
};

export const setupRouteAuthentications = (isLoggedIn) => {
  return {
    ...GlobalRoutes,
    ARTIST_GET_STARTED: {
      ...GlobalRoutes.ARTIST_GET_STARTED,
      isAllowed: isLoggedIn,
      redirectTo: GlobalRoutes.SIGNIN.path,
    },
  };
};
