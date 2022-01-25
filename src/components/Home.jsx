import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Intro from "./Home-Components/Intro";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "black", height: "100vh", backgroundPosition: "bottom", backgroundSize: "cover", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <iframe src="https://my.spline.design/untitled-78d2432f1b2447ddc788211ec6001bb0/" frameBorder="0" width="100%" height="100%" style={{ zIndex: 10 }}></iframe>
      <Intro />
    </Box>
  );
};

export default Home;

// import background from "../material/background-2.jpg";
// import History from "./Home-Components/History";
// import Lamp from "./Home-Components/Lamp";
// import Plant from "./Home-Components/Plant";
// import Sofa from "./Home-Components/Sofa";
// import { Button } from "@mui/material";
// import OldFashion from "./Home-Components/OldFashion";
// import ModernFashion from "./Home-Components/ModernFashion";

// const [counter, setCounter] = useState(0);
// function handleCounter() {
//   setCounter((prev) => prev + 1);
// }
{
  /* <Lamp />
      <Sofa />
      <Plant /> */
}
{
  /* <History counter={counter} />
      <OldFashion counter={counter} />
      <ModernFashion counter={counter} /> */
}
{
  /* <Button sx={{ position: "fixed", zIndex: 1000, right: 0, top: "50vh" }} onClick={handleCounter}>
        next
      </Button> */
}
