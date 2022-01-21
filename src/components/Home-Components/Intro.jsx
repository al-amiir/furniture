import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import anime from "animejs/lib/anime.es.js";
import Loader from "../Loader";
import introVideo from "../../material/intro-video.mp4";
const Intro = ({ counter }) => {
  const word = "FURNITURE".split("");
  useEffect(() => {
    // counter === 0 &&
    setTimeout(() => {
      anime({
        targets: ".intro-font span",
        opacity: [0, 1],
        easing: "linear",
        duration: 1000,
        delay: function (el, i) {
          return i * 100;
        },
      });
    }, 1000);
  }, []);
  return (
    <>
      <Box sx={{ position: "fixed", width: "100vw", height: "100vh", zIndex: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box className="intro-font" sx={{ position: "absolute", color: "white", fontSize: 300, top: 10 }}>
          {word.map((w, i) => (
            <Box key={i} component="span" sx={{ opacity: "0" }}>
              {w}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Intro;
