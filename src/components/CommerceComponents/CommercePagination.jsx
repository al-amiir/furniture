import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
// Commerce
import commerce from "../../lib/commerce";

const CommercePagination = ({ setPage, limit }) => {
  const [count, setcount] = useState(2);
  useEffect(() => {
    commerce.products
      .list({
        category_slug: ["furniture"],
      })
      .then((products) => {
        setcount(Math.ceil(products.data.length / limit));
      });
  }, []);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "20px 0px" }}>
      <Pagination onChange={handleChange} count={count} showFirstButton showLastButton color="success" sx={{ border: "3px solid", padding: "10px", borderRadius: "6px" }} />
    </Box>
  );
};

export default CommercePagination;
