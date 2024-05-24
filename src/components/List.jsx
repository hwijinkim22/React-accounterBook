import React from 'react';
import styled from 'styled-components'; 

const StyledListContainer = styled.div`
  background-color: #cae6fb;
  padding: 40px;
  width: 78.5%;
  height: 300px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  margin: 30px auto 30px auto;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  background-color: green;

`;

const List = ({ filterList }) => {
  return (
    <StyledListContainer>
      <StyledList>
        {filterList.map(filter => (
          <ListItem
            onClick={() => {
              
            }} 
            key={filter.id}>
            {filter.item} - {filter.detail}, {filter.price}, {filter.date}
          </ListItem>
        ))}
      </StyledList>
    </StyledListContainer>
  );
};

export default List;
