import { Box } from "@mui/system";
import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import historyImage from "../../material/intro-history.jpg";
const History = ({ counter }) => {
  const word1 = "SINCE 1995".split("");
  const word2 = "We Are In The Market".split("");

  if (counter === 1) {
    anime({
      targets: ".history",
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 10,
    });
    anime({
      targets: ".history",
      translateX: ["100vw", "0vw"],
      easing: "easeOutQuad",
      duration: 1000,
    });
    anime({
      targets: ".history",
      height: ["1vh", "100vh"],
      easing: "easeOutQuad",
      delay: 1000,
      duration: 1000,
    });
    anime({
      targets: ".history-imageContainer",
      height: ["0vh", "100vh"],
      easing: "easeOutQuad",
      duration: 1000,
    });
    anime({
      targets: ".history-imageContainer img",
      scale: [1, 1.3],
      easing: "linear",
      delay: 100,
    });
    // Words animation
    setTimeout(() => {
      anime({
        targets: ".history-font span",
        opacity: [0, 1],
        easing: "linear",
        duration: 1000,
        delay: function (el, i) {
          return i * 50;
        },
      });
    }, 1500);
  }

  return (
    <>
      <Box className="history" sx={{ position: "fixed", width: "100vw", height: "1vh", zIndex: 10, display: "flex", flexDirection: "column", backgroundColor: "#000000e8", backdropFilter: "blur(14px)", opacity: 0, overflow: "hidden" }}>
        {/* Image Container */}
        {/* <Box className="history-imageContainer" sx={{ overflow: "hidden", height: 0, position: "absolute", left: "50%", zIndex: 0 }}>
          <Box component="img" src={historyImage} sx={{ height: "100vh" }} />
        </Box> */}
        {/* Since 1995 Text  */}
        <Box className="history-font" sx={{ color: "white", fontSize: 300, zIndex: 1 }}>
          {word1.map((w, i) => (
            <Box key={i} component="span" sx={{ opacity: "0" }}>
              {w}
            </Box>
          ))}
        </Box>
        {/* We are in the market Text*/}
        <Box className="history-font" sx={{ color: "white", fontSize: 150, zIndex: 1 }}>
          {word2.map((w, i) => (
            <Box key={i} component="span" sx={{ opacity: "0" }}>
              {w}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default History;
