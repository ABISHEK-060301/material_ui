import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { loading } from "../../App";

const LoadingWrapper = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState({
    state: false,
    message: "",
    duration: 2000,
    severity: "info",
  });

  const cancelNotify = () => {
    setNotify((e) => ({ ...e, state: false, message: "" }));
  };
  console.log("NOTIFY", notify);

  return (
    <React.Fragment>
      <loading.Provider value={[open, setOpen, notify, setNotify]}>
        <Backdrop
          sx={{
            color: "#C619FF",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {children}
        <Snackbar
          open={notify.state}
          autoHideDuration={notify.duration}
          onClose={cancelNotify}
        >
          <Alert
            onClose={cancelNotify}
            severity={notify.severity}
            sx={{ width: "100%" }}
          >
            {notify.message}
          </Alert>
        </Snackbar>
      </loading.Provider>
    </React.Fragment>
  );
};

export default LoadingWrapper;
