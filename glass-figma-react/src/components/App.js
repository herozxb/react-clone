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
    <Container>
      <Wrapper>
        <Card>
          <Sidebar />
        </Card>
        <Main />
      <LogoWrapper>
        <img src={avatar} alt="" />
        <h3>
          Xibo Zhang
        </h3>
        <channelWrapper>
          <Channel>
            <img src={twitch} alt="" />
            <h3>
              Twitch
            </h3>
          </Channel>
          <Channel>
            <img src={steam} alt="" />
            <h3>
              Steam
            </h3>
          </Channel>
          <Channel>
            <img src={football} alt="" />
            <h3>
              Football
            </h3>
          </Channel>
          <Channel>
            <img src={gamepad} alt="" />
            <h3>
              Gamepad
            </h3>
          </Channel>
          <Channel>
            <img src={book} alt="" />
            <h3>
              Library
            </h3>  
          </Channel>
        </channelWrapper>
      </LogoWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
    position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

`;
const Wrapper = styled.div`

  	background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	display: flex;


`;

const Card = styled.div`

  margin-left:150px;
  margin-top:25px;
  width: 80%;
  height: 90%;
  display: flex;


  background: linear-gradient(107.68deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);
  opacity: 0.6;
  backdrop-filter: blur(100px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  border: 0.2rem solid white;




`;

const channelWrapper = styled.div`


`;


const Channel = styled.p`
  display: flex;
  margin-left: -50px;
  margin-top:0px;
  width:50px;
  height:50px;

  cursor:pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateX(-10px);
  }



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




const LogoWrapper = styled.div`

    margin-left:280px;
    position: absolute;
    z-index: 100;

    img {

    }

    margin-top:70px;
    text-align: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 10px;

    color: rgba(5, 3, 74, 1); 

`;




export default App;






































