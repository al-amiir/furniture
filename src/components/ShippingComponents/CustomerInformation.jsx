import React, { useState, useEffect } from "react";

// formik
import { Formik, Form, Field } from "formik";

// yup
import * as Yup from "yup";

// formik mui
import { TextField, Select } from "formik-mui";

// mui
import { Box, Button, MenuItem, FormControl } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

// commerce
import commerce from "../../lib/commerce";

const InformationForm = ({ checkoutToken, setOrderDetails, setActiveStep }) => {
  const [countries, setCountries] = useState({});
  const [subCountries, setSubCountries] = useState("US");
  const [subCountriesList, setsubCountriesList] = useState({});
  useEffect(() => {
    commerce.services.localeListShippingCountries(checkoutToken).then((response) => setCountries(response.countries));
  }, [checkoutToken]);
  useEffect(() => {
    commerce.services.localeListShippingSubdivisions(checkoutToken, subCountries).then((response) => setsubCountriesList(response.subdivisions));
  }, [checkoutToken, subCountries]);

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", phone: "", address: "", SelectedCountry: "", selectedSubCountry: "" }}
      validationSchema={Yup.object({
        // Text Field
        firstName: Yup.string().uppercase().max(15, "Must be 15 characters or less").required(),
        lastName: Yup.string().max(20, "Must be 20 characters or less").required(),
        email: Yup.string().email("Invalid email address").required(),
        phone: Yup.number().required().integer("Should be integer number!").positive("Should be positive number!"),
        address: Yup.string().uppercase().max(15, "Must be 15 characters or less").required(),

        // Select Single
        SelectedCountry: Yup.string().required("Select Job Title"),
        selectedSubCountry: Yup.string().required("Select Job Title"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log(values);
          setOrderDetails((prev) => ({
            ...prev,
            shipping: {
              name: `${values.firstName} ${values.lastName}`,
              street: `${values.address}`,
              county_state: `${values.SelectedCountry}-${values.selectedSubCountry}`,
              country: `${values.SelectedCountry}`,
            },
            customer: {
              firstname: `${values.firstName}`,
              lastname: `${values.lastName}`,
              email: `${values.email}`,
            },
          }));
          setActiveStep((prev) => prev + 1);
        }, 100);
      }}
    >
      {(props) => (
        <Form onSubmit={Formik.handleSubmit}>
          <Box sx={{ padding: "20px", borderRadius: "6px", backgroundColor: "#DDE2E6", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", margin: "100px 0px", boxShadow: "0 0 18px 0px black" }}>
            {/* Formik-MUI  */}
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridGap: "10px", marginBottom: "10px" }}>
              {/* ------------- TextField --------------- */}
              <Field component={TextField} label="First Name" name="firstName" type="text" placeholder="Jane" color="warning" />
              <Field component={TextField} label="Last Name" name="lastName" type="text" placeholder="Doe" />
              <Field component={TextField} name="email" type="email" label="Email" />
              <Field component={TextField} label="Phone" name="phone" type="number" placeholder="Phone" />
              <Field component={TextField} label="Address" name="address" type="text" placeholder="Address" />
            </Box>

            <FormControl sx={{ width: "100%", marginBottom: "10px" }}>
              {/* -------------Countries Select --------------- */}
              <Field component={Select} name="SelectedCountry" label="Country" autoWidth onClick={(e) => setSubCountries(e.target.dataset.value)}>
                {Object.keys(countries).map((c) => (
                  <MenuItem value={c}>{countries[c]}</MenuItem>
                ))}
              </Field>
            </FormControl>
            <FormControl sx={{ width: "100%", marginBottom: "10px" }}>
              {/* -------------SubCountries Select --------------- */}
              <Field component={Select} name="selectedSubCountry" label="State" autoWidth>
                {Object.keys(subCountriesList).map((c) => (
                  <MenuItem value={c}>{subCountriesList[c]}</MenuItem>
                ))}
              </Field>
            </FormControl>

            <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/98/000000/external-credit-card-shopping-prettycons-lineal-color-prettycons-4.png" />
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridGap: "10px", marginBottom: "10px" }}>
              {/* ------------- Credit Card --------------- */}
              <Field component={TextField} label="Credit Name" name="firstName" type="text" placeholder="Al Amir Abdull Fattah" />
              <Field component={TextField} label="Card Number" name="phone" type="number" placeholder="4242 4242 4242 4242" />
              <Field component={TextField} label="Expiration (mm/yy)" name="phone" type="number" placeholder="09/22" />
              <Field component={TextField} label="Security Code" name="address" type="number" placeholder="###" />
            </Box>
            <Box sx={{ margin: "5px 0px", padding: "10px", display: "flex", justifyContent: "end", width: "96%" }}>
              <Button onClick={props.handleReset} variant="contained" color="error" sx={{ marginRight: "5px" }}>
                Reset
              </Button>
              <Button disabled={props.isSubmitting} onClick={props.submitForm} variant="contained" color="success">
                Submit
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default InformationForm;
