import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import "./pagination.css";

const PaginationContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NumberLi = styled.li`
  margin: auto 10px;
`;

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalBikes / props.bikesPerPage); i++) {
    pageNumbers.push(i);
  }

  // pagination buttons conditions
  let prevStyles, nextStyles;
  props.currentPage === 1? prevStyles = "navItem-Prev hidden" : prevStyles = "navItem-Prev";
  props.currentPage === pageNumbers.length? nextStyles = "navItem-Next hidden" : nextStyles = "navItem-Next";


  return (

    <nav>
      <PaginationContainer>
      <Link
          className={prevStyles}
          exact
          to={`/index/1`}
          onClick={() => props.paginate(1)}
        >
          First
        </Link>
        <Link
          className={prevStyles}
          exact
          to={`/index/${props.currentPage - 1}`}
          onClick={() => props.paginate(props.currentPage - 1)}
        >
          Prev
        </Link>
        {pageNumbers.map((number) => (
          <NumberLi key={number}>
            <NavLink
              exact
              to={`/index/${number}`}
              onClick={() => props.paginate(number)}
            >
              {number}
            </NavLink>
          </NumberLi>
        ))}
        <Link
          className={nextStyles}
          exact
          to={`/index/${props.currentPage + 1}`}
          onClick={() => props.paginate(props.currentPage + 1)}
        >
          Next
        </Link>
        <Link
          className={nextStyles}
          exact
          to={`/index/${pageNumbers.length}`}
          onClick={() => props.paginate(pageNumbers.length)}
        >
          Last
        </Link>
      </PaginationContainer>
    </nav>
  );
};

export default Pagination;
