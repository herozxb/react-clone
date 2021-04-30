import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.png";
import book from "../assets/book.png";
import football from "../assets/football.png";
import gamepad from "../assets/gamepad.png";
import steam from "../assets/steam.png";
import twitch from "../assets/twitch.png";
import Input from "./Input";

const Sidebar = () => {
  return (
    <Container>


    </Container>
  );
};

const Channel = styled.p`
  display: flex;
  margin-left: 100px;
  margin-top:20px;
  width:50px;
  height:50px;

  h3 {
      margin-left: 50px;
      margin-top: 10px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 30px;

      color: rgba(5, 3, 74, 0.8);

  }
`;

const Terms = styled.p`

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #808080;

`;


const LogoWrapper = styled.div`


    img {

    }

    margin-top:30px;
    text-align: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 10px;

    color: rgba(5, 3, 74, 1); 

`;

const Container = styled.div`
  min-width: 400px;




  background: linear-gradient(107.68deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);
  opacity: 0.6;
  backdrop-filter: blur(100px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }




`;

export default Sidebar;































