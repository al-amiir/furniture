import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
// Accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterSlider = ({ setFilterObj }) => {
  const [value, setValue] = useState(50000);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setFilterObj((prev) => ({ ...prev, price: value }));
  }, [value]);

  return (
    <Accordion sx={{ width: "200px", border: "9px solid" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>Price</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ marginBottom: "15px" }}></Box>
        <Box>
          <Slider color="success" aria-label="Always visible" defaultValue={50000} min={0} max={100000} valueLabelDisplay="on" onChange={handleSliderChange} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterSlider;
