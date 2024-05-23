import React, { useState } from "react"
import styled from "styled-components"

const ButtonStyle = styled.button`
    background-color: #75c3ff;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 20px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #5aabff;
  }
`;


const AddButton = () => {
  return (
    <div>
        <ButtonStyle> 
            등록
        </ButtonStyle>
    </div>
  )
}

export default AddButton;