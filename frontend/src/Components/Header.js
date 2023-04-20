import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//MUI Imports
import { Button, Typography, Grid, AppBar, Toolbar } from "@mui/material";

//Components
import CustomCard from "./CustomCard";

function Header() {
const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
    <Toolbar>
      <div className="leftNav">
        <Button color="inherit" onClick={()=>navigate('/')}>
          <Typography variant="h4">LBREP</Typography>
        </Button>
      </div>
      <div>
        <Button color="inherit" sx={{ marginRight: "2rem" }} onClick={()=>navigate('/listings')}>
          <Typography variant="h6">Listings</Typography>
        </Button>
        <Button color="inherit" sx={{ marginLeft: "2rem" }}>
          <Typography variant="h6">Agencies</Typography>
        </Button>
      </div>
      <div className="rightNav">
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            width: "15rem",
            fontSize: "1.1rem",
            marginRight: "1rem",
            "&:hover": { backgroundColor: "blue" },
          }}
          className="propertyBtn"
        >
          Add Property
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            width: "15rem",
            fontSize: "1.1rem",
            marginRight: "1rem",
            "&:hover": { backgroundColor: "green" },
          }}
          onClick={()=>navigate('/login')}
          className="loginBtn"
        >
         Login
        </Button>
      </div>
    </Toolbar>
  </AppBar>
  )
}

export default Header