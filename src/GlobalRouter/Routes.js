import { lazy } from "react";


const Welcome = lazy(() => import("../pages/Welcome"));
const Boarding = lazy(() => import("../pages/Boarding"));
const Training = lazy(() => import("../pages/Training"));
const Grooming = lazy(() => import("../pages/Grooming"));
const Swimming = lazy(() => import("../pages/Swimming"));
const Pickup = lazy(() => import("../pages/Pickup"));
const Behavior = lazy(() => import("../pages/Behavior"));
const TrainTheTrainer = lazy(() => import("../pages/TrainTheTrainer"));



const WelcomeComponent = Welcome;
const BoardingComponent= Boarding
const TrainingComponent= Training
const GroomingComponent= Grooming
const SwimmingComponent= Swimming
const PickupComponent= Pickup
const BehaviourComponent= Behavior
const TrainTheTrainerComponent= TrainTheTrainer



const BOARDING_PATH = "/boarding";
const TARINING_path = "/training";
const GROOMING_PATH = "/grooming";
const SWIMMING_PATH = "/swimming";
const PICKUP_PATH = "/transport";
const BEHAVIOR_PATH = "/behavior";
const TRAIN_THE_TRAINER_PATH = "/train-the-trainer";







export const GlobalRoutes = {
  WELCOME: {
    name: "welcome",
    path: "/",
    exact: true,
    component: WelcomeComponent,
  },
  BOARDING: {
    name: "Boarding",
    path: BOARDING_PATH,
    exact: true,
    component: BoardingComponent,
  },
  TRAINING: {
    name: "Training",
    path: TARINING_path,
    exact: true,
    component: TrainingComponent,
  },
  GROOMING: {
    name: "Grooming",
    path: GROOMING_PATH,
    exact: true,
    component: GroomingComponent,
  },
  SWIMMING: {
    name: "Swimming",
    path: SWIMMING_PATH,
    exact: true,
    component: SwimmingComponent,
  },
  PICKUP: {
    name: "Pickup and Drop",
    path: PICKUP_PATH,
    exact: true,
    component: PickupComponent,
  },
  BEHAVIOR: {
    name: "Behavior",
    path: BEHAVIOR_PATH,
    exact: true,
    component: BehaviourComponent,
  },
  TRAIN_THE_TRAINER: {
    name: "Train The Trainer",
    path: TRAIN_THE_TRAINER_PATH,
    exact: true,
    component: TrainTheTrainerComponent,
  },
};

export const setupRouteAuthentications = (isLoggedIn) => {
  return {
    ...GlobalRoutes,
    WELCOME: {
      ...GlobalRoutes.WELCOME,
    
      redirectTo: GlobalRoutes.WELCOME.path,
    },
  };
};
