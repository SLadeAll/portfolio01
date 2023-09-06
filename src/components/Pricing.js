import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import NavBar from "./NavBar";
import Paper from "@mui/material/Paper";
import styles from "styled-components";
import "./styles/PricingStyle.css";
import Service from "./SelectService";
import Location from "./SelectLocation";
import Client from "./ClientForm"
import Info from "./ClientInfo"

function PricingContent() {
  const [service, setService] = React.useState('');
  const [step, setStep] = React.useState(0);
  const [location, setLocation] = React.useState('');
  const [client, setClient] = React.useState(false);

  const handleChange = value => {
    setService(value);
  };
  const handleChangeStep = value => {
    setStep(value);
  };
  const handleChangeLocation = value => {
    setLocation(value)
  }
  const handleClientInfo = value => {
    setClient(value);
  }
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 5, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          zIndex: 1250,
          borderBottom: (theme) => `0px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ zIndex: 1252, flexWrap: "wrap" }}>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            <NavBar />
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="forms">
      <Box className="formBox">
        {step==0 && <Service actualStep={step} changeStep={handleChangeStep} onChangeService={(value) => handleChange(value)} />}
        {step==1 && <Location actualStep={step} changeStep={handleChangeStep} changeLocation={(value) => handleChangeLocation(value)} />}
        {step==2 && <Client actualStep={step} changeStep={handleChangeStep} onSubmitClient={(value) => handleClientInfo(value)}/>}
        {client && <Info Service={service} Location={location} ClientInfo={client}/>}
        {client &&  <div  className="buttonsBaNex" sx={{ flexGrow: 2 }}> <ButOn>
                <button className="Log" onClick={() => setClient(false)}>Clean Info</button>
            </ButOn> </div>}
      </Box>
      </div>
          <div  className="buttonsBaNex" sx={{ flexGrow: 2 }}> 
            <ButOn>
                <button className="Log" onClick={() => setStep(step > 0 ? step-1 : step)}>Back</button>
                <button className="Log2" onClick={() => setStep(step < 2 ? step+1 : step)}>Next</button>
            </ButOn>
          </div>
    </React.Fragment>
  );
}
export default function Pricing() {
  return <PricingContent />;
}


const ButOn = styles.button`
border: 0px;
background-color: transparent;
align-content: center;
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