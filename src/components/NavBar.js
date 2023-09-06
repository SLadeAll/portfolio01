import React, { useState } from "react";
import styled from "styled-components";

import BurgerButton from "./BurgerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <h2>
          Lateral
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="#h">Home</a>
          <a href="#h">Features</a>
          <a href="#h">Pricing</a>
          <a href="#h">Contact</a>
          <button className="Log"> Login </button>
          <button className="Log2"> Get Started </button>
        </div>
        <div className="burguer">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`

  h2 {
    color: #001001;
    font-weight: 400;
    margin-left: 3em;
  }
  padding: 0.4rem;
  z-index:1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }
  .Log{
        cursor: pointer;
        border: 1px solid #3498db;
        background-color: transparent;
        height: 30px;
        width: 90px;
        color: #3498db;
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
    border: 1px solid #fff;
    background-color: transparent;
    height: 30px;
    width: 90px;
    color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
    border-radius: 30px;
    margin-right: 1rem;
}
.Log2:active{
  background-color: #3498db;
  color: #fff;
}
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: #fff;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: #001001;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: #fff;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 00;
    left: 0;
    width: 100%;
    height: 390%;
  }
`;
