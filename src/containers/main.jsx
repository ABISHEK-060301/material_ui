import { Backdrop, CircularProgress, Grid, useMediaQuery } from "@mui/material";
import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "../app-routes";
import TopBar from "./top-bar";

const Main = () => {
  const isTablet = useMediaQuery("(max-width: 899px)");

  return (
    <React.Fragment>
      <Router>
        <Grid container direction={"column"} flexDirection={"column"}>
          <Grid item xs={12}>
            <TopBar />
          </Grid>
          <Grid
            sx={{
              mt: 9,
              minHeight: "91.5vh",
            }}
            item
            xs={10}
          >
            <Routes>
              {routes.map((route, index) => {
                const Component = route.component;
                return (
                  <Route
                    key={`${index}-${route.name}-${route.path}`}
                    path={route.path}
                    element={
                      <Suspense
                        fallback={
                          <Backdrop
                            sx={{
                              color: "#fff",
                              zIndex: (theme) => theme.zIndex.drawer + 1,
                            }}
                            // open={open}
                            // onClick={handleClose}
                          >
                            <CircularProgress color="secondary" />
                          </Backdrop>
                        }
                      >
                        <Component />
                      </Suspense>
                    }
                  />
                );
              })}
            </Routes>
          </Grid>
        </Grid>
      </Router>
    </React.Fragment>
  );
};

export default Main;
