import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Box } from "@mui/system";
import Menu from "./components/Buttons/Menu";
import CopyRights from "./components/CopyRights";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./components/pages/Home"));
const CommercePage = React.lazy(() => import("./components/pages/CommercePage"));
const ShipingPage = React.lazy(() => import("./components/pages/ShipingPage"));

const App = () => {
  const [cart, setCart] = useState({});

  return (
    <Box sx={{ padding: 0, margin: 0, fontFamily: "'Yanone Kaffeesatz', sans-serif", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Routes>
        {/* Home  */}
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
        {/* Products  */}
        <Route
          path="/products"
          element={
            <Suspense fallback={<Loader type="bars" color="red" />}>
              <CommercePage cart={cart} setCart={setCart} />
            </Suspense>
          }
        />
        {/* Shipping */}
        <Route
          path="/shipping"
          element={
            <Suspense fallback={<Loader type="bars" color="red" />}>
              <ShipingPage cart={cart} />
            </Suspense>
          }
        />
      </Routes>

      <CopyRights />
    </Box>
  );
};

export default App;
