import { useMediaQuery } from "@mui/material";
import React from "react";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  console.log(isMobile);
  return <React.Fragment>home</React.Fragment>;
};

export default Home;
