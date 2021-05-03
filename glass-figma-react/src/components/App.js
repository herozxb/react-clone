import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";
import Sidebar from "./Sidebar";
import Main from "./Main";

import avatar from "../assets/avatar.png";
import book from "../assets/book.png";
import football from "../assets/football.png";
import gamepad from "../assets/gamepad.png";
import steam from "../assets/steam.png";
import twitch from "../assets/twitch.png";

const App = () => {
  return (
    <AppContainer>
      <AppWrapper>
        <Glass>
          <Sidebar />
          <Main />
        </Glass>
      </AppWrapper>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  overflow-x: hidden;



`;
const AppWrapper = styled.div`

  	background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
	width: 100%;
	height: 100%;
  min-height: 100%;
	display: flex;
  align-items: center;
  justify-content: center;


`;

const Glass = styled.div`

  display: flex;
  height: 90%;
  width: 90vw;


  background: linear-gradient(107.68deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);
  opacity: 0.9;
  backdrop-filter: blur(100px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  border: 0.2rem solid white;




`;





export default App;






































