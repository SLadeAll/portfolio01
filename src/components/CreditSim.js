import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Calcu from "./Calcu";

import "./styles/Styles.css";

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  border: 1,
}));

const CreditSim = (props) => {
  return (
    <div>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} md={12}>
            <Item2>
              <h2>Simulador de Credito</h2>
            </Item2>
          </Grid>
          <Grid xs={12} md={12}>
            <Calcu />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CreditSim;
