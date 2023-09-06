import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import "./styles/Styles.css";
import responsive from './Assets/icons/icons-64-violet/responsive-64.png'
import desk from './Assets/icons/icons-64-violet/desktop-chart-64.png'
import brow from './Assets/icons/icons-64-violet/browser-64.png'
import wind from './Assets/icons/icons-64-violet/desktop-windows-64.png'
import cust from './Assets/icons/icons-64-violet/customizer-64.png'
import use from './Assets/icons/icons-64-violet/users-64.png'
const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
  }));

const Features = () => {
  return (
    <div>
     
      <Box sx={{ width: '90%', margin: "auto", }}>
        <Grid  spacing={2}>
          <Grid xs={12} md={12}>
            <Item>
              <h1 className="HomeTitle">Features designed for you</h1>
              <p className="parr">______</p>
              <div className="info">
                <h4>
                  We belive we have created the most efficient SaaS landing page
                  for your users. Landing page with features that will convince
                  you to use it for your SaaS business.
                </h4>
              </div>
            </Item>
          </Grid>
        </Grid>
        {/* features */}
        <Container
        className="box"
          maxWidth="false"
          sx={{
            border: 0,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={2} justifyContent="space-evenly">
            {feat.map((feature) => (
              <Grid item xs={12} sm={6} md={4} key={feature.title}>
                <img src={feature.img} alt="icon"  />
                <Typography variant="h5" color="text.primary" gutterBottom>
                  {feature.title}
                  <p className="parr2">______</p>
                </Typography>
                <ul className="parr3">
                  {feature.description.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* End footer */}
      </Box>
    </div>
  );
};

export default Features;

const feat = [
  {
    title: "Responsive Layout Template",
    img: `${responsive}`,
    description: [
      "Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones) Created with mobile specialists",
    ],
  },
  {
    title: "SaaS Landing Page Analysis",
    img: `${desk}`,
    description: [
      "A perfect structure created after we analized trends in SaaS landing page designs Analysis made to the most popular Saas businesses",
    ],
  },
  {
    title: "Smart BEM Grid",
    img: `${brow}`,
    description: [
      "Blocks, Elements and Modifiers. A smart HTML/CSS structure that can easely be reused. Layout driven by the purpose of modularity",
    ],
  },
  {
    title: "Multiple Unique Designs",
    img: `${wind}`,
    description: [
      "Choose between multiple unique designs and easy integrate elements from one design to another. Following the latest design trends.",
    ],
  },
  {
    title: "Flexible HTML Sections",
    img: `${cust}`,
    description: [
      "Simple and Smart HTML code that works reintegrated in any part of the layout. Reuse the elements from one design to another",
    ],
  },
  {
    title: "User Friendly",
    img: `${use}`,
    description: [
      "Easy to navigate. Made with user experience in mind, in order to provide the perfect landing page experience for your client",
    ],
  },
];
