import React from "react";
import styled from "styled-components";
import search from "../assets/search.png";
import Spiderman from "../assets/Spiderman.png";
import Ironman from "../assets/Ironman.png";
import Transformer from "../assets/Transformer.png";

const Main = () => {
  return (
    <MainContainer>
      <h1>
        Active Games
      </h1>
      <SearchWrapper>
        <SearchBar/>
        <img src={search} alt="" />
      </SearchWrapper>

      <CardWrapper>
        <img src={Transformer} alt="" />
        <TextWrapper>
            <h2>Transformer - Age of Extinction</h2>
            <h3>PS5 Station</h3>
        </TextWrapper>
      </CardWrapper>

      <CardWrapper>
        <img src={Spiderman} alt="" />
        <TextWrapper>
            <h2>Spider Man - Miles Morales</h2>
            <h3>PS5 Station</h3>
        </TextWrapper>
      </CardWrapper>

      <CardWrapper>
        <img src={Ironman} alt="" />
        <TextWrapper>
            <h2>Iron Man - Armor War I</h2>
            <h3>PS5 Station</h3>
        </TextWrapper>
      </CardWrapper>
      
    </MainContainer>
  );
};

const MainContainer = styled.div`

  flex:2;


  margin-left:50px;
  margin-right:50px;

  @media (max-width: 1000px) {
      display: none;
    }


  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: rgba(5, 3, 74, 0.6);

  }

`;

const SearchWrapper = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:20px;

  img  {
    margin-left: 20px;
    cursor:pointer;
  }
`;

const SearchBar = styled.input`

    width:42vw;
    height:50px;

    background: linear-gradient(107.68deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 1;
    backdrop-filter: blur(0px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;
    outline: none;
    padding-left: 20px;

    border: solid;
    border: 0.2rem solid white;
`;



const CardWrapper = styled.div`

    width:50vw;
    height:110px;
    margin-bottom:30px;

    display:flex;

    background: linear-gradient(91.03deg, rgba(255, 255, 255, 1) 0%, rgba(190, 232, 255, 1) 48.44%, rgba(255, 255, 255, 1) 100%);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    cursor:pointer;
    transition: all 0.2s ease-in;
    &:hover {
        transform: translateY(-5px);
    }

    img {

      margin : 8px;


    }

    h2 {
      margin-top : 15px;
      margin-left : 10px;




        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;

        color: rgba(5, 3, 74, 0.6);
    }

    h3 {
        margin-left : 10px;


        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
        /* identical to box height */


        color: rgba(5, 3, 74, 0.6);
    }
`;


const TextWrapper = styled.div`


`;


export default Main;
