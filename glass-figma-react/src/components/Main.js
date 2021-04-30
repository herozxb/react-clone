import React from "react";
import styled from "styled-components";
import search from "../assets/search.png";
import Spiderman from "../assets/Spiderman.png";
import Ironman from "../assets/Ironman.png";
import Transformer from "../assets/Transformer.png";

const Main = () => {
  return (
    <Container>
      <h1>
        Active Games
      </h1>
      <WrapperSearch>
        <SearchBar/>
        <img src={search} alt="" />
      </WrapperSearch>
      <WrapperCard>
        <img src={Transformer} alt="" />
        <WrapperText>
            <h2>Transformer - Age of Extinction</h2>
            <h3>PS5 Station</h3>
        </WrapperText>
      </WrapperCard>
      <WrapperCard>
        <img src={Spiderman} alt="" />
        <WrapperText>
            <h2>Spider Man - Miles Morales</h2>
            <h3>PS5 Station</h3>
        </WrapperText>
      </WrapperCard>
      <WrapperCard>
        <img src={Ironman} alt="" />
        <WrapperText>
            <h2>Iron Man - Armor War I</h2>
            <h3>PS5 Station</h3>
        </WrapperText>
      </WrapperCard>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;


  margin-left:620px;
  margin-top:20px;
  position: absolute;
  z-index: 100;


  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;

    color: rgba(5, 3, 74, 0.6);

	@media (max-width: 900px) {
      display: none;
    }
  }

`;

const SearchBar = styled.div`
    position: relative;
    width: 38%;
    height: 38px;


    background: linear-gradient(107.68deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%);
    opacity: 1;
    backdrop-filter: blur(0px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;

    border: solid;
    border: 0.2rem solid white;
`;

const WrapperSearch = styled.div`
  display:flex;
  img {
    height:38px;
    margin-left:20px;
  }
`;

const WrapperCard = styled.div`

    display:flex;
    position: relative;
    width: 40%;
    height: 120px;

    margin-top:20px;

    background: linear-gradient(91.03deg, rgba(255, 255, 255, 1) 0%, rgba(190, 232, 255, 1) 48.44%, rgba(255, 255, 255, 1) 100%);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;

    img {
      margin-top:12px;
      margin-left:12px;
      height: 80%;

    }

    h2 {
        margin-left:30px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;

        color: rgba(5, 3, 74, 0.6);
    }

    h3 {

        margin-left:30px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 15px;
        /* identical to box height */


        color: rgba(5, 3, 74, 0.6);
    }
`;


const WrapperText = styled.div`
  display:flex;
  flex-direction:column

`;


export default Main;
