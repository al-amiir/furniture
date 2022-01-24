import { Box } from "@mui/system";
import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Menu from "./components/Buttons/Menu";
import CommercePage from "./components/CommercePage";
// import Home from "./components/Home";
import CopyRights from "./components/CopyRights";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./components/Home"));

const App = () => {
  const [loaderDisplay, setLoaderDisplay] = useState("flex");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoaderDisplay("none");
  //   }, 10000);
  // }, [loaderDisplay]);
  return (
    <div style={{ padding: 0, margin: 0, fontFamily: "'Yanone Kaffeesatz', sans-serif" }}>
      {/* <Loader type="bars" color="red" loaderDisplay={loaderDisplay} /> */}
      {/* <Suspense fallback={<Loader type="bars" color="red" />}>
        <Home />
      </Suspense> */}
      {/* <CommercePage /> */}

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader type="bars" color="red" />}>
              <Box sx={{ position: "fixed", zIndex: 1000, right: 0 }}>
                <Menu color="wheat" />
              </Box>
              <Home />
            </Suspense>
          }
        />
        <Route path="/products" element={<CommercePage />} />
      </Routes>
      <CopyRights />
    </div>
  );
};

export default App;
