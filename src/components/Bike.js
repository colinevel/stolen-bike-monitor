import React from "react";
import styled from "styled-components";

const BikeItem = styled.div`
display: flex;
flex-direction row;
flex-wrap: wrap;
justify-content: start;
align-items: center;
border-radius: 10px;
margin: 3vh auto;
width: 100%;
min-height: 30vh;
box-shadow: 8px 8px 15px 1px rgba(0, 150, 136, .5);
`;

const BikeImg = styled.img`
max-width: 100vw;
height: 20vh;
margin-left: 2vw;
`;

const BikeInfos = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 60vw;
min-height: 20vh;
flex-direction: column;
justify-content: space-around;
text-align: left;
margin-left: 5vw;
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
        <p>Stolen on: {theftDate}</p>
        <p>Reported on: {reportedDate}</p>
      </BikeInfos>
    </BikeItem>
    </>
  );
}
