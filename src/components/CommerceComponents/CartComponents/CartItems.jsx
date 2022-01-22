import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import commerce from "../../../lib/commerce";

// Icons
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItems = ({ cart, setCart }) => {
  //   const [cart, setCart] = useState({});
  //   useEffect(() => {
  //     commerce.cart.contents().then((cart) => {
  //       setCart(cart);
  //       console.log(cart);
  //     });
  //   }, []);
  return (
    <Box sx={{ margin: "15px" }}>
      {cart?.line_items?.map((c) => (
        <Box sx={{ display: "flex", justifyContent: "start" }}>
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
              <Button onClick={() => commerce.cart.update(`${c.id}`, { quantity: c.quantity - 1 }).then((data) => setCart(data.cart))}>
                <RemoveIcon />
              </Button>
              <Button onClick={() => commerce.cart.update(`${c.id}`, { quantity: c.quantity + 1 }).then((data) => setCart(data.cart))}>
                <AddIcon />
              </Button>
            </Box>
            <Button sx={{ border: "3px solid", width: "100%", color: "#d10000" }}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartItems;
