import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResult/SearchResults.jsx";
import data from "@/data/fakeBookings.json";
import { useState } from "react";
//let filtered = data;

const Bookings = () => {
  const [filtered, setFiltered] = useState(data);

  const search = (searchVal) => {
    setFiltered(
      data.filter((item) => item.firstName.toLowerCase().includes(searchVal))
    );
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults data={filtered} />
    </main>
  );
};

export default Bookings;
