import React from "react";
import { useState, useEffect } from "react";

import data from "../data/data.json";
import Table from "../components/Table";
import Paginate from "../components/Paginate";

import { useDispatch } from "react-redux";
import { setPeople } from "../store/reducers/peopleReducer";

import "./styles/Home.scss";

const Home = () => {
  const [peopleData, setPeopleData] = useState(data); //storing data from json file to the state
  const [search, setSearch] = useState("");

  const peoplePerPage = 5; //configurable page size

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    //filtering data based on the input of the user and searching the query in all the properties
    const results = peopleData.filter(
      (person) =>
        person.Name.toLowerCase().includes(search.toLowerCase()) ||
        person.Position.toLowerCase().includes(search.toLowerCase()) ||
        person.Office.toLowerCase().includes(search.toLowerCase())
    );
    //dispatching the filtered result in the redux store as data to be shown in the table
    dispatch(setPeople(results));
  }, [peopleData, search]);

  return (
    <div className='home'>
      <input
        type='text'
        value={search}
        placeholder='Search'
        onChange={handleChange}
      />

      {/* peoplePerPage could also been set in redux store also but sending as a prop only here because it is not required */}
      <Table peoplePerPage={peoplePerPage} />
      <Paginate peoplePerPage={peoplePerPage} />
    </div>
  );
};
export default Home;
