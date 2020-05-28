import React from 'react';
import styled from "styled-components";

const Input = styled.input`
    width: 30vw;
    height: 3vh;
    border-radius: 10px;
    outline: none;
    margin-right: 5vw;
    border: 2px solid grey;
    padding: 2px 10px 2px 10px;
    background-color: #f5f5f5;
    &:hover, :focus{
        border: 1.5px solid #009688;
        background-color: white;
    }
`;


const SearchBar = (props) => {

    return (
        <div>
            <Input onChange={props.handleChange} type="text" placeholder="Search by case title" />
        </div>
    )
}

export default SearchBar;
