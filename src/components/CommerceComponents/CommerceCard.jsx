import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import AddBusinessSharpIcon from "@mui/icons-material/AddBusinessSharp";
import anime from "animejs/lib/anime.es.js";
import { animateCart } from "../animation";

// Commerce
import commerce from "../../lib/commerce";

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
  // Add To Cart Function
  function handleAddToCart(e) {
    animateCart("normal");
    commerce.cart.add(`${info.id}`, 1).then((data) => setCart(data.cart));
    // console.log(cart);
  }

  return (
    <Box sx={{ position: "relative", width: "300px", height: "200px", border: "9px solid", display: "flex", flexDirection: "column", marginBottom: "60px" }}>
      {/* IMAGE */}
      <Box onMouseEnter={() => handlecardText("normal")} onMouseLeave={() => handlecardText("reverse")} onTouchStart={() => console.log("touched")} component="img" src={info.image.url} sx={{ width: "100%", height: "100%", objectFit: "cover" }}></Box>
      <Box id={info.id} sx={{ position: "absolute", width: "105px", top: 0, left: "-17px", height: "80%", backgroundColor: "white", margin: "10px 0px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", overflow: "hidden", border: "9px solid black" }}>
        <p>{info.name}</p>
        <p>{info.description}</p>
        <p>
          <span>{info.price.formatted_with_symbol}</span>
          <span></span>
        </p>
      </Box>
      <Box sx={{ position: "absolute", right: 0, bottom: 0, display: "flex", flexDirection: "column" }}>
        <AddBusinessSharpIcon onClick={handleAddToCart} color="success" fontSize="large" sx={{ backgroundColor: "black", padding: "5px", borderRadius: "1px", border: "2px solid black", filter: " saturate(4)", cursor: "pointer" }} />
      </Box>
      <Box sx={{ position: "absolute", bottom: "-64px", left: " -9px", width: "100%", backgroundColor: "#610000", border: " 9px solid", textAlign: "center" }}>
        <Button fullWidth sx={{ color: "wheat", letterSpacing: "4px" }}>
          More Details
        </Button>
      </Box>
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
