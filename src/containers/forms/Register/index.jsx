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
import { useState } from "react";
import * as yup from "yup";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width: 899px)");

  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your first name")
      .required("First name is required"),
    lastName: yup
      .string("Enter your last name")
      .required("Last name is required"),
    sureName: yup
      .string("Enter your sure name")
      .required("Sure name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("Enter your confirm password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Confirm password is required"),
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
    onSubmit: async (values) => {
      prompt(JSON.stringify(values, null, 2));
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box sx={{ mt: isMobile ? 4 : 9, flexGrow: 1 }}>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
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
                    fullWidth
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Last Name</FormLabel>
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
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
                    fullWidth
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Sure Name</FormLabel>
                  <TextField
                    onChange={formik.handleChange}
                    name="sureName"
                    value={formik.values.sureName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    color="secondary"
                    placeholder="Enter Sure Name"
                    fullWidth
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.sureName && Boolean(formik.errors.sureName)
                    }
                    helperText={
                      formik.touched.sureName && formik.errors.sureName
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.email}
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
                    fullWidth
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    onChange={formik.handleChange}
                    value={formik.values.password}
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
                    fullWidth
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>

                <Grid item md={5} xs={12}>
                  <FormLabel>Confirm Password</FormLabel>
                  <TextField
                    onChange={formik.handleChange}
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
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
                    fullWidth
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
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
                        type="submit"
                        variant="contained"
                        color="secondary"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
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
