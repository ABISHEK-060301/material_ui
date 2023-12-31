import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Mens, Kids, MensFormal } from "../../utils";
import HOC from "../../components/HOC";

const Collections = (props) => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  const [collection, setCollection] = useState("");
  const { params, location } = props.router;
  console.log("params", params);

  useEffect(() => {
    if (params.for === "MensFormal") {
      setCollection(MensFormal);
    } else if (params.for === "MensWear") {
      setCollection(Mens);
    } else if (params.for === "Kids") {
      setCollection(Kids);
    }
  }, [params.for]);

  return (
    <Stack
      direction={"row"}
      margin={4}
      flexWrap={"wrap"}
      justifyContent={"space-around"}
      rowGap={15}
    >
      {collection ? (
        <React.Fragment>
          {collection.map((dress, index) => {
            return (
              <Card
                variant="outlined"
                sx={{
                  width: isMobile ? 300 : 380,
                  height: isMobile ? 250 : 750,
                  ":hover": {
                    boxShadow: 20,
                  },
                }}
                className="pointer"
              >
                <img
                  src={dress.path}
                  alt={dress.heading}
                  width={isMobile ? 100 : 400}
                />
                <CardContent sx={{ minHeight: 115 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color={"purple"}
                    component="div"
                  >
                    {dress.heading}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ color: "grey" }}
                    component="div"
                  >
                    {dress.subHeading}
                  </Typography>
                </CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  sx={{ p: 2, position: "sticky", bottom: 0 }}
                >
                  <Typography variant="h5" component="div">
                    ₹{dress.sellingPrice}
                  </Typography>
                  {dress.costPrice !== dress.sellingPrice ? (
                    <Typography variant="subtitle2" component="div">
                      <del style={{ color: "maroon" }}> ₹{dress.costPrice}</del>
                      <span style={{ color: "green" }}>{dress?.offerTag}</span>
                    </Typography>
                  ) : null}
                  <Stack sx={{ gap: 2 }} direction={"row"}>
                    <Button variant="text" color="secondary">
                      <AddShoppingCartIcon />
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Buy
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            );
          })}
        </React.Fragment>
      ) : null}
    </Stack>
  );
};

export default HOC(Collections);
