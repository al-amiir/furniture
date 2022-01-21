import React, { useState, useEffect } from "react";

import { Box } from "@mui/system";
import { Button } from "@mui/material";

import plant1 from "../../material/plant-1.png";
import plant2 from "../../material/plant-2.png";
import plant3 from "../../material/plant-3.png";
import plant4 from "../../material/plant-4.png";

import anime from "animejs";
import DotButton from "../Buttons/DotButton";

const Plant = () => {
  anime({
    targets: ".Plant img",
    translateX: [10, -10, 0],
    duration: 200,
    easing: "linear",
  });
  const piecesArray = [plant1, plant3, plant4];
  const [piecesCounter, setPiecesCounter] = useState(0);
  const handleCounter = function () {
    console.log("ss");
    piecesCounter === piecesArray.length - 1 ? setPiecesCounter(0) : setPiecesCounter((prev) => prev + 1);
  };

  return (
    <>
      <Box className="Plant" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginRight: "150px", marginBottom: "13vh" }}>
        <DotButton handleCounter={handleCounter} />
        <Box component="img" src={piecesArray[piecesCounter]} sx={{ filter: "drop-shadow(2px 4px 9px black) saturate(1.3) brightness(1.5)", width: "277px" }} />
      </Box>
    </>
  );
};

export default Plant;
