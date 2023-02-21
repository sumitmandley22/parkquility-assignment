import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../store/reducers/peopleReducer";

import nextpage from "../assets/images/next.png";
import previouspage from "../assets/images/previous.png";
import lastpage from "../assets/images/lastpage.png";
import firstpage from "../assets/images/firstpage.png";

import "./styles/Paginate.scss";

const Paginate = ({ peoplePerPage }) => {
  //fetching data from the store of people and page to show page number
  const listofPeople = useSelector((state) => state.people.people);
  const page = useSelector((state) => state.people.page);

  const dispatch = useDispatch();

  const totalPages = new Array(
    Math.ceil(listofPeople.length / peoplePerPage)
  ).fill(); //creating array of totalnumber of pages

  //handler functions which will dispatch actions to set the current page number from the previous or next button
  const handlePrevious = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };
  const handleNext = () => {
    if (page < totalPages.length) dispatch(setPage(page + 1));
  };

  return (
    <>
      {listofPeople.length ? (
        <div className='pagination'>
          <button onClick={() => dispatch(setPage(1))}>
            <img src={firstpage} />
          </button>

          <button onClick={handlePrevious}>
            <img src={previouspage} />
          </button>
          {/* creating button equal to the number of pages to be displayer */}

          {totalPages.map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "page__selected" : ""}
              onClick={() => dispatch(setPage(i + 1))}
            >
              {i + 1}
            </button>
          ))}

          <button onClick={handleNext}>
            <img src={nextpage} />
          </button>

          <button onClick={() => dispatch(setPage(totalPages.length))}>
            <img src={lastpage} />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Paginate;
