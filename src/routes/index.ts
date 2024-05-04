import React from "react";
import EventPage from "../pages/EventPage/EventPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
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
];
