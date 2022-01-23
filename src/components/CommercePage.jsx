import { Box, grid } from "@mui/system";
import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import CommerceCard from "./CommerceComponents/CommerceCard";
import CommerceCart from "./CommerceComponents/CommerceCart";
import CommerceFilter from "./CommerceComponents/CommerceFilter";
import CommercePagination from "./CommerceComponents/CommercePagination";
import NavigationBar from "./NavigationBar";

const CommercePage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [filteredArray, setFilteredArray] = useState([]);
  const [filterObj, setFilterObj] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchProducts();
  }, [page]);

  // useEffect(() => {
  //   console.log(filteredArray);
  // }, [filteredArray]);

  // Filter color
  useEffect(() => {
    let temp = [];
    if (filterObj?.color?.length > 0) {
      filterObj.color[0].forEach((t) => {
        products.map((p) => (p.variant_groups[0]?.options[0]?.name == t ? temp.push(p) : ""));
      });
      // if (temp.length === 0) console.log("no Itmes");
    }
    if (filterObj?.type?.length > 0) {
      filterObj.type[0].forEach((t) => {
        products.map((p) => (p.variant_groups[1]?.options[0]?.name == t ? temp.push(p) : ""));
      });
      // if (temp.length === 0) console.log("no Itmes");
    }
    // console.log(temp);
    setFilteredArray([...new Set(temp)]);
  }, [filterObj.color, filterObj.type]);

  // Filter Price
  useEffect(() => {}, [filterObj.price]);

  const fetchProducts = () => {
    commerce.products
      .list({
        category_slug: ["furniture"],
        limit: limit,
        page: page,
      })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  return (
    <>
      <NavigationBar />
      <CommerceCart cart={cart} setCart={setCart} />
      <Box sx={{ maxHeight: "fit-content", display: "flex" }}>
        <CommerceFilter setFilterObj={setFilterObj} />
        <Box sx={{ display: "grid", gridTemplateRows: "min-content", gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(4,1fr)" }, gridGap: "10px" }}>
          {filteredArray.length > 0
            ? filteredArray?.map((p) =>
                p.price.raw <= filterObj.price ? (
                  <>
                    <CommerceCard key={p.id} info={p} cart={cart} setCart={setCart} />
                  </>
                ) : (
                  ""
                )
              )
            : products?.map((p) =>
                p.price.raw <= filterObj.price ? (
                  <>
                    <CommerceCard key={p.id} info={p} cart={cart} setCart={setCart} />
                  </>
                ) : (
                  ""
                )
              )}
          <CommercePagination setPage={setPage} limit={limit} sx={{ gridColumn: "1/-1" }} />
        </Box>
      </Box>
    </>
  );
};

export default CommercePage;
