import React from 'react';
import styled from "styled-components";

const Input = styled.input`
    width: 30vw;
    height: 3vh;
    border-radius: 10px;
    outline: none;
`;


const SearchBar = (props) => {

    return (
        <div>
            <Input onChange={props.handleChange} type="text" placeholder="Search case description" />
        </div>
    )
}

export default SearchBar;
