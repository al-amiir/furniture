import React, { useEffect, useState } from "react";
// Accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Checkbox
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const FilterColor = ({ setFilterObj }) => {
  const [colorValues, setColorValues] = useState([]);
  function handleCheckboxClick(e) {
    e.target.checked ? setColorValues((prev) => [...prev, e.target.value]) : setColorValues((prev) => prev.filter((p) => p !== e.target.value));
  }
  useEffect(() => {
    setFilterObj((prev) => ({ ...prev, color: [colorValues] }));
  }, [colorValues]);
  return (
    <Accordion sx={{ width: "200px", border: "9px solid" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Color</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "#50083a" }}>
        <Checkbox
          value="white"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "white",
            },
          }}
        />
        <Checkbox
          value="pink"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "#f78fa2",
            "&.Mui-checked": {
              color: "#f78fa2",
            },
          }}
        />
        <Checkbox
          value=""
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "wheat",
            "&.Mui-checked": {
              color: "wheat",
            },
          }}
        />
        <Checkbox
          value="red"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "red",
            "&.Mui-checked": {
              color: "red",
            },
          }}
        />
        <Checkbox
          value="yellow"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "yellow",
            "&.Mui-checked": {
              color: "yellow",
            },
          }}
        />
        <Checkbox
          value="orange"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "orange",
            "&.Mui-checked": {
              color: "orange",
            },
          }}
        />

        <Checkbox
          value="green"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "green",
            "&.Mui-checked": {
              color: "green",
            },
          }}
        />
        <Checkbox
          value="blue"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "blue",
            "&.Mui-checked": {
              color: "blue",
            },
          }}
        />
        <Checkbox
          value="purple"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "purple",
            "&.Mui-checked": {
              color: "purple",
            },
          }}
        />
        <Checkbox
          value="brown"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "#8a3e09",
            "&.Mui-checked": {
              color: "#8a3e09",
            },
          }}
        />
        <Checkbox
          value="black"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "black",
            "&.Mui-checked": {
              color: "black",
            },
          }}
        />
        <Checkbox
          value="grey"
          onClick={(e) => handleCheckboxClick(e)}
          sx={{
            color: "grey",
            "&.Mui-checked": {
              color: "#808080",
            },
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterColor;
