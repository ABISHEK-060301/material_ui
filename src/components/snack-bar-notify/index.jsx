import { Alert, Snackbar } from "@mui/material";

const Toast = (
  open = false,
  mode,
  message,
  duration = 3000,
  handleClose = () => {}
) => {
  console.log("Hii");
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={mode} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
