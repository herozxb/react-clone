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
    <SidebarContainer>
        <AvatarWrapper>
          <img src={avatar} alt="" />
          <h3>
            Xibo Zhang
          </h3>
        </AvatarWrapper>
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
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`

/* Positions */
  flex:1;
  display: flex;

  width: 90vw;
  height: 100%;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  position: relative;

/* Appearance */

  background: linear-gradient(107.68deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.06) 100%);
  opacity: 1;
  backdrop-filter: blur(100px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;

  @media (max-width: 400px) {
    width: 90vw;
    height: 100%;
    position: absolute;
    padding: 0;
  }

`;

const AvatarWrapper = styled.div`


    img {

    }

    margin-top:30px;

    cursor:pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-10px);
    }



    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 10px;

    color: rgba(5, 3, 74, 1); 

`;

const channelWrapper = styled.div`

`;

const Channel = styled.div`

/* Positions */
  display:flex;


  img {
    width:50px;
    height:50px;
  }



/* Appearance */
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





export default Sidebar;































