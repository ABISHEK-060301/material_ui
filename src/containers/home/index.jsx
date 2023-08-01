import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import HOC from "../../components/HOC";
import { loading } from "../../App";

const Home = (props) => {
  const { navigate } = props.router;
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [loadingState, setLoading, notify, setNotify] = useContext(loading);
  const items = [
    {
      name: "New Arrivals For Men",
      description: "Be Trendy!",
      image:
        "https://marketplace.canva.com/EAE9v-oyX-E/1/0/1600w/canva-brown-minimalist-formal-fashion-landscape-banner-dp_YOHf8ezI.jpg",
      path: "/collection-list/MensFormal",
    },
    {
      name: "Get 50% OFF on Menswear",
      description: "Grab your deals today!",
      image:
        "https://marketplace.canva.com/EAFE347g-Jw/1/0/1600w/canva-beige-and-navy-modern-menswear-promotion-banner-landscape-2cVWA3IFiWk.jpg",
      path: "/collection-list/MensWear",
    },
    {
      name: "Kids",
      description: "Make your children shine!",
      image:
        "https://i.pinimg.com/736x/77/35/2b/77352b96bb8815adb5141d63d33ecb5a.jpg",
      path: "/collection-list/Kids",
    },
  ];

  const handleClick = (item) => {
    setLoading(true);
    setNotify({
      state: true,
      message: "Hii there !",
      duration: 2000,
      severity: "info",
    });
    setTimeout(() => {
      setLoading(false);
      navigate(item.path);
    }, 3000);
  };

  return (
    <Grid container padding={5} justifyContent={"center"}>
      <Grid item md={10} xs={12}>
        <Carousel
          autoPlay
          animation="slide"
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
          stopAutoPlayOnHover
          cycleNavigation
          fullHeightHover
          swipe
        >
          {items.map((item, index) => {
            return (
              <Card
                variant="elevation"
                elevation={1}
                sx={{ p: 3 }}
                key={`${index}-${item.name}`}
              >
                <CardHeader
                  title={
                    <Typography
                      variant={isMobile ? "h4" : "h3"}
                      color={"purple"}
                    >
                      {item.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant={isMobile ? "h5" : "h4"}>
                      {item.description}
                    </Typography>
                  }
                />
                <CardMedia component="img" image={item.image} alt={item.name} />
                <Button
                  variant="text"
                  color="secondary"
                  className="CheckButton"
                  onClick={() => handleClick(item)}
                >
                  Check it out!
                </Button>
              </Card>
            );
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default HOC(Home);
