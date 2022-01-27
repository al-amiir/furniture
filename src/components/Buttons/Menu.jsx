import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Box } from "@mui/system";
import { Button } from "@mui/material";
import anime from "animejs/lib/anime.es.js";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Menu = ({ color }) => {
  const [menuCondition, setMenuCondition] = useState(true);

  function menuAnimation(direction) {
    anime({
      targets: ".menuContent",
      backdropFilter: ["grayscale(0) blur(0px) brightness(1)", "grayscale(1) blur(7px) brightness(.1)"],
      direction: `${direction}`,
      duration: 1000,
    });
    anime({
      targets: ".menuContent-text",
      opacity: [0, 1],
      duration: 100,
      easing: "linear",
      direction: `${direction}`,
    });
  }
  function handleClickMenu() {
    menuAnimation("normal");
    setMenuCondition(false);
  }
  function handleCloseMenu() {
    menuAnimation("reverse");
    setMenuCondition(true);
  }

  return (
    <>
      <Button className="menuButton" onClick={handleClickMenu} sx={{ color: `${color}` }}>
        <MenuIcon />
      </Button>

      <Box className="menuContent" sx={{ position: "fixed", top: "0vh", left: 0, height: "100vh", width: "100vw", zIndex: 4000, display: `${menuCondition ? "none" : "grid"}`, gridTemplateRows: "repeat(5,20vh)", gridTemplateColumns: "repeat(2,1fr)" }}>
        <Button className="closeButton" onClick={handleCloseMenu} sx={{ position: "absolute", right: "1vw", transform: "scale(1)", top: "3vh", color: "crimson" }}>
          <CloseIcon />
        </Button>

        {/* Menu Links  */}
        <Box className="menuContent-text" sx={{ opacity: 0, zIndex: 1, display: "flex", justifyContent: "center", gridRow: "2/4" }}>
          <Box sx={{ color: "white", fontSize: "2rem", letterSpacing: ".5rem" }}> FURNITURE </Box>
          <Box sx={{ marginTop: "50px" }}>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through crimson" : "none",
                };
              }}
            >
              <Box sx={{ color: "#c31233", fontSize: "2rem", marginBottom: "5px" }}>Home</Box>
            </NavLink>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "line-through crimson" : "none",
                };
              }}
            >
              <Box sx={{ color: "#c31233", fontSize: "2rem", marginBottom: "5px" }}>Products</Box>
            </NavLink>

            <Box sx={{ color: "#c31233", fontSize: "2rem", marginBottom: "5px" }}>About Us</Box>
            <Box sx={{ color: "#c31233", fontSize: "2rem", marginBottom: "5px" }}>Contact</Box>
            <Box sx={{ color: "#c31233", fontSize: "2rem", marginBottom: "5px" }}>Creator</Box>
          </Box>
        </Box>

        <Box className="menuContent-text" sx={{ opacity: 0, zIndex: 1, display: "flex", justifyContent: "start", gridRow: "2/3", gridColumn: "2/3" }}>
          <Box sx={{ color: "#a86d00", fontSize: "1.3rem", marginRight: "20px" }}>
            <Box sx={{ marginBottom: "20px", width: "130px", color: "wheat" }}>Phone</Box>
            <Box>+2(0123456789)</Box>
            <Box>+2(0123456789)</Box>
            <Box>+2(0123456789)</Box>
          </Box>
          <Box sx={{ color: "#a86d00", fontSize: "1.3rem" }}>
            <Box sx={{ marginBottom: "20px", color: "wheat" }}>Email</Box>
            <Box>furniture@gmail.com</Box>
          </Box>
        </Box>
        <Box className="menuContent-text" sx={{ opacity: 0, zIndex: 1, display: "flex", justifyContent: "start", gridRow: "4/5", gridColumn: "2/3" }}>
          <Box sx={{ color: "#a86d00", fontSize: "1.3rem", marginRight: "20px" }}>
            <Box sx={{ marginBottom: "20px", width: "130px", color: "wheat" }}>Branches</Box>
            <Box>alexandria</Box>
            <Box>cairo</Box>
            <Box>port-said</Box>
            <Box>damiate</Box>
          </Box>
          <Box sx={{ color: "#a86d00", fontSize: "1.3rem" }}>
            <Box sx={{ marginBottom: "20px", color: "wheat" }}>Main Address</Box>
            <Box>Cairo, Nasr-City, 45-street, villa-5</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
