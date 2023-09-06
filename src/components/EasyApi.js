import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import "./styles/Styles.css";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

const EasyApi = () => {
  return (
    <Box sx={{ width: "90%", margin: "auto", mb: "50px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} md={12}>
          <Item>
            <h1 className="HomeTitle">Easy to use API</h1>
            <p className="parr">______</p>
            <div className="info">
              <h4>
                Guide to setup and configuration. You can present below a guide
                and a description of how your system configuration works and add
                some animated screens.
              </h4>
            </div>
          </Item>
        </Grid>
        <Grid xs={12} md={12}>
          <Item>API Example</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EasyApi;
