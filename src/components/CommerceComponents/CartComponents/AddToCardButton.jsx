import React, { useEffect, useState } from "react";
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp";
import { animateCart, circlePath } from "../../animation";
import commerce from "../../../lib/commerce";

const AddToCardButton = ({ info, setCart }) => {
  // Varaints needed to be in cart line items to be able to make order in checkout page.
  const [variants, setVariants] = useState({});
  useEffect(() => {
    info.variant_groups.map((inf) => setVariants((prev) => ({ ...prev, [inf.id]: inf.options[0].id })));
  }, [info]);

  // Add To Cart Function
  function handleAddToCart(e) {
    animateCart("normal");
    commerce.cart.add(`${info.id}`, 1, variants).then((data) => {
      setCart(data.cart);
    });
  }

  return <AddBusinessSharpIcon onClick={handleAddToCart} fontSize="large" sx={{ cursor: "pointer", color: "#04b500" }} />;
};

export default AddToCardButton;
