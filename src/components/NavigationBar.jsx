import React from "react";
import { Box } from "@mui/system";
import ChairIcon from "@mui/icons-material/Chair";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "./Buttons/Menu";
import { Button } from "@mui/material";
// anime
import { animateCart } from "./animation";
const NavigationBar = () => {
  return (
    <Box sx={{ backgroundColor: "wheat", paddingTop: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "9px solid ", height: "60px" }}>
      <Box component="span" sx={{ marginLeft: "10px", display: "flex", alignItems: "center", fontSize: "2rem", letterSpacing: "2px" }}>
        {/* <ChairIcon />  */}
        <img src="https://img.icons8.com/external-filled-outline-satawat-anukul/40/000000/external-furnitureandhousehold-furniture-and-household-filled-outline-filled-outline-satawat-anukul-18.png" />
        <Box sx={{ marginLeft: "10px" }}> Furniture</Box>
      </Box>
      <Box>
        <Button sx={{ color: "black" }} onClick={() => animateCart("normal")}>
          <ShoppingCartIcon />
        </Button>
        <Menu />
      </Box>
    </Box>
  );
};

export default NavigationBar;
