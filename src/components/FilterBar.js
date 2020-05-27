import React from 'react';
import SearchBar from "./SearchBar";

const FilterBar = (props) => {
    return (
        <div>
            <SearchBar handleChange = {props.handleChange} />
        </div>
    )
}

export default FilterBar;
