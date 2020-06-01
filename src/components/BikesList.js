import React, { useState, useEffect } from "react";
import axios from "axios";
import Bike from "./Bike";
import styled from "styled-components";
import Pagination from "./Pagination";
import FilterBar from "./FilterBar";
import NoResults from "./NoResults";
import Loading from "./Loading";

const BikesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default function BikesList(props) {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBikes, setFilteredBikes] = useState(bikes);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Display all bikes when the page first loads and when the dates are cleared
  useEffect(() => {
    if (startDate === null && endDate === null) {
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
    }
  }, [startDate, endDate]);

  // Handle change on search input
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Set the state for start date
  const handleStartDateChange = (date) => {
    return setStartDate(date);
  };

  // Set the state for end date
  const handleEndDateChange = (date) => {
    return setEndDate(date);
  };

  // Filter on bikes
  useEffect(() => {
    const results = bikes.filter((bike) =>
      bike.title.toLowerCase().match(searchTerm)
    );
    setFilteredBikes(results);
  }, [searchTerm, bikes]);

  // Search filter
  // const searchFilter = () => {
  //   const results = bikes.filter((bike) =>
  //     bike.title.toLowerCase().match(searchTerm)
  //   );
  //   setFilteredBikes(results);
  // }

  // Filter on dates
  const filterDates = () => {
    const unixStartDate = Date.parse(startDate) / 1000;
    const unixEndDate = Date.parse(endDate) / 1000;
    const results = bikes.filter(
      (bike) =>
        bike.occurred_at >= unixStartDate && bike.occurred_at <= unixEndDate
    );
    setFilteredBikes(results);
  };

  // const filteredBikes = () => {
  //   return bikes.filter(b => {
  //     if (searchTerm.length=== 0) {
  //       return filterDates();
  //     }
  //     if (startDate === null && endDate === null){
  //       return searchFilter();
  //     }
  //     else {

  //     }
  //   })

  // }

  // Get current bikes
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentBikes = filteredBikes.slice(indexOfFirstPost, indexOfLastPost);

  // Change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <FilterBar
        handleChange={handleChange}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        startDate={startDate}
        endDate={endDate}
        handleClick={filterDates}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <p
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "rgb(0, 150, 136)",
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            Total: {filteredBikes.length}
          </p>
          <BikesContainer>
            {currentBikes.length === 0 ? (
              <NoResults />
            ) : (
              currentBikes.map((bike) => {
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
              })
            )}
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
