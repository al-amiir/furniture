import React, { useEffect, useState } from "react";
// Commerce
import commerce from "../../lib/commerce";

import { Box } from "@mui/system";
import { Button } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { animateCart } from "../animation";
import CartItems from "./CartComponents/CartItems";

import { Virtuoso } from "react-virtuoso";

const CommerceCart = ({ cart, setCart }) => {
  useEffect(() => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
      console.log(cart);
    });
  }, []);
  return (
    <>
      {/* Cart */}
      <Box className="cart" sx={{ position: "fixed", right: "-31vw", height: "98vh", zIndex: 4000, backgroundColor: "wheat", border: " 9px solid", boxShadow: "0 0 20px 3px black" }}>
        {/* Close Button */}
        <Box sx={{ position: "absolute", right: "9px" }}>
          <CancelPresentationIcon onClick={() => animateCart("reverse")} fontSize="large" />
        </Box>
        {/* Header */}
        <Box sx={{ fontSize: "2rem", marginTop: "30px", padding: "5px 15px", borderBottom: "9px solid" }}>
          Your Bag <span>({cart.total_items})</span>
        </Box>
        {/* Content */}
        <Box>
          <Virtuoso style={{ height: "400px" }} totalCount={1} itemContent={(index) => <CartItems setCart={setCart} cart={cart} />} />
        </Box>
        {/* Footer */}
        <Box sx={{ padding: "5px 15px", borderTop: "9px solid" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "1.5rem" }}>
            <p>Total Proce:</p>
            <p>{cart?.subtotal?.formatted_with_symbol}</p>
          </Box>

          <Box>
            <Button sx={{ border: "1px solid", backgroundColor: "green", color: "black", marginRight: "10px" }}>Checkout</Button>
            <Button sx={{ border: "1px solid", backgroundColor: "#ff3a3a", color: "black" }} onClick={() => commerce.cart.empty().then((data) => setCart(data.cart))}>
              Clear Cart
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Background */}
      <Box className="cart-background" sx={{ position: "fixed", width: "0vw", height: "100vh", zIndex: 100, backgroundColor: "#f5deb396", backdropFilter: "blur(3px)" }}></Box>
    </>
  );
};

export default CommerceCart;
