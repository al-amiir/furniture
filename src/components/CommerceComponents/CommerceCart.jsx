import React, { useEffect, useState } from "react";
// Commerce
import commerce from "../../lib/commerce";

import { Box } from "@mui/system";
import { Button } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { animateCart } from "../animation";
import CartItems from "./CartComponents/CartItems";

const CommerceCart = ({ cart, setCart }) => {
  useEffect(() => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
      console.log(cart);
    });
  }, []);
  //   useEffect(() => {
  //     commerce.cart.refresh().then((cart) => setCart(cart));
  //   }, [cart]);
  return (
    <>
      {/* Cart */}
      <Box className="cart" sx={{ position: "fixed", right: "-31vw", height: "98vh", zIndex: 4000, backgroundColor: "white", border: " 9px solid", boxShadow: "0 0 20px 3px black" }}>
        {/* Close Button */}
        <Box sx={{ position: "absolute", right: "9px" }}>
          <CancelPresentationIcon onClick={() => animateCart("reverse")} fontSize="large" />
        </Box>
        {/* Header */}
        <Box sx={{ fontSize: "2rem", marginTop: "30px", padding: "5px 15px", borderBottom: "9px solid" }}>
          Your Bag <span>(n)</span>
        </Box>
        {/* Content */}
        <Box>
          <CartItems setCart={setCart} cart={cart} />
        </Box>
        {/* Footer */}
        <Box sx={{ padding: "5px 15px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "1.5rem" }}>
            <p>Total Proce:</p>
            <p>{cart?.subtotal?.formatted_with_symbol}</p>
          </Box>

          <Box>
            <Button sx={{ border: "1px solid", backgroundColor: "#FBDCC5", color: "black", marginRight: "10px" }}>Checkout</Button>
            <Button sx={{ border: "1px solid", backgroundColor: "#FBDCC5", color: "black" }}>Contiune Shopping</Button>
          </Box>
        </Box>
      </Box>
      {/* Background */}
      <Box className="cart-background" sx={{ position: "fixed", width: "0vw", height: "100vh", zIndex: 100, backgroundColor: "#ffffff9e", backdropFilter: "blur(3px)" }}></Box>
    </>
  );
};

export default CommerceCart;
