import React from "react";
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp";
import { animateCart, circlePath } from "../../animation";
import commerce from "../../../lib/commerce";

const AddToCardButton = ({ info, setCart }) => {
  // Add To Cart Function
  function handleAddToCart(e) {
    animateCart("normal");
    commerce.cart.add(`${info.id}`, 1).then((data) => setCart(data.cart));
    // console.log(cart);
  }

  return <AddBusinessSharpIcon onClick={handleAddToCart} fontSize="large" sx={{ cursor: "pointer", color: "#04b500" }} />;
};

export default AddToCardButton;
