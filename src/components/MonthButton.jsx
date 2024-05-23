import React, { useState } from 'react'
import styled from 'styled-components'

const StyleMonthButton = styled.button`
  background-color: ${props => props.hovered ? "#63eadd" : "#ffffffcc"};
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100px;
  margin: 20px;

`

const MonthButton = ({month}) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div>
      <StyleMonthButton
       onMouseEnter={() => {
        setHovered(true);
       }}
       onMouseLeave={() => {
        setHovered(false);
       }}
       hovered = {hovered}
      >
        {month}
      </StyleMonthButton>
    </div>
  )
}

export default MonthButton