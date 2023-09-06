import * as React from "react";
import EasyApi from "./EasyApi";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import styles from "styled-components";
import Features from "./Features";
import CreditSim from "./CreditSim";
import "./styles/PricingStyle.css";
import FAQ from "./FAQ";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Oscar Vera
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "STARTUP",
    price: "29",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "49",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Ultra",
    price: "99",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const footers = [
  {
    title: "Lateral",
    description: [
      "Copyrigth 2018 LATERAL",
      "All Rights Reserved. Proudly made in MX",
      "facebook",
      "twitter",
      "LinkedIn",
    ],
  },
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Products",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Support",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 10, padding: 5, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          zIndex: 1250,
          mb: 4,
          borderBottom: (theme) => `0px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ zIndex: 1252, flexWrap: "wrap", mb:3 }}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            <NavBar />
          </Typography>
        </Toolbar>
      </AppBar>

      <Box maxWidth="false" sx={{ flexGrow: 2 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={1}></Grid>  
          <Grid xs={12} md={6}>
            <Item>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Item>
                  <h1 className="HomeTitle">
                    Build Applications <span className="pri">Faster</span>
                  </h1>
                  <div className="TextInfo">
                    <p>
                      Hire experts & get your job done. The right IT security
                      solutions. Protect your clients and computer systems from
                      hackers and fight against malware.
                    </p>
                  </div>

                  <p className="col">
                    Follow as low as <span className="pri">$0.95</span> per user
                    account
                  </p>
                  <ButOn>
                    <button className="Log">Whatch Demo</button>
                    <button className="Log2">Start Now</button>
                  </ButOn>
                </Item>
              </Stack>
            </Item>
          </Grid>
          <Grid xs={12} md={3}>
            <Item2>
              <CreditSim/>
            </Item2>
          </Grid>
        </Grid>
        <Features/>
        <EasyApi/>
      </Box>
      
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={3} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={3}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[300]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /month
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* FAQ */}
      <Container>
           <FAQ/>           
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={3} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
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

export default function Pricing() {
  return <PricingContent />;
}

const ButOn = styles.button`
border: 0px;
background-color: transparent;
align-items: center;
justify-content: space-between;
.Log{
  cursor: pointer;
  border: 1px solid #65C8DB ;
  background-color: #65C8DB ;
  height: 40px;
  width: 120px;
  color: #fff; 
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  margin-right: 1rem;
}
.Log:active{
  background-color: #3498db;
  color: #fff;
}
.Log2{
  cursor: pointer;
  border: 1px solid #A76AD1 ;
  background-color: #A76AD1 ;
  height: 40px;
  width: 120px;
  color: #fff; 
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
  border-radius: 30px;
  margin-right: 1rem;
}
.Log2:active{
  background-color: #5A2281 ;
  color: #fff;
}
`;
