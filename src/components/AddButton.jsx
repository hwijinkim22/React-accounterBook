import React, { useContext, useState } from "react";
import styled from "styled-components";
import { EveryContext } from "./context/EveryContext";

const ButtonStyle = styled.button`
  background-color: #75c3ff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 20px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  display: flex;

  &:hover {
    background-color: #5aabff;
  }
`;

const AddButton = () => {
  const {children, type, onClick} = useContext(EveryContext);
  return (
    <div>
      <ButtonStyle
      type={type}
      onClick={onClick}
      >{children}</ButtonStyle>
    </div>
  );
};

export default AddButton;
