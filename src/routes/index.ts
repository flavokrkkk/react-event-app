import React from "react";
import EventPage from "../pages/EventPage/EventPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";

export const enum RouteNames {
  LOGIN = "/login",
  EVENT = "/event",
  HOME = "/home",
}

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export const publicRoutes = <IRoute[]>[
  {
    path: RouteNames.LOGIN,
    component: LoginPage,
  },
];

export const privateRoutes = <IRoute[]>[
  {
    path: RouteNames.EVENT,
    component: EventPage,
  },
  {
    path: RouteNames.HOME,
    component: HomePage,
  },
];
