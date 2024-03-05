import Search from "@/components/Search/Search";
// import SearchResults from "@/componentsSearchResults.js";
// import FakeBookings from "@/data/fakeBookings.json";

import React, { useState, useEffect } from 'react';

const Bookings = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cyf-react.glitch.me/error');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError('Error fetching data from the server');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Data: {JSON.stringify(data)}</p>
      )}
    </div>
  );
};

export default Bookings;

