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
import TextField from '@mui/material/TextField';

import Select, { SelectChangeEvent } from '@mui/material/Select';
const Client = ( {onSubmitClient} ) => {
  //const [client, setClient] = React.useState({});
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [date, setDate] = React.useState(new Date());

  
  const handleName = (event) =>{
    setFirstName(event.target.value)
  }
  const handleLastName = (event) =>{
    setLastName(event.target.value)
  }
  const handlePhone = (event) =>{
    setPhone(event.target.value)
  }
  const handleDate = (event) =>{
    setDate(event.target.value)
  }

  const submitClient = () => {
    if(lastName && firstName && phone && date){
      
      const client = {
        firstName,
        lastName,
        phone,
        date,
      };
      onSubmitClient(client)
      alert("Info saved")
    }
    else{
      alert("Please fill all the fields")
    }
  }
  return (
    <Box className="" maxWidth="false" sx={{ flexGrow: 2 }}>
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
              Enter Your Information
              </h1>
              <div className="TextInfo">
<div  className="SelectServ">
<FormControl fullWidth>
<TextField id="outlined-basic" onChange={handleName} className="inputClient" label=" First Name (required): " variant="outlined" />
<TextField id="outlined-basic" onChange={handleLastName} className="inputClient" label=" Last Name (required): " variant="outlined" />
<TextField inputProps={{ maxLength: 12 }} type="number" id="outlined-basic" onChange={handlePhone} className="inputClient" label=" Phone Number (required): " variant="outlined" />
<TextField id="outlined-basic" onChange={handleDate} className="inputClient" label=" Date of Birth :" variant="outlined" />
  </FormControl>
  <ButOn>
                <button className="Log" onClick={submitClient}>Submit</button>
            </ButOn>
  </div>
              </div>
            </Item>
          </Stack>
        </Item>
    </Grid>
  </Box>
  );
};

export default Client;
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

  const ButOn = styles.button`
border: 0px;
background-color: transparent;
margin: 5px 0px;
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