import React from "react";
import { useSelector } from "react-redux";
import "./styles/Table.scss";

const Table = ({ peoplePerPage }) => {
  //subscribing to the store to get the latest data from the store
  const listofPeople = useSelector((state) => state.people.people);
  const page = useSelector((state) => state.people.page);

  return (
    <>
      {listofPeople.length ? (
        <div className='table'>
          <div className='table-header'>
            <div className='table-header__title'>Name</div>
            <div className='table-header__title'>Position</div>
            <div className='table-header__title'>Office</div>
          </div>
          <div className='table-content'>
            {/* looping through the data that we receiving from the store and slicing them according to the page size */}
            {listofPeople
              .slice((page - 1) * peoplePerPage, page * peoplePerPage)
              .map((person, index) => (
                <div className='table-row' key={index}>
                  <div className='table-row__content'>
                    <div className='mobile-title'>Name</div> {person["Name"]}
                  </div>
                  <div className='table-row__content'>
                    {" "}
                    <div className='mobile-title'>Position</div>
                    {person["Position"]}
                  </div>

                  <div className='table-row__content'>
                    {" "}
                    <div className='mobile-title'>Office</div>
                    {person["Office"]}
                  </div>
                </div>
              ))}{" "}
          </div>
        </div>
      ) : (
        <div className='table' style={{ color: "#ffffff" }}>
          No Results Found
        </div>
      )}
    </>
  );
};
export default Table;
