import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import commerce from "../../../lib/commerce";

const MinusToCart = ({ info, setCart }) => {
  return <RemoveIcon sx={{ cursor: "pointer", border: "2px solid black", marginRight: "2px" }} onClick={() => commerce.cart.update(`${info.id}`, { quantity: info.quantity + 1 }).then((data) => setCart(data.cart))} />;
};

export default MinusToCart;
