import React from "react";
import AddIcon from "@mui/icons-material/Add";
import commerce from "../../../lib/commerce";

const PlusToCartButton = ({ info, setCart }) => {
  return <AddIcon sx={{ cursor: "pointer", border: "2px solid black", marginRight: "2px" }} onClick={() => commerce.cart.update(`${info.id}`, { quantity: info.quantity + 1 }).then((data) => setCart(data.cart))} />;
};

export default PlusToCartButton;
