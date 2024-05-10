import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const GenericSelect = () => {
  const [lang, setLang] = useState("uzbek");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      sx={{ m: 1, maxWidth: 120, width: 150 }}
      size="small"
    >
      <InputLabel id="demo-simple-select-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lang}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={"uzbek"}>Uzbek</MenuItem>
        <MenuItem value={"english"}>English</MenuItem>
        <MenuItem value={"russion"}>Russion</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GenericSelect;
