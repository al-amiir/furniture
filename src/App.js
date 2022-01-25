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
  return (
    <Box sx={{ padding: 0, margin: 0, fontFamily: "'Yanone Kaffeesatz', sans-serif", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader type="bars" color="red" />}>
              <Box sx={{ position: "fixed", zIndex: 1000, right: "1vw", top: "3vh" }}>
                <Menu color="crimson" />
              </Box>
              <Home />
            </Suspense>
          }
        />
        <Route path="/products" element={<CommercePage />} />
      </Routes>

      <CopyRights />
    </Box>
  );
};

export default App;
