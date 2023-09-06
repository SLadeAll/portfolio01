import * as React from "react";
import { styled } from "@mui/material/styles";
import styles from "styled-components";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Select, { SelectChangeEvent } from '@mui/material/Select';
const Info = ( {ClientInfo, Service, Location} ) => {
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
              Client Information
              </h1>
              <div className="TextInfo">
<div  className="SelectServ">
    <h5>Service: {Service}</h5>
    <h5>Location: {Location}</h5>
<ul>
{Object.entries(ClientInfo).map(([property, value]) => (
<li key={property}>{property}: {value}</li>
))}
</ul>
  </div>
              </div>
            </Item>
          </Stack>
        </Item>
    </Grid>
  </Box>
  );
};

export default Info;
const Item = styled(Paper)(({ theme }) => ({
    boxShadow: "none",
    padding: theme.spacing(3),
    textAlign: "left",
  
  }));
