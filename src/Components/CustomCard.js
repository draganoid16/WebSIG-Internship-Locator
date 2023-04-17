import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function CustomCard() {
  const [btnColor, setBtnColor] = useState("error");
  return (
    <>
      <div style={{ width: "100%", border: "2px solid red", padding: "15px" }}>
        <Typography variant="h4"> This is the title.</Typography>
        <Typography variant="h4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Typography>

        <Button
          onClick={() => setBtnColor("success")}
          color={btnColor}
          variant="contained"
          size="large"
          style={{ backgroundColor: "yellow" }}
        >
          Turn green
        </Button>
      </div>
    </>
  );
}

export default CustomCard;
