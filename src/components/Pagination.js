import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./pagination.css";


const PaginationContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const NumberLi = styled.li`
    margin: auto 10px;
`;

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalBikes / props.bikesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationContainer>
        {pageNumbers.map((number) => (
          <NumberLi
          key={number}>
            <NavLink exact to={`/index/${number}`} onClick={() => props.paginate(number)}>{number}</NavLink>
          </NumberLi>
        ))}
      </PaginationContainer>
    </nav>
  );
};

export default Pagination;
