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
const Service = ( {onChangeService}) => {
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value)
    onChangeService(event.target.value)
  };
  return (
    <Box className="insideBox" maxWidth="false" sx={{ flexGrow: 2 }}>
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
                Select a Service 
              </h1>
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
      <MenuItem value={'Upgrade to REAL ID'}>Upgrade to REAL ID</MenuItem>
      <MenuItem value={'Driving Test'}>Driving Test</MenuItem>
      <MenuItem value={'Vehicle Registration'}>Vehicle Registration</MenuItem>
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

export default Service;
const Item = styled(Paper)(({ theme }) => ({
    boxShadow: "none",
    padding: theme.spacing(3),
  
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
 
    padding: theme.spacing(3),
    textAlign: "left",
  
  }));