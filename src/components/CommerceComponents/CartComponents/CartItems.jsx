import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import commerce from "../../../lib/commerce";

// Icons
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PlusToCartButton from "./PlusToCartButton";
import MinusToCart from "./MinusToCart";

const CartItems = ({ cart, setCart }) => {
  return (
    <Box sx={{ margin: "15px" }}>
      {cart?.line_items?.map((c) => (
        <Box sx={{ display: "flex", justifyContent: "start", marginBottom: "10px" }}>
          {/* Image */}
          <Box sx={{ width: "100px", objectFit: "cover", border: "9px solid" }} component="img" src={c.image.url}></Box>
          {/* Content */}
          <Box sx={{ paddingLeft: "10px" }}>
            <Box sx={{ fontSize: "1.5rem", margin: 0 }}>{c.name}</Box>
            <p>
              Price:{" "}
              <Box component="span" sx={{ color: "green" }}>
                {c.price.formatted_with_symbol}
              </Box>
            </p>
            <p>
              Quantity: <span>{c.quantity}</span>
            </p>
            <p>
              Total:
              <Box component="span" sx={{ color: "green", marginLeft: "5px" }}>
                ${c.quantity * c.price.raw}
              </Box>
            </p>
            <Box>
              <MinusToCart info={c} setCart={setCart} />
              <PlusToCartButton info={c} setCart={setCart} />
              <DeleteIcon sx={{ cursor: "pointer", border: "2px solid", color: "#d10000" }} onClick={() => commerce.cart.remove(c.id).then((data) => setCart(data.cart))} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartItems;
