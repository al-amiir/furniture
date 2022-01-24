import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { Box } from "@mui/system";
const Loader = ({ type, color, loaderDisplay }) => {
  //   useEffect(() => {
  //     console.log(loaderDisplay);
  //   }, [loaderDisplay]);
  return (
    // <Box sx={{ zIndex: "2000", height: "100vh", display: `${loaderDisplay}`, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
    <ReactLoading type={type} color={color} sx={{ width: "100%", height: "100%", transform: "scale(.1)" }} />
    // </Box>
  );
};

export default Loader;
