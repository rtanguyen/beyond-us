import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import DatePicker from "react-datepicker";

import { QUERY_POSTS_BASIC } from "../utils/queries";

import { dateFormat } from "../utils/dateFormat";
// const dateFormat = require('../utils/dateFormat');

const FilterPosts = ({ filters, setFilters }) => {
  const { location, postType, endDate } = filters;
  const { data } = useQuery(QUERY_POSTS_BASIC);
  // const locations = locationData?.posts.location || [];
  const posts = data?.posts || [];
  const set = new Set(posts.map((post) => post.location));
  const locationArr = Array.from(set);
  console.log(filters);
  // let postType;
  // let endDate;
  // let location;

  //update dropdown text
  const [filterValue, setFilterValue] = useState({
    location: "",
    postType: "",
    endDate: "",
  });

  // const handleFilter = (event) => {
  // 	setFilters({
  // 		if()
  // 	});
  // };

  const handlePostTypeChange = (event) => {
    console.log(event.target.textContent);
    setFilters({
      ...filters,
      postType: event.target.textContent,
    });
    setFilterValue({
      ...filterValue,
      postType: event.target.textContent,
    });
  };

  const handleLocationChange = (event) => {
    console.log(event.target.textContent);
    setFilters({
      ...filters,
      location: event.target.textContent,
    });
    setFilterValue({
      ...filterValue,
      location: event.target.textContent,
    });
  };

  const handleDateChange = (date) => {
    setFilters({
      // ...newPost,
      endDate: dateFormat(date),
    });
    setFilterValue({
      endDate: dateFormat(date),
    });
  };

  const handleClearFilter = (event) => {
    setFilterValue({
      location: "",
      postType: "",
      endDate: "",
    });
  };
  return (
    <form>
      <h3 className="causes text-center fw-bolder">Filter Posts</h3>
      <hr />
      <div className="dropdown mb-3 addPost">
        <button
          className="btn btn-outline-dark btn-med dropdown-toggle dropdown_filter"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          value={filterValue.postType}
        >
          {filterValue.postType || "Post Type"}
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          onClick={handlePostTypeChange}
        >
          <li>
            <button
              type="button"
              className="dropdown-item"
              name="General"
              value="General"
            >
              General
            </button>
          </li>
          <li>
            <a className="dropdown-item">Donate</a>
          </li>
          <li>
            <a className="dropdown-item">Volunteer</a>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <div className="dropdown mb-3 addPost">
          <button
            className="btn btn-outline-dark btn-med dropdown-toggle dropdown_filter"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            value={filterValue.location}
          >
            {filterValue.location || "Location"}
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            onClick={handleLocationChange}
          >
            {locationArr.map((location) => (
              <li>
                <button
                  key={location}
                  type="button"
                  className="dropdown-item"
                  name={location}
                  value={location}
                >
                  {location}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="mb-3 datepicker_main">
        Event Date
        <DatePicker
          selected={filterValue.endDate}
          onChange={handleDateChange}
        />
      </div> */}
      <div className="text-center">
        {/* <button className="btn btn-danger mx-auto" onSubmit={handleFilter}>
					Filter
				</button> */}
        <button className="btn btn-danger mx-auto" onClick={handleClearFilter}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default FilterPosts;
