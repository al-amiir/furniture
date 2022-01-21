import React, { useState, useEffect } from "react";
import anime from "animejs";
import { Box } from "@mui/system";

const DotButton = ({ handleCounter }) => {
  useEffect(() => {
    // anime({
    //   targets: ".button-dot-1",
    //   opacity: [1, 0],
    //   scale: [0, 2],
    //   loop: true,
    //   easing: "linear",
    //   duration: 1500,
    //   begin: () => {
    //     anime({
    //       targets: ".button-dot-2",
    //       opacity: [1, 0],
    //       scale: [0, 2],
    //       loop: true,
    //       easing: "linear",
    //       duration: 1500,
    //       delay: 1000,
    //     });
    //   },
    // });
  }, []);
  return (
    <div>
      <Box className="button-dot" component="div" onClick={handleCounter} sx={{ width: "20px", height: "20px", position: "relative", backgroundColor: "white", borderRadius: "10px", cursor: "pointer" }}>
        <Box className="button-dot-1" component="span" sx={{ width: "100%", height: "100%", backgroundColor: "white", position: "absolute", borderRadius: "17px" }}></Box>
        <Box className="button-dot-2" component="span" sx={{ width: "100%", height: "100%", backgroundColor: "white", position: "absolute", borderRadius: "17px" }}></Box>
      </Box>
    </div>
  );
};

export default DotButton;
