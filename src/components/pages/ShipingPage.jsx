import React, { useEffect } from "react";
import commerce from "../../lib/commerce";

const ShipingPage = ({ cart }) => {
  useEffect(() => {
    console.log({ cart });
    // 1 generate token
    commerce.checkout.generateToken(cart.id, { type: "cart" }).then((checkoutToken) => {
      console.log({ checkoutToken });
      // use token
      // live
      commerce.checkout.getLive(checkoutToken.id).then((live) => console.log({ live }));

      //shipping methods
      //   commerce.checkout
      //     .getShippingOptions(checkoutToken.id, {
      //       country: "US",
      //       region: "CA",
      //     })
      //     .then((methods) => console.log({ methods }));
      // rules
      //   commerce.checkout.helperValidation(checkoutToken.id).then((response) => console.log(response.rules));
      // available countries
      commerce.services.localeListShippingCountries(checkoutToken.id).then((countries) => console.log({ countries }));
      commerce.services.localeListShippingSubdivisions(checkoutToken.id, "EG").then((subcountries) => console.log({ subcountries }));
      //   'chkt_L5z3kmQpdpkGlA'
      commerce.checkout
        .capture(checkoutToken.id, {
          //   line_items: {
          //     // Key is the line item ID for our test product
          //     item_7RyWOwmK5nEa2V: {
          //       quantity: 1,
          //     },
          //   },
          customer: {
            firstname: "John",
            lastname: "Doe",
            email: "john.doe@example.com",
          },
          shipping: {
            name: "John Doe",
            street: "123 Fake St",
            town_city: "San Francisco",
            county_state: "CA",
            postal_zip_code: "94103",
            country: "US",
          },
          //   fulfillment: {
          //     // The shipping method ID for "USPS Ground" (for example)
          //     // You can use commerce.checkout.getShippingOptions() to get a list
          //     shipping_method: "ship_1ypbroE658n4ea",
          //   },
          payment: {
            // Test Gateway is enabled by default, and is used when you submit orders with
            // your sandbox API key
            gateway: "test_gateway",
            card: {
              number: "4242 4242 4242 4242",
              expiry_month: "01",
              expiry_year: "2023",
              cvc: "123",
              postal_zip_code: "94103",
            },
          },
        })
        .then((response) => {
          console.log("Great,, your checkout was captured successfully! Checkout the response object for receipt info.");
        })
        .catch((error) => console.error(error));
    });
  }, [cart]);

  return <div>Hello</div>;
};

export default ShipingPage;
