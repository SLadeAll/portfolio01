import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import Faq from "react-faq-component";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "left",
}));

const FAQ = () => {
  return (
    <Box sx={{ width: "100%", margin: "auto", mt: "50px", mb: "50px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid md={12}></Grid>
        <Grid xs={12} md={6}>
          <Item>
            <h1 className="HomeTitle">Frequently Asked Questions</h1>
            <p className="parr">______</p>

            <h4>
              Have a presale question about our products and features? Or
              looking for a refund? We would love to hear what you concern is.
            </h4>
            <h4>✓ Simple and Smart HTML code</h4>
            <h4>✓ Works reintegrated in any part of the layout</h4>
            <h4>✓ Reuse the elements from one design to another</h4>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <Faq
              data={data}
              styles={{
                bgColor: "white",
                titleTextColor: "#48482a",
                rowTitleColor: "#78789a",
                rowTitleTextSize: "large",
                rowContentColor: "#48484a",
                rowContentTextSize: "16px",
                rowContentPaddingTop: "10px",
                rowContentPaddingBottom: "10px",
                rowContentPaddingLeft: "50px",
                rowContentPaddingRight: "150px",
                arrowColor: "black",
              }}
              config={{
                animate: true,
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;

const data = {
  title: "",
  rows: [
    {
      title: "Installing the app on all devices",
      content: "Deactivating or deleting your account",
    },
    {
      title: "How to implement and manage API key",
      content: "Deactivating or deleting your account",
    },
    {
      title: "How to set up and optimize your account",
      content: "Deactivating or deleting your account",
    },
    {
      title: "Manage your account access and security settings",
      content:
        "Guide to setup and configuration. You can present below a guide and a description of how your system configuration works and add some animated screens. We belive we have created the most efficient SaaS landing page for your users: Landing page with features that will convince you to use it for your SaaS business.",
    },
    {
      title: "API integration basic overview",
      content: "Ich habe auch keine Ahnung",
    },
    {
      title: "Deactivating or deleting your account",
      content: "Deactivating or deleting your account",
    },
  ],
};
