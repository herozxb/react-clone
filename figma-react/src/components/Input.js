import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autocomplete="off"
      />
      <Status />
    </Container>
  );
};

const StyledInput = styled.input`
  width: 260px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;

  background: #F5F5F5;
  box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
  border-radius: 11px;

  padding: 0 1rem;
  transition: all 0.2s ease-in;
  transform: translateX(13px);

  &:hover {
    transform: translateY(-3px);
  }

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Status = styled.div`


height: 10px;
width: 10px;
background: #9d9d9d;
border-radius: 10px;
margin-left: 1rem;

transform: translateX(13px);

${StyledInput}:focus + & {
  background: #ffa689;
}
${StyledInput}:invalid + & {
  background: #fe2f75;
}
${StyledInput}:valid + & {
  background: #70edb9;
}

`;

export default Input;






























































