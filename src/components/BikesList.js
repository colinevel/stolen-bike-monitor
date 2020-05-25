import React, { useState, useEffect } from 'react'
import axios from "axios";
import Bike from "./Bike";
import styled from 'styled-components';


export default function BikesList(props) {

    

const [bikes, setBikes] = useState([]);

    useEffect(() => {
        axios.get("https://bikewise.org:443/api/v2/incidents?per_page=10&proximity=berlin&proximity_square=100")
        .then(res => {
            console.log(res.data.incidents)
            const incidents = res.data.incidents;
            setBikes(incidents);
          })
    }, [])

    return (
        <div>
            <ul>
               {bikes.map((bike) => {
                   return <Bike
                    key={bike.id}
                    title={bike.title}
                    description={bike.description}
                    image={bike.media.image_url_thumb}
                    address = {bike.address}
                    theftDate={bike.occurred_at}
                    reportedDate={bike.updated_at}
                    />
               })} 
            </ul>
        </div>
    )
}
