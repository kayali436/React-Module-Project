import React, { useState, useEffect } from 'react';
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";

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

  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    setBookings(
      FakeBookings.filter((item) =>
        item.firstName.toLowerCase().includes(searchVal)
      )
    );
  };

  return (
    <main className="bookings">
      <div>
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Data: {JSON.stringify(data)}</p>
        )}
      </div>
      <Search search={search} />
      <SearchResults results={bookings} />
    </main>
  );
};

export default Bookings;

