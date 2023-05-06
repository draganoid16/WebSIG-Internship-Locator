import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polyline,
  Polygon,
} from "react-leaflet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Icon } from "leaflet";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Card, CardHeader, CardMedia, CardContent } from "@mui/material";
import polygonOne from "./Shape";
import houseIcon from "./Assets/Mapicons/house.png";
import apartmentIcon from "./Assets/Mapicons/apartment.png";
import officeIcon from "./Assets/Mapicons/office.png";
import Button from "@mui/material/Button";
import myListings from "./Assets/Data/Dummydata";
import img1 from "./Assets/image1.jpg";

function Listings() {
  fetch("http://localhost:8000/api/listings/")
    .then((response) => response.json())
    .then((data) => console.log(data));

  const houseIconVar = new Icon({
    iconUrl: houseIcon,
    iconSize: [40, 40],
  });
  const apartmentIconVar = new Icon({
    iconUrl: apartmentIcon,
    iconSize: [40, 40],
  });
  const officeIconVar = new Icon({
    iconUrl: officeIcon,
    iconSize: [40, 40],
  });

  const polyOne = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  return (
    <Grid container>
      <Grid item xs={4}>
        {myListings.map((listing) => {
          return (
            <Card
              key={listing.id}
              sx={{
                margin: "0.5rem",
                border: "1px solid black",
                position: "relative",
              }}
            >
              <CardHeader
                /* action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>


           <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
        }*/

                title={listing.title}
                subheader="September 14, 2016"
              />
              <CardMedia
                sx={{
                  paddingRight: "1rem",
                  paddingLeft: "1rem",
                  height: "20rem",
                  width: "30rem",
                }}
                component="img"
                image={listing.picture1}
                alt={listing.title}
              />
              <CardContent>
                <Typography variant="body2">
                  {listing.description.substring(0, 200)}...
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    backgroundColor: "green",
                    zIndex: "1000",
                    color: "white",
                    top: "100px",
                    left: "20px",
                    padding: "5px",
                  }}
                >
                  {listing.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  €
                </Typography>
              </CardContent>

              {listing.property_status === "Sale" ? (
                <Typography
                  sx={{
                    position: "absolute",
                    backgroundColor: "green",
                    zIndex: "1000",
                    color: "white",
                    top: "100px",
                    left: "20px",
                    padding: "5px",
                  }}
                >
                  {listing.listing_type}:
                  {listing.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  €
                </Typography>
              ) : (
                <Typography
                  sx={{
                    position: "absolute",
                    backgroundColor: "green",
                    zIndex: "1000",
                    color: "white",
                    top: "100px",
                    left: "20px",
                    padding: "5px",
                  }}
                >
                  {listing.listing_type}:
                  {listing.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  / {listing.rental_frequency}€
                </Typography>
              )}
            </Card>
          );
        })}
      </Grid>
      <Grid item xs={8} style={{ marginTop: "0.5rem" }}>
        <AppBar position="sticky" color="primary">
          <div style={{ height: "100vh" }}>
            <MapContainer
              center={[40.574066, -8.44413]}
              zoom={10}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Polyline positions={polyOne} weight={10} color="green" />
              <Polygon
                positions={polygonOne}
                color="yellow"
                fillColor="blue"
                fillOpacity={0.9}
                opacity={0}
              />
              {myListings.map((listing) => {
                function IconDisplay() {
                  if (listing.listing_type === "House") {
                    return houseIconVar;
                  } else if (listing.listing_type === "Apartment") {
                    return apartmentIconVar;
                  } else if (listing.listing_type === "Office") {
                    return officeIconVar;
                  }
                }

                return (
                  <Marker
                    key={listing.id}
                    icon={IconDisplay()}
                    position={[
                      listing.location.coordinates[0],
                      listing.location.coordinates[1],
                    ]}
                  >
                    <Popup>
                      <Typography variant="h5" color="initial">
                        {listing.title}
                      </Typography>
                      <img
                        src={listing.picture1}
                        style={{ height: "14rem", width: "18rem" }}
                      ></img>
                      <Typography variant="body1" color="initial">
                        {listing.description.substring(0, 150)}...
                      </Typography>
                      <Button variant="contained" color="success">
                        Details
                      </Button>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Listings;
