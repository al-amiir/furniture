import React from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";

import reciptionest from "./styles/recip.jpg";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box>
        <Box sx={{ backgroundImage: `url(${reciptionest})`, color: "wheat", height: "400px", border: "9px solid black", height: "400px", backgroundPosition: "initial", backgroundSize: "cover" }}>
          <Box sx={{ width: "100%", height: "100%", backgroundColor: "#00000075", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ fontSize: "1.5rem", color: "black", marginRight: "10px", border: "5px solid black", padding: "5px", backdropFilter: " blur(7px)", backgroundColor: "#0c281d", display: "flex", justifyContent: "center", alignItems: "center" }}>Subscribe to our newsletter and receive exclusive offers every week</Box>
            <TextField id="filled-basic" label="Email" variant="filled" sx={{ backgroundColor: "white", borderRadius: "3px", margin: "10px" }} size="small" />
            <Button variant="contained">Subscribe</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#0c281d" }}>
          {/* Left */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", fontSize: "2rem", letterSpacing: "2px" }}>
              <img src="https://img.icons8.com/external-filled-outline-satawat-anukul/40/000000/external-furnitureandhousehold-furniture-and-household-filled-outline-filled-outline-satawat-anukul-18.png" />
              Furniture
            </Box>
            <Box sx={{ margin: "10px 0px" }}>House my brand design clothing for the young, the old & everyone in between - but most importantly, for the fashionable.</Box>
            <img src="https://img.icons8.com/fluency/30/000000/facebook-new.png" />
            <img src="https://img.icons8.com/fluency/30/000000/instagram-new.png" />
            <img src="https://img.icons8.com/fluency/30/000000/twitter.png" />
            <img src="https://img.icons8.com/fluency/30/000000/linkedin.png" />
            <img src="https://img.icons8.com/external-prettycons-flat-prettycons/30/000000/external-youtube-multimedia-prettycons-flat-prettycons.png" />
          </Box>

          <Box sx={{ display: "flex" }}>
            <div className="footer_bottom-2">
              <h3>Shopping online</h3>
              <ul>
                <li>
                  <Box>Order status</Box>
                </li>
                <li>
                  <Box>Shipping and Delivery</Box>
                </li>
                <li>
                  <Box>Returns</Box>
                </li>
                <li>
                  <Box>Payment Options</Box>
                </li>
                <li>
                  <Box>Contact Us</Box>
                </li>
              </ul>
            </div>
            <div className="footer_bottom-3">
              <h3>Information</h3>
              <ul>
                <li>
                  <Box>Gift Cards</Box>
                </li>
                <li>
                  <Box>Find a store</Box>
                </li>
                <li>
                  <Box>Newsletter</Box>
                </li>
                <li>
                  <Box>Become a member</Box>
                </li>
                <li>
                  <Box>Site feedback</Box>
                </li>
              </ul>
            </div>
            <div className="footer_bottom-4">
              <div className="footer_bottom-3">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <Box>store@uikit.com</Box>
                  </li>
                  <li>
                    <Box>Hotline: +1 131 138 138</Box>
                  </li>
                </ul>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
