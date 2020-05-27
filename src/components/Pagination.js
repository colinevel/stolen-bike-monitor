import React from "react";
import styled from "styled-components";


const PaginationContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const NumberLi = styled.li`
    margin: 3px;
`;

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalBikes / props.bikesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationContainer>
        {/* <li>
            <a onClick={() => props.paginate(1)} href={1}>First Page</a>
        </li> */}
        {pageNumbers.map((number) => (
          <NumberLi key={number}>
            <a onClick={() => props.paginate(number)} href="!#">
              {number}
            </a>
          </NumberLi>
        ))}
        {/* <li>
            <a href={5}>Last Page</a>
        </li> */}
      </PaginationContainer>
    </nav>
  );
};

export default Pagination;
