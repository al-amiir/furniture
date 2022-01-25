import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import anime from "animejs/lib/anime.es.js";
import { animateCart, circlePath } from "../animation";
import CardDetails from "./CardComponents/CardDetails";
// Commerce
import commerce from "../../lib/commerce";
import AddToCardButton from "./CartComponents/AddToCardButton";

const CommerceCard = ({ info, cart, setCart }) => {
  function handlecardText(direction) {
    // anime({
    //   targets: `#${info.id}`,
    //   height: ["80%", "0%"],
    //   easing: "easeOutQuad",
    //   direction: `${direction}`,
    //   duration: 400,
    // });
  }
  // // Add To Cart Function
  // function handleAddToCart(e) {
  //   animateCart("normal");
  //   commerce.cart.add(`${info.id}`, 1).then((data) => setCart(data.cart));
  //   // console.log(cart);
  // }

  return (
    <Box sx={{ position: "relative", width: "200px", display: "flex", flexDirection: "column", border: "9px solid black " }}>
      {/* IMAGE */}
      <Box onMouseEnter={() => handlecardText("normal")} onMouseLeave={() => handlecardText("reverse")} onTouchStart={() => console.log("touched")} component="img" src={info.image.url} sx={{ height: "170px", objectFit: "cover" }}></Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#832300", color: "wheat", padding: "8px", borderTop: "9px solid black" }}>
        <Box sx={{ fontSize: "1.1rem", filter: "drop-shadow(2px 4px 6px black)" }}>
          <Box>{info.name}</Box>
          {/* <Box>{info.description}</Box> */}
          <Box>
            <span>{info.price.formatted_with_symbol}</span>
            <span></span>
          </Box>
        </Box>
        <Box sx={{ width: "100px", display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "black", padding: "10px", borderRadius: "5px", boxShadow: "0 0 6px black" }}>
          <MenuBookIcon
            onClick={() => {
              circlePath(`${info.id}`, 0, 100);
            }}
            fontSize="large"
            sx={{ cursor: "pointer", color: "#ffa300" }}
          />
          <AddToCardButton info={info} setCart={setCart} />
          {/* <AddBusinessSharpIcon onClick={handleAddToCart} fontSize="large" sx={{ cursor: "pointer", color: "#04b500" }} /> */}
        </Box>
      </Box>
      <CardDetails info={info} cart={cart} setCart={setCart} />
    </Box>
  );
};

export default CommerceCard;
// active: true
// assets: [{…}]
// attributes: []
// categories: []
// checkout_url: {checkout: 'https://checkout.chec.io/TXcNp1?checkout=true', display: 'https://checkout.chec.io/TXcNp1'}
// collects: {fullname: false, shipping_address: true, billing_address: false, extra_fields: false}
// conditionals: {is_active: true, is_tax_exempt: false, is_pay_what_you_want: false, is_inventory_managed: false, is_sold_out: false, …}
// created: 1635534767
// description: "<p>Brown Coat</p>"
// extra_fields: []
// has: {digital_delivery: false, physical_delivery: true, images: true}
// id: "prod_ypbroE6kgV58n4"
// image: {id: 'ast_4OANwREZGklvYL', url: 'https://cdn.chec.io/merchants/35082/assets/OzNrbSofjVYSf3wa|brownCoat.jpg', description: null, is_image: true, filename: 'brownCoat.jpg', …}
// inventory: {managed: false, available: 0}
// is: {active: true, tax_exempt: false, pay_what_you_want: false, inventory_managed: false, sold_out: false}
// meta: null
// name: "Brown Coat"
// permalink: "TXcNp1"
// price: {raw: 30, formatted: '30.00', formatted_with_symbol: '$30.00', formatted_with_code: '30.00 USD'}
// related_products: []
// seo: {title: null, description: null}
// sku: null
// sort_order: 0
// thank_you_url: null
// updated: 1635537120
// variant_groups: []
