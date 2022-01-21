import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import lamp1 from "../../material/lamp-1.png";
import lamp2 from "../../material/lamp-2.png";
import lamp3 from "../../material/lamp-3.png";
import lamp4 from "../../material/lamp-4.png";
import anime from "animejs/lib/anime.es.js";
import DotButton from "../Buttons/DotButton";

const Lamp = () => {
  const piecesArray = [lamp1, lamp2, lamp3, lamp4];
  const [piecesCounter, setPiecesCounter] = useState(0);

  const handleCounter = function () {
    anime({
      targets: ".Lamp img",
      translateX: [10, -10, 0],
      duration: 200,
      easing: "linear",
    });
    piecesCounter === piecesArray.length - 1 ? setPiecesCounter(0) : setPiecesCounter((prev) => prev + 1);
  };

  return (
    <>
      <Box className="Lamp" position="fixed" sx={{ top: -18, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", padding: "0px 13px 10px 13px" }}>
        <Box component="img" src={piecesArray[piecesCounter]} sx={{ filter: "drop-shadow(2px 4px 9px black) saturate(1.3) brightness(1.5)", width: "160px" }} />
        <DotButton handleCounter={handleCounter} />
      </Box>
    </>
  );
};

export default Lamp;
