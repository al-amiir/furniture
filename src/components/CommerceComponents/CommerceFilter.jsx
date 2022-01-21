import * as React from "react";

import { Box } from "@mui/system";
import FilterColor from "./filterComponents/FilterColor";
import FilterType from "./filterComponents/FilterType";
import FilterSlider from "./filterComponents/FilterSlider";

const CommerceFilter = ({ setFilterObj }) => {
  return (
    <Box sx={{ padding: "10px", margin: "20px" }}>
      <FilterType setFilterObj={setFilterObj} />
      <FilterColor setFilterObj={setFilterObj} />
      <FilterSlider setFilterObj={setFilterObj} />
    </Box>
  );
};

export default CommerceFilter;
