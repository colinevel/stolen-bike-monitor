import React from "react";

export default function Bike(props) {

  const transformDate = (date) => {
    return new Date(date * 1000).toLocaleString();
  };
  const theftDate = transformDate(props.theftDate);
  const reportedDate = transformDate(props.reportedDate);

  return (
    <div>
      <img src={props.image} alt="bike" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.address}</p>
        <p>Date of Theft: {theftDate}</p>
        <p>Date of reported Theft: {reportedDate}</p>
      </div>
    </div>
  );
}
