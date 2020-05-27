import React from "react";
import styled from "styled-components";

const BikeItem = styled.div`
display: flex;
flex-direction row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
border: 1px solid black;
border-radius: 10px;
margin: 3vh auto;
width: 90vw;
min-height: 30vh;
`;

const BikeImg = styled.img`
max-width: 100vw;
height: 20vh;
margin-left: 2vw;
`;

const BikeInfos = styled.div`
width: 70vw;
height: 30vh;
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
`;

export default function Bike(props) {

  const transformDate = (date) => {
    return new Date(date * 1000).toLocaleString("en-FR", {weekday: "short", year: "numeric", month: "long", day:"numeric"});
  };
  const theftDate = transformDate(props.theftDate);
  const reportedDate = transformDate(props.reportedDate);

  return (
    <>
    <BikeItem>
      <BikeImg src={props.image} alt="bike" />
      <BikeInfos>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.address}</p>
        <p>Date of Theft: {theftDate}</p>
        <p>Date of reported Theft: {reportedDate}</p>
      </BikeInfos>
    </BikeItem>
    </>
  );
}
