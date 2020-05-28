import React from 'react';
import SearchBar from "./SearchBar";
import Calendar from "./Calendar";

const FilterBar = (props) => {
    return (
        <div>
            <SearchBar handleChange = {props.handleChange} />
            <Calendar 
             handleStartDateChange={props.handleStartDateChange}
             startDate={props.startDate}
             handleEndDateChange={props.handleEndDateChange}
             endDate={props.endDate}
            />
            <button onClick={props.handleClick}>Find cases</button>
        </div>
    )
}

export default FilterBar;
