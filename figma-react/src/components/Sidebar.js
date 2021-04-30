import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Input from "./Input";

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Figma <span>Codes</span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim Password" />
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

const Terms = styled.p`

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #808080;

`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width:292px;
    height: 40px;
    border: none;
    background: #70EDB9;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    border-radius: 11px;



    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height */
    color: #FFFFFF;

    margin-top:8px;

    cursor: pointer;

    transition: all 0.2s ease-in;


  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */
    color: #FF8D8D;
  }
    span {
    color: #5dc399;
    font-weight: 300;
    font-size: 23px;
  }

  text-align: center;

`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(48px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
    padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

    h4{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        /* identical to box height */

        text-align: center;

        color: #808080;

        span {
          color: #ff8d8d;
        }
    }


`;

export default Sidebar;































