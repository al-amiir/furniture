import { Box, grid } from "@mui/system";
import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import Commercecard from "./CommerceComponents/Commercecard";
import CommerceCart from "./CommerceComponents/CommerceCart";
import CommerceFilter from "./CommerceComponents/CommerceFilter";

const CommercePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [filterObj, setFilterObj] = useState({});

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(filterObj);
  }, [filterObj]);

  // Filter Price
  useEffect(() => {}, [filterObj.price]);
  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
        console.log(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  return (
    <>
      <CommerceCart />
      <Box sx={{ width: "100vw", height: "100vh", maxHeight: "fit-content", display: "flex" }}>
        <CommerceFilter setFilterObj={setFilterObj} />
        <Box sx={{ display: "grid", gridTemplateColumns: " 1fr 1fr", gridGap: "10px" }}>
          {filteredArray.length > 0
            ? filteredArray?.map((p) => (
                <>
                  <Commercecard key={p.id} info={p} />
                </>
              ))
            : products?.map((p) => (
                <>
                  <Commercecard key={p.id} info={p} />
                </>
              ))}
        </Box>
      </Box>
    </>
  );
};

export default CommercePage;
