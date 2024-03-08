import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResult/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";
import { useState } from "react";
import Restaurant from "../Restaurant/Restaurant";
import { useEffect } from "react";
// let data;

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me")
  //     .then((response) => response.json())

  //     .then((res) => setBookings(res));
  // }, []);

  const search = (searchVal) => {
    setBookings(
      FakeBookings.filter((item) =>
        item.firstName.toLowerCase().includes(searchVal)
      )
    );
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResults data={bookings} />
      <Restaurant />
    </main>
  );
};

export default Bookings;
