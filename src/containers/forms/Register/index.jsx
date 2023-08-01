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
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width: 899px)");

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      sureName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {};
  return (
    <Box sx={{ mt: isMobile ? 4 : 9, flexGrow: 1 }}>
      <form onSubmit={formik.handleSubmit}>
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
                    name="firstName"
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
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Last Name</FormLabel>
                  <TextField
                    name="lastName"
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
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Sure Name</FormLabel>
                  <TextField
                    name="sureName"
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
                    helperText={
                      formik.touched.sureName && formik.errors.sureName
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    name="email"
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
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    name="password"
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
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Confirm Password</FormLabel>
                  <TextField
                    name="confirmPassword"
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
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
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
