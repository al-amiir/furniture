import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

// Icon
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
// Image Gallery
import ImageGallery from "react-image-gallery";
// Animation
import { circlePath } from "../../animation";
// Card Components
import AddToCardButton from "../CartComponents/AddToCardButton";
import MinusToCart from "../CartComponents/MinusToCart";
import PlusToCartButton from "../CartComponents/PlusToCartButton";

import "./main.css";

const CardDetails = ({ info, cart, setCart }) => {
  const [quantity, setquantity] = useState(0);
  useEffect(() => {
    cart.line_items.map((c) => {
      c.id === info.id && setquantity(c.quantity);
    });
  }, []);

  console.log(info);
  console.log(cart);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <Box id={info.id} sx={{ position: "fixed", top: 0, left: 0, zIndex: 1, clipPath: "circle(0%)", overflow: "hidden", width: "100vw", height: "100vh", backgroundColor: "orange", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Button sx={{ position: "absolute", top: "1vh", right: "4vw", border: "1px solid black", boxShadow: "0 0 10px black" }} onClick={() => circlePath(`${info.id}`, 100, 0)}>
        <CloseFullscreenIcon fontSize="large" sx={{ color: "black" }} />
      </Button>
      <Box sx={{ width: "300px", border: "9px solid black", backgroundColor: "black" }}>
        <ImageGallery items={images} showPlayButton={false} showNav={false} />
      </Box>
      <Box sx={{ width: "300px" }}>
        <Box>{info.name}</Box>
        <Box>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatum, doloremque earum voluptatibus dolore, in atque debitis error quisquam enim facere quaerat minus nisi quae a eveniet, laboriosam sunt nobis?</Box>
        <Box>
          available colors:
          {info.variant_groups[0].options.map((c) => (
            <Box sx={{ backgroundColor: `${c.name}`, width: "10px", height: "10px" }}></Box>
          ))}
        </Box>
        <Box> price :{info.price.formatted_with_symbol} </Box>
        <Box>
          <MinusToCart info={info} setCart={setCart} />
          <Box> {quantity}</Box>
          <PlusToCartButton info={info} setCart={setCart} />
          <AddToCardButton info={info} setCart={setCart} />
        </Box>
      </Box>
    </Box>
  );
};

export default CardDetails;
