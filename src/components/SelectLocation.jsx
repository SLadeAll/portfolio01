import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import styles from "styled-components";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Select, { SelectChangeEvent } from '@mui/material/Select';
const Location = ( {changeLocation} ) => {
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
    changeLocation(event.target.value)
  };
  return (
    <Box maxWidth="false" sx={{ flexGrow: 2 }}>
    <Grid container spacing={3}>
        <Item>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Item>
              <h1 className="HomeTitle">
                Select a Location 
              </h1>
              <p><span className="pri">Please note that the North Branch Office is closed on Mondays</span></p>
              <div className="TextInfo">
<div  className="SelectServ">
<FormControl fullWidth>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      label="Age"
      onChange={handleChange}
    >
      <MenuItem value={'Main Office'}>Main Office</MenuItem>
      <MenuItem value={'West Branch Office'}>West Branch Office</MenuItem>
      <MenuItem value={'East Branch Office'}>East Branch Office</MenuItem>
      <MenuItem value={'South Branch Office'}>South Branch Office</MenuItem>
      <MenuItem value={'North Branch Office'}>North Branch Office</MenuItem>
    </Select>
  </FormControl>
  </div>
              </div>
            </Item>
          </Stack>
        </Item>
    </Grid>
  </Box>
  );
};

export default Location;
const Item = styled(Paper)(({ theme }) => ({
    border: 0,
    boxShadow: "none",
    padding: theme.spacing(3),
    textAlign: "left",
  
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
 
    padding: theme.spacing(3),
    textAlign: "left",
  
  }));