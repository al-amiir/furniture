import React, { useState } from "react";

import { Box } from "@mui/system";
import { Button } from "@mui/material";

import chair from "../../material/chair.png";
import chair1 from "../../material/chair-1.png";

import sofa1 from "../../material/sofa-1.png";
import DotButton from "../Buttons/DotButton";
import anime from "animejs";

const Sofa = () => {
  anime({
    targets: ".Sofa img",
    translateX: [10, -10, 0],
    duration: 200,
    easing: "linear",
  });
  const piecesArray = [chair1];
  const [piecesCounter, setPiecesCounter] = useState(0);
  const handleCounter = function () {
    piecesCounter === piecesArray.length - 1 ? setPiecesCounter(0) : setPiecesCounter((prev) => prev + 1);
  };

  return (
    <>
      <Box className="Sofa" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "13vh" }}>
        <DotButton handleCounter={handleCounter} />
        <Box component="img" src={piecesArray[piecesCounter]} sx={{ filter: "drop-shadow(2px 20px 17px black) saturate(1.3) saturate(1.3)", width: "400px" }} />
      </Box>
    </>
  );
};

export default Sofa;
