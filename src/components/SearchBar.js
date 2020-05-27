import React, { useState} from 'react';

const SearchBar = (props) => {

    return (
        <div>
            <input onChange={props.handleChange} />
        </div>
    )
}

export default SearchBar;
