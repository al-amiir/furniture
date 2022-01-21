import React, { useState, useEffect } from "react";
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

const FilterType = ({ setFilterObj }) => {
  const [typeValues, setTypeValues] = useState([]);
  function handleCheckboxClick(e) {
    if (e.target.checked === true) setTypeValues((prev) => [...prev, e.target.value]);
    if (e.target.checked === false) setTypeValues((prev) => prev.filter((p) => p !== e.target.value));
  }
  useEffect(() => {
    setFilterObj((prev) => ({ ...prev, type: [typeValues] }));
  }, [typeValues]);
  return (
    <Accordion sx={{ width: "200px", border: "9px solid" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Product Type</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup sx={{ filter: "grayscale(1)" }}>
          <FormControlLabel control={<Checkbox />} label="chair" value="chair" onClick={(e) => handleCheckboxClick(e)} />
          <FormControlLabel control={<Checkbox />} label="bed" value="bed" onClick={(e) => handleCheckboxClick(e)} />
          <FormControlLabel control={<Checkbox />} label="sofa" value="sofa" onClick={(e) => handleCheckboxClick(e)} />
          <FormControlLabel control={<Checkbox />} label="pillow" value="pillow" onClick={(e) => handleCheckboxClick(e)} />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterType;
