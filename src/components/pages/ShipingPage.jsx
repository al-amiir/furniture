import React, { useEffect, useState } from "react";
import commerce from "../../lib/commerce";

//steper
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CustomerInformation from "../ShippingComponents/CustomerInformation";

const ShipingPage = ({ cart }) => {
  // stepper
  const [activeStep, setActiveStep] = useState(0);

  const [lineItems, setLineItems] = useState({});
  const [shippingMethod, setShippingMethod] = useState("");
  const [checkoutToken, setCheckoutToken] = useState("");
  const [orderDetails, setOrderDetails] = useState({});
  // useEffect(() => {
  //   cart.line_items.map((lin) =>
  //     setLineItems((prev) => ({
  //       ...prev,
  //       [lin.id]: {
  //         quantity: lin.quantity,
  //         selected_options: {
  //           [lin.selected_options[0].group_id]: `${lin.selected_options[0].option_id}`,
  //           [lin.selected_options[1].group_id]: `${lin.selected_options[1].option_id}`,
  //         },
  //       },
  //     }))
  //   );
  // }, [cart]);
  useEffect(() => {
    console.log({ orderDetails });
  }, [orderDetails]);

  useEffect(() => {
    //   console.log({ cart });
    //   console.log(lineItems);
    //   // 1 generate token
    commerce.checkout.generateToken(cart.id, { type: "cart" }).then((checkoutToken) => {
      setCheckoutToken(checkoutToken.id);
      //     console.log({ checkoutToken });
      //     // available countries
      //     commerce.services.localeListShippingCountries(checkoutToken.id).then((countries) => console.log({ countries }));
      //     commerce.services.localeListShippingSubdivisions(checkoutToken.id, "EG").then((subcountries) => console.log({ subcountries }));
      //     // shipping method
      //     commerce.checkout
      //       .getShippingOptions(checkoutToken.id, {
      //         country: "US",
      //         region: "CA",
      //       })
      //       .then((response) => setShippingMethod(response[0].id));
      //     //   'chkt_L5z3kmQpdpkGlA'
      //     commerce.checkout
      //       .capture(checkoutToken.id, {
      //         line_items: lineItems,
      //         customer: {
      //           firstname: "John",
      //           lastname: "Doe",
      //           email: "john.doe@example.com",
      //         },
      //         shipping: {
      //           name: "John Doe",
      //           street: "123 Fake St",
      //           town_city: "San Francisco",
      //           county_state: "CA",
      //           postal_zip_code: "94103",
      //           country: "US",
      //         },
      //         fulfillment: {
      //           // The shipping method ID for "USPS Ground" (for example)
      //           // You can use commerce.checkout.getShippingOptions() to get a list
      //           shipping_method: shippingMethod,
      //         },
      //         payment: {
      //           // Test Gateway is enabled by default, and is used when you submit orders with
      //           // your sandbox API key
      //           gateway: "test_gateway",
      //           card: {
      //             number: "4242 4242 4242 4242",
      //             expiry_month: "01",
      //             expiry_year: "2023",
      //             cvc: "123",
      //             postal_zip_code: "94103",
      //           },
      //         },
      //       })
      //       .then((response) => {
      //         console.log("Great,, your checkout was captured successfully! Checkout the response object for receipt info.", response);
      //       })
      //       .catch((error) => console.error({ error }));
    });
  }, [cart, lineItems, shippingMethod]);

  // Stper

  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      {activeStep === 0 ? <CustomerInformation checkoutToken={checkoutToken} setOrderDetails={setOrderDetails} setActiveStep={setActiveStep} /> : ""}
      <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default ShipingPage;
