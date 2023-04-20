import React, { useState } from "react";
import { Link } from "react-router-dom";

//MUI imports
import { Button, Typography, Grid, AppBar, Toolbar } from "@mui/material";

//Components
import CustomCard from "./CustomCard";

//Assets
import city from "./Assets/city.jpg";


function Home() {
  const [btnColor, setBtnColor] = useState("error");
  return (
    <>
      <img src={city} className="cityIMG"></img>
      <div sx={{ position: "relative" }}>
        <div className="overlayText">
          <Typography
            variant="h1"
            sx={{ color: "white", fontWeight: "bolder" }}
          >
            FIND YOUR <span style={{ color: "green" }}>NEXT PROPERTY </span>ON THE LBREP
            WEBSITE
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: "3.5rem",
              borderRadius: "15px",
              backgroundColor: "green",
              marginTop: "2rem",
              boxShadow: "3px 3px 3px white",
            }}
          >
            SEE ALL PROPERTIES
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
