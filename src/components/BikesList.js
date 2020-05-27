import React, { useState, useEffect } from "react";
import axios from "axios";
import Bike from "./Bike";
import styled from "styled-components";
import Pagination from "./Pagination";
import FilterBar from "./FilterBar";

const BikesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto 4vw;
  `;

export default function BikesList(props) {

  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBikes, setFilteredBikes] = useState(bikes);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://bikewise.org:443/api/v2/incidents?&proximity=berlin&proximity_square=100`
      )
      .then((res) => {
        console.log(res.data.incidents);
        setBikes(res.data.incidents);
        setLoading(false);
      });
  }, []);

  // Filter on search
  const handleChange = e => {
      setSearchTerm(e.target.value);
  }

  // Filter on bikes
  useEffect(() => {
    const results = bikes.filter((bike) =>
      bike.title.toLowerCase().match(searchTerm)
    );
    setFilteredBikes(results);
  }, [searchTerm, bikes]);

  // Get current posts
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentBikes = filteredBikes.slice(indexOfFirstPost, indexOfLastPost);

  // Change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <p>Total: {filteredBikes.length}</p>
          <FilterBar handleChange = {handleChange}/>
          <BikesContainer>
            {currentBikes.map((bike) => {
              return (
                <Bike
                  key={bike.id}
                  title={bike.title}
                  description={bike.description}
                  image={bike.media.image_url_thumb}
                  address={bike.address}
                  theftDate={bike.occurred_at}
                  reportedDate={bike.updated_at}
                />
              );
            })}
          </BikesContainer>
          <Pagination
            totalBikes={filteredBikes.length}
            bikesPerPage={10}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
}
