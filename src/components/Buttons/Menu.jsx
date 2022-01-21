import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { Button } from "@mui/material";
import anime from "animejs/lib/anime.es.js";

const Menu = () => {
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
      <Box sx={{ position: "fixed", right: "1vw", top: "3vh", zIndex: 3000, display: "flex", flexDirection: "column", overflow: "hidden", width: "60px", height: "30px" }}>
        <Button className="menuButton" onClick={handleClickMenu} sx={{ transition: ".3s", display: `${menuCondition ? "initial" : "none"}` }}>
          Menu
        </Button>
        <Button className="closeButton" onClick={handleCloseMenu}>
          Close
        </Button>
      </Box>
      <Box className="menuContent" sx={{ position: "fixed", top: "0vh", left: 0, height: "100vh", width: "100vw", zIndex: 2000, display: `${menuCondition ? "none" : "grid"}`, gridTemplateRows: "repeat(5,20vh)", gridTemplateColumns: "repeat(2,1fr)" }}>
        <Box className="menuContent-text" sx={{ display: "flex", opacity: 0, flexDirection: "column", zIndex: 1, gridRow: "2/-1" }}>
          <Button sx={{ color: "#c31233", fontSize: "4rem", fontWeight: 600 }}>Home</Button>
          <Button sx={{ color: "#c31233", fontSize: "4rem", fontWeight: 600 }}>Products</Button>
          <Button sx={{ color: "#c31233", fontSize: "4rem", fontWeight: 600 }}>About Us</Button>
          <Button sx={{ color: "#c31233", fontSize: "4rem", fontWeight: 600 }}>Contact</Button>
          <Button sx={{ color: "#c31233", fontSize: "4rem", fontWeight: 600 }}>Creator</Button>
        </Box>
      </Box>
    </>
  );
};

export default Menu;
