import { Box, Typography, useMediaQuery } from "@mui/material";

const Error404 = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <Box
      sx={{
        p: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "78.3vh",
        backgroundColor: "purple",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        align="center"
        style={{ color: "white" }}
      >
        404, The page you visited is in development stage!
      </Typography>
    </Box>
  );
};

export default Error404;
