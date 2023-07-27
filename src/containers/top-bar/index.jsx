import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import DiscountIcon from "@mui/icons-material/Discount";
import DrawIcon from "@mui/icons-material/Draw";
import EmailIcon from "@mui/icons-material/Email";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Drawer,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React, { useEffect, useState } from "react";
import logo from "../../assests/logo-cropped.png";
import HOC from "../../components/HOC";

const TopBar = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const drawerWidth = 240;
  const { navigate, location } = props.router;

  console.log("location", location);

  const [formData, setForm] = useState({
    email: "",
    password: "",
  });

  const [formValidation, setFormValidation] = useState({
    emailValidation: "",
    passwordValidation: "",
  });

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  const menu = [
    { label: "Home", path: "/", icon: <CottageRoundedIcon /> },
    { label: "Top Deals", path: "/top-deals", icon: <LocalMallIcon /> },
    { label: "Offers", path: "/offers", icon: <DiscountIcon /> },
  ];

  const loginRegister = [
    {
      label: "Login",
      path: () => toggleLoginDialog(),
      icon: <LoginIcon />,
    },
    {
      label: "Register",
      path: () => navigate("/register"),
      icon: <DrawIcon />,
    },
  ];

  const saveFormData = (name, value) => {
    setForm((rest) => ({ ...rest, [name]: value }));
    validation(name, value);
  };

  const validation = (name, value) => {
    const set = name === "email" ? "emailValidation" : "passwordValidation";
    if (value === "") {
      setFormValidation((rest) => ({
        ...rest,
        [set]: `Please input ${name}`,
      }));
    } else {
      setFormValidation((rest) => ({ ...rest, [set]: "" }));
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const toggleLoginDialog = () => {
    setLoginDialog(!loginDialog);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e);
    validation();
  };
  // console.log("FORM", formData);
  // console.log("FORM VALID", formValidation);
  return (
    <React.Fragment>
      <Box>
        <AppBar>
          <Toolbar className="top-bar">
            <Grid
              container
              justifyContent={"space-between"}
              sx={{
                paddingInline: {
                  sm: "20px 55px",
                },
              }}
            >
              <Grid item sx={{ display: { md: "none" }, m: "16px" }}>
                <IconButton
                  size="medium"
                  onClick={toggleDrawer}
                  aria-label="menu"
                >
                  <MenuIcon color="secondary" />
                </IconButton>
              </Grid>

              <Grid item>
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  columnGap={4}
                >
                  <Grid
                    item
                    sx={{
                      m: {
                        xs: "16px",
                        md: "",
                      },
                    }}
                  >
                    <img
                      className="pointer"
                      src={logo}
                      onClick={() => navigate("/")}
                      alt="logo"
                      width={150}
                    />
                  </Grid>

                  <Grid
                    item
                    sx={{ display: { xs: "none", md: "inline-block" } }}
                  >
                    <Grid container columnGap={4} direction={"row"}>
                      {menu.map((menu, index) => (
                        <Grid item>
                          <Button
                            variant={menu.path === path ? "contained" : "text"}
                            color={"secondary"}
                            key={`${index}-${menu.label}`}
                            sx={{
                              my: 2,
                              display: "block",
                              borderBottom: "2px solid purple",
                            }}
                            onClick={() => navigate(menu.path)}
                          >
                            {menu.label}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  sx={{
                    m: "16px",
                  }}
                >
                  <Grid item>
                    <Button
                      type="submit"
                      onClick={toggleLoginDialog}
                      variant="contained"
                      color="secondary"
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={() => navigate("/register")}
                      variant="contained"
                      color="secondary"
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Dialog open={loginDialog} maxWidth={"md"} onClose={toggleLoginDialog}>
          <Box sx={{ flexGrow: 1, p: 5 }}>
            <DialogTitle align="center" color={"purple"}>
              Login With Credentials
            </DialogTitle>

            <form onSubmit={handleSubmit}>
              <Grid container direction={"column"} rowGap={3}>
                <Grid item>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    type="email"
                    name="email"
                    error={formValidation.emailValidation}
                    onChange={(e) => {
                      saveFormData(e.target.name, e.target.value);
                    }}
                    helperText={formValidation.emailValidation}
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
                  />
                </Grid>

                <Grid item>
                  <FormLabel>Password</FormLabel>
                  <TextField
                    name="password"
                    error={formValidation.passwordValidation}
                    helperText={formValidation.passwordValidation}
                    onChange={(e) => {
                      saveFormData(e.target.name, e.target.value);
                    }}
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
                  />
                </Grid>

                <Grid item md={2} xs={5}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Dialog>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          anchor="left"
          open={openDrawer}
          // onClose={toggleDrawer}
        >
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              backgroundColor: "purple",
              backdropFilter: "blur",
              paddingY: 1.5,
              paddingX: 0.5,
            }}
          >
            <Grid item xs={8}>
              <ListItem>
                {/* <ListItemButton> */}
                <Typography color={"white"} fontSize={20}>
                  SMART BUY
                </Typography>
                {/* </ListItemButton> */}
              </ListItem>
            </Grid>
            <Grid item xs={2}>
              <IconButton
                sx={{
                  "& :hover": {
                    backgroundColor: "black",
                    borderRadius: 20,
                    p: 0.1,
                  },
                }}
                onClick={toggleDrawer}
                size="medium"
              >
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
          <List className="drawer">
            <React.Fragment>
              {menu.map((menu, index) => (
                <ListItem
                  sx={{
                    backgroundColor: menu.path === path ? "purple" : "",
                  }}
                  key={`${index}-${menu.label}`}
                  disablePadding
                >
                  <ListItemButton onClick={() => navigate(menu.path)}>
                    <ListItemIcon
                      sx={{
                        color: menu.path === path ? "white" : "",
                      }}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: menu.path === path ? "white" : "",
                      }}
                      primary={menu.label}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <Divider />
              <Grid
                item
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              >
                {loginRegister.map((menu, index) => (
                  <ListItem key={`${index}-${menu.label}`} disablePadding>
                    <ListItemButton onClick={menu.path}>
                      <ListItemIcon>{menu.icon}</ListItemIcon>
                      <ListItemText primary={menu.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </Grid>
            </React.Fragment>
          </List>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

export default HOC(TopBar);
