import React from 'react';
import SearchBar from "./SearchBar";
import Calendar from "./Calendar";
import "./filterBar.css";
import styled from "styled-components";

const Button = styled.button`
    margin-left: 1vw;
    padding: 1vh 2vw;
    border: 1px solid rgb(0, 150, 136);
    border-radius: 4px;
    color: grey;
    background-color: white;
    transition: all 0.3s;
    &:hover{
        background-color: rgb(0, 150, 136);
        color: white;
        cursor: pointer;
    }
`;


const FilterBar = (props) => {
    return (
        <div className="filterBox">
            <SearchBar handleChange = {props.handleChange} />
            <Calendar 
             handleStartDateChange={props.handleStartDateChange}
             startDate={props.startDate}
             handleEndDateChange={props.handleEndDateChange}
             endDate={props.endDate}
            />
            <Button onClick={props.handleClick}>Find cases by dates</Button>
        </div>
    )
}

export default FilterBar;


