import React, { useState, useEffect } from 'react';
import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState({
    firstName: "",
    surname: "",
    email: "",
    title: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const capitalizeFirstChar = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleInputChange = (e, fieldName) => {
    const updatedValue = capitalizeFirstChar(e.target.value);
    setNewBooking({ ...newBooking, [fieldName]: updatedValue });
  };

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

   

    // Log text when the component first renders
    console.log("Component has rendered!");
  }, []);

  const search = (searchVal) => {
    setBookings(
      FakeBookings.filter((item) =>
        item.firstName.toLowerCase().includes(searchVal)
      )
    );
  };

  const bookingSubmit = (e) => {
    e.preventDefault();
    // Check if the room ID is already booked
    const isRoomAlreadyBooked = bookings.some(
      (booking) => booking.roomId === newBooking.roomId
    );

    if (isRoomAlreadyBooked) {
      alert("This room is already booked. Please choose another room.");
      return; // Prevent further execution if the room is already booked
    }
    // Check if any of the required fields are empty
    const requiredFields = [
      "firstName",
      "surname",
      "email",
      "roomId",
      "checkInDate",
      "checkOutDate",
    ];
    if (requiredFields.some((field) => !newBooking[field])) {
      alert("Please fill in all required fields.");
      return;
    }
    // Generate a unique id for the new booking
    const newId = Math.max(...bookings.map((booking) => booking.id), 0) + 1;

    // Create the new booking with the generated id
    const newBookingWithId = { ...newBooking, id: newId };

    // Update the bookings state with the new booking
    setBookings([...bookings, newBookingWithId]);

    // Clear the form and close the modal
    setNewBooking({
      firstName: "",
      surname: "",
      email: "",
      title: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
    closeModal();
  };

  return (
    <>
      <main className="bookings">
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <Search search={search} />
            <section className="content">
              <SearchResults results={bookings} />
            </section>
            <button className="open-modal-button" onClick={openModal}>
              Book new customer
            </button>

            {isModalOpen && (
              <div className="modal-overlay">
                <h3 className="add_customer">Add new Customer</h3>
                <div className="modal-content">
                  <div className="container">
                    <form onSubmit={bookingSubmit} className="form_column">
                      {/* Form inputs */}
                      <button className="submit_button" type="submit">
                        Confirm booking
                      </button>
                    </form>
                    <img className="form_img" src="/src/assets/spa-logo.png" alt="SPA Logo" />
                  </div>
                </div>
                <button className="close-modal-button" onClick={closeModal}>
                  x
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Bookings;


  );
};

export default Bookings;

