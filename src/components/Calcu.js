import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import "./styles/Styles.css";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  borderRadius: "4px",
  textAlign: "right",
  paddingRight: "10%",
  marginTop: "10%",
}));
const Item2 = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  borderRadius: "4px",
  textAlign: "center",
  paddingRight: "10%",
}));
function valueLabelFormat(value) {
  const units = ["mxn"];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function valueLabelFormat2(percent) {
  const units = ["%"];

  let unitIndex = 0;
  let scaledValue = percent;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value, percent, meses) {
  let a = (value - value * 0.0348) / meses;

  let c = a * (percent / 100);
  console.log(c);
  let res = a + c;
  console.log(res);
  let b = parseInt(res.toString());
  return b;
}
const calculateTotal = (value, percent, meses) => {
  let a = (value - value * 0.0348) / meses;
  let d = value * 0.0348;
  let c = a * (percent / 100);
  console.log(c);
  let res = value + d + c;
  console.log(res);
  let b = parseInt(res.toString());
  return b;
};
function calculateValue2(value) {
  return value;
}
function calculateValue3(percent) {
  return percent;
}
function calculatedCom(value) {
  let a = value * 0.0348;
  return a;
}
function calculeMont(value) {
  let a = value - value * 0.0348;
  return a;
}
export default function NonLinearSlider() {
  const [value, setValue] = React.useState(0);
  const [percent, setPercent] = React.useState(0);
  const [meses, setMeses] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  const handleChange2 = (event, newValue) => {
    if (typeof newValue === "number") {
      setPercent(newValue);
    }
  };

  const handleChange3 = (event) => {
    setMeses(12);
  };
  const handleChange4 = (event) => {
    setMeses(24);
  };
  const handleChange5 = (event) => {
    setMeses(32);
  };
  return (
    <Box sx={{ mt: "40px", ml: "10%", width: "100%" }}>
      <Typography id="non-linear-slider" gutterBottom>
        Total Deseado: {valueLabelFormat(calculateValue2(value))}
      </Typography>
      <Slider
        value={value}
        min={10000}
        step={1}
        max={100000}
        scale={calculateValue2}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        sx={{
          width: "90%",
          color: "#A76AD1",
        }}
      />
      <Typography id="non-linear-slider" gutterBottom>
        Tasa Anual: {valueLabelFormat2(calculateValue3(percent))}
      </Typography>
      <Slider
        value={percent}
        min={1}
        step={1}
        max={100}
        scale={calculateValue3}
        getAriaValueText={valueLabelFormat2}
        valueLabelFormat={valueLabelFormat2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        sx={{
          width: "90%",
          color: "#A76AD1",
        }}
      />
      <Grid xs={12} md={12}>
        <Item2 className="item2">
          <h4>Meses</h4>
          <button onClick={handleChange3} className="btnRadio">
            12
          </button>
          <button onClick={handleChange4} className="btnRadio">
            24
          </button>
          <button onClick={handleChange5} className="btnRadio">
            32
          </button>
        </Item2>
      </Grid>
      <Grid xs={12} md={12}>
        <Item>
          <Typography id="non-linear-slider" gutterBottom>
            Pago Mensual:{" "}
            {valueLabelFormat(calculateValue(value, percent, meses))}
          </Typography>
          <Typography id="non-linear-slider" gutterBottom>
            Comision por apertura:{valueLabelFormat(calculatedCom(value))}
          </Typography>
          <Typography id="non-linear-slider" gutterBottom>
            Monto neto Depocitado:{valueLabelFormat(calculeMont(value))}
          </Typography>
          <Typography id="non-linear-slider" gutterBottom>
            total Pagado:{" "}
            {valueLabelFormat(calculateTotal(value, percent, meses))}
          </Typography>
          <Typography id="non-linear-slider" gutterBottom>
            CAT: {valueLabelFormat(calculateValue(value, percent))}
          </Typography>
          <Typography id="non-linear-slider" gutterBottom>
            Meses: {meses}
          </Typography>
        </Item>
      </Grid>
    </Box>
  );
}
