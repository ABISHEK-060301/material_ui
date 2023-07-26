const { lazy } = require("react");

export const routes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../containers/home")),
  },
  {
    name: "Register",
    path: "/register",
    component: lazy(() => import("../containers/forms/Register")),
  },
  {
    name: "Error 404",
    path: "*",
    component: lazy(() => import("../components/404")),
  },
];
