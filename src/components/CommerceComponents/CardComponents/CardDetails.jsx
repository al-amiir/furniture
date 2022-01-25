import React, { useState, useEffect } from "react";
import { Box, display } from "@mui/system";
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
  //   console.log(info);
  const [images, setImages] = useState([]);
  useEffect(() => {
    info.assets.map((inf) => {
      console.log({ inf });
      setImages((prev) => [
        ...prev,
        {
          original: inf.url,
          thumbnail: inf.url,
        },
      ]);
    });
    console.log(images);
  }, [info]);

  //   const images = [
  //     {
  //       original: "https://picsum.photos/id/1018/1000/600/",
  //       thumbnail: "https://picsum.photos/id/1018/250/150/",
  //     },
  //     {
  //       original: "https://picsum.photos/id/1015/1000/600/",
  //       thumbnail: "https://picsum.photos/id/1015/250/150/",
  //     },
  //     {
  //       original: "https://picsum.photos/id/1019/1000/600/",
  //       thumbnail: "https://picsum.photos/id/1019/250/150/",
  //     },
  //   ];
  return (
    <Box id={info.id} sx={{ position: "fixed", top: 0, left: 0, zIndex: 1, width: "0vw", overflow: "hidden", height: "100vh", backgroundColor: "#f7a53061", backdropFilter: "blur(5px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ position: "relative", display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "end", backgroundColor: "#ffa500", border: "9px solid", padding: "20px" }}>
        <Box sx={{ width: "300px", border: "9px solid black", backgroundColor: "black" }}>
          <ImageGallery items={images} showPlayButton={false} showNav={false} />
        </Box>

        <Box sx={{ width: "300px", paddingLeft: "10px" }}>
          <Box sx={{ fontSize: "3rem", borderBottom: "1px solid", display: "flex", justifyContent: "space-between" }}>
            {info.name}
            <CloseFullscreenIcon fontSize="large" sx={{ color: "black", border: "2px solid", boxShadow: "0 0 10px black", borderRadius: "3px", cursor: "pointer" }} onClick={() => circlePath(`${info.id}`, 100, 0)} />
          </Box>
          <Box sx={{ fontSize: "1.3rem", margin: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatum, doloremque earum voluptatibus dolore, in atque debitis error quisquam enim facere quaerat minus nisi quae a eveniet, laboriosam sunt nobis?</Box>
          <Box sx={{ fontSize: "1.3rem", borderBottom: "1px solid" }}>available colors:</Box>
          {info.variant_groups[0].options.map((c) => (
            <Box sx={{ backgroundColor: `${c.name}`, width: "30px", height: "30px", border: "4px solid", margin: "10px" }}></Box>
          ))}
          <Box sx={{ fontSize: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box> price :{info.price.formatted_with_symbol}</Box>
            <Button sx={{ textAlign: "center", backgroundColor: "black" }}>
              <AddToCardButton info={info} setCart={setCart} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardDetails;
