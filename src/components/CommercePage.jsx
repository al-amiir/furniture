import { Box, grid } from "@mui/system";
import React, { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import CommerceCard from "./CommerceComponents/CommerceCard";
import CommerceCart from "./CommerceComponents/CommerceCart";
import CommerceFilter from "./CommerceComponents/CommerceFilter";
import CommercePagination from "./CommerceComponents/CommercePagination";
import Loader from "./Loader";
import NavigationBar from "./NavigationBar";

const CommercePage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [filteredArray, setFilteredArray] = useState([]);
  const [filterObj, setFilterObj] = useState({});
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    setLoading(0);
    fetchProducts();
  }, [page]);

  // Filter
  useEffect(() => {
    let temp = [];
    if (filterObj?.color?.length > 0) {
      filterObj?.color?.forEach((t) => {
        products.map((p) => (p.variant_groups[0]?.options[0]?.name == t ? temp.push(p) : ""));
      });
    }
    if (filterObj?.type?.length > 0) {
      filterObj?.type?.forEach((t) => {
        products.map((p) => (p.variant_groups[1]?.options[0]?.name == t ? temp.push(p) : ""));
      });
    }
    setFilteredArray([...new Set(temp)]);
  }, [filterObj?.color, filterObj?.type, products]);

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
        setLoading(1);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };
  return (
    <>
      <NavigationBar />
      <CommerceCart cart={cart} setCart={setCart} />
      <Box sx={{ height: "auto", maxHeight: "fit-content", display: "flex", backgroundColor: "#01281d", paddingTop: "20px", paddingRight: "16px" }}>
        <CommerceFilter setFilterObj={setFilterObj} />
        <Box sx={{ width: "100%" }}>
          {loading === 0 ? (
            <Box sx={{ gridColumn: "1/-1", height: "50vh", filter: "drop-shadow(2px 4px 6px black) ", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <Box sx={{ fontSize: "4rem", color: "wheat" }}>Loading Products...</Box>
              <Loader type="bars" color="red" />
            </Box>
          ) : (
            <Box sx={{ display: "grid", gridTemplateRows: "min-content", gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(4,1fr)" }, gridGap: "10px" }}>
              {filteredArray.length > 0 ? (
                filteredArray?.map((p) =>
                  p.price.raw <= filterObj.price ? (
                    <>
                      <CommerceCard key={p.id} info={p} cart={cart} setCart={setCart} />
                    </>
                  ) : (
                    ""
                  )
                )
              ) : (filteredArray.length == 0 && filterObj?.color.length > 0) || (filteredArray.length == 0 && filterObj?.type.length > 0) ? (
                <Box sx={{ gridColumn: "1/-1", height: "50vh", filter: "drop-shadow(2px 4px 6px black) ", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <Box sx={{ fontSize: "4rem", color: "crimson" }}>Sorry We Don't Have That Right Now!</Box>
                </Box>
              ) : (
                products?.map((p) =>
                  p.price.raw <= filterObj.price ? (
                    <>
                      <CommerceCard key={p.id} info={p} cart={cart} setCart={setCart} />
                    </>
                  ) : (
                    ""
                  )
                )
              )}
            </Box>
          )}

          <CommercePagination setPage={setPage} limit={limit} setProducts={setProducts} />
        </Box>
      </Box>
    </>
  );
};

export default CommercePage;
