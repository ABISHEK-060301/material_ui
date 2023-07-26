import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width: 899px)");

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {};
  return (
    <Box sx={{ mt: isMobile ? 4 : 9, flexGrow: 1 }}>
      <form>
        <FormControl>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10}>
              <Grid
                container
                rowGap={{ xs: 4, md: 8 }}
                columnSpacing={10}
                justifyContent={"center"}
              >
                <Grid item md={5} xs={12}>
                  <FormLabel>First Name</FormLabel>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    color="secondary"
                    placeholder="Enter First Name"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Last Name</FormLabel>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    color="secondary"
                    placeholder="Enter Last Name"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Sure Name</FormLabel>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    color="secondary"
                    placeholder="Enter Sure Name"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    color="secondary"
                    placeholder="Enter Email"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockRoundedIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    color="secondary"
                    placeholder="Enter Password"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Confirm Password</FormLabel>
                  <TextField
                    type={showConfirmPassword ? "text" : "password"}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockRoundedIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleConfirmPassword}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    color="secondary"
                    placeholder="Enter Confirm Password"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={10}>
                  <Grid
                    container
                    columnGap={{ sm: 2, xs: 0 }}
                    justifyContent={{ sm: "end", xs: "space-between" }}
                  >
                    <Grid item md={2} xs={5}>
                      <Button
                        type="reset"
                        fullWidth
                        variant="outlined"
                        color="secondary"
                      >
                        Reset
                      </Button>
                    </Grid>

                    <Grid item md={2} xs={5}>
                      <Button
                        fullWidth
                        onClick={handleSubmit}
                        variant="contained"
                        color="secondary"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                  {/* Main */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FormControl>
      </form>
    </Box>
  );
};

export default Register;
