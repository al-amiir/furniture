import React, { useEffect } from "react";
import { Box } from "@mui/system";
import anime from "animejs/lib/anime.es.js";
import modernFashionImage from "../../material/modernFashion.jpg";
const ModernFashion = ({ counter }) => {
  const word1 = "Modern Fashion ?".split("");

  if (counter === 3) {
    anime({
      targets: ".modernFashion",
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 10,
    });
    anime({
      targets: ".modernFashion",
      translateX: ["100vw", "0vw"],
      easing: "easeOutQuad",
      duration: 1000,
    });
    anime({
      targets: ".modernFashion",
      height: ["1vh", "100vh"],
      easing: "easeOutQuad",
      delay: 1000,
      duration: 1000,
    });
    anime({
      targets: ".modernFashion-imageContainer",
      height: ["0vh", "90vh"],
      //   translateX: ["100vw", "0vw"],
      easing: "easeOutQuad",
      delay: 1100,
      duration: 1000,
    });
    anime({
      targets: ".modernFashion-imageContainer img",
      scale: [1.4, 1],
      easing: "linear",
      delay: 1500,
    });
    // Words animation
    setTimeout(() => {
      anime({
        targets: ".modernFashion-font span",
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
      <Box className="modernFashion" sx={{ position: "fixed", width: "100vw", height: "10vh", zIndex: 20, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#000000e8", backdropFilter: "blur(14px)", opacity: "0", overflow: "hidden" }}>
        {/* Image Container */}
        <Box className="modernFashion-imageContainer" sx={{ overflow: "hidden", height: 0, zIndex: 0, border: "20px solid #b38b41" }}>
          <Box component="img" src={modernFashionImage} sx={{ height: "100vh" }} />
        </Box>
        {/* Old fashion Text  */}
        <Box className="modernFashion-font" sx={{ color: "#ff7600", fontSize: 300, zIndex: 1, position: "absolute", mixBlendMode: "difference", left: 0 }}>
          {word1.map((w, i) => (
            <Box key={i} component="span" sx={{ opacity: "0" }}>
              {w}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ModernFashion;
