import React from "react";
import ResultsTable from "@/components/ResultsTable/ResultsTable.jsx";
import dayjs from "dayjs"; 

const SearchResults = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Sur Name</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(
          (
            {
              id,
              title,
              firstName,
              surName,
              email,
              roomId,
              checkInDate,
              checkOutDate,
            },
            index
          ) => (
            <ResultsTable
              key={index}
              id={id}
              title={title}
              firstName={firstName}
              surName={surName}
              email={email}
              roomId={roomId}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              nights={dayjs(checkOutDate).diff(checkInDate, 'day')}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default SearchResults;
