import Search from "@/components/Search/Search";
import SearchResults from "@/components/SearchResults/SearchResults.jsx";
import FakeBookings from "@/data/fakeBookings.json";
import { useState, useEffect } from "react";
import "./Bookings.scss";


const Bookings = () => {
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
    setBookings(FakeBookings);
    // Fetch data when the component mounts
    // fetch("https://cyf-react.glitch.me").then((res)=>{res.json()}).then((data)=>{
    //   console.log(data);
    //   setBookings(data)
    // })
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://cyf-react.glitch.me");//,{ mode: 'no-cors'});
    //     const data = await response.json();
    //     setBookings(data);
    //     console.log("Fetched bookings data:", data);
    //   } catch (error) {
    //     console.error("Error fetching bookings data:", error);
    //   }
    // };
    //  fetchData();
    // Log text when the component first renders
    console.log("Component has rendered!");
  }, []); // Empty dependency array means this effect runs only once on mount

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
        <Search search={search} />
        <section className="content">
          <SearchResults results={bookings} />
        </section>
        <button className="open-modal-button" onClick={openModal}>
          Book new costumer
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <h3 className="add_customer">Add new Customer</h3>
            <div className="modal-content">
              <div className="container">
                <form onSubmit={bookingSubmit} className="form_column">
                  <label className="form-input">
                    <span className="form-label">Title:</span>
                    <input
                      className="form-field"
                      type="text"
                      name="title"
                      value={newBooking.title}
                      onChange={(e) => handleInputChange(e, "title")}
                    />
                  </label>
                  <label className="form-input">
                    <span className="form-label">First Name:</span>
                    <input
                      className="form-field"
                      type="text"
                      name="firstName"
                      value={newBooking.firstName}
                      onChange={(e) => handleInputChange(e, "firstName")}
                    />
                  </label>
                  <label className="form-input">
                    <span className="form-label">Surname:</span>
                    <input
                      className="form-field"
                      type="text"
                      name="surname"
                      value={newBooking.surname}
                      onChange={(e) => handleInputChange(e, "surname")}
                    />
                  </label>
                  <label className="form-input">
                    <span className="form-label">Email:</span>
                    <input
                      className="form-field"
                      type="text"
                      name="email"
                      value={newBooking.email}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                  </label>
                  <label className="form-input">
                    <span className="form-label">Room ID:</span>
                    <input
                      className="form-field"
                      type="text"
                      name="roomId"
                      value={newBooking.roomId}
                      onChange={(e) => handleInputChange(e, "roomId")}
                    />
                  </label>
                  <label className="form-input">
                    <span className="form-label">Check In Date:</span>
                    <input
                      className="form-field"
                      type="date"
                      name="checkInDate"
                      value={newBooking.checkInDate}
                      onChange={(e) => handleInputChange(e, "checkInDate")}
                    />
                  </label>
                  <label className="form-input">
                    <span className="form-label">Check Out Date:</span>
                    <input
                      className="form-field"
                      type="date"
                      name="checkOutDate"
                      value={newBooking.checkOutDate}
                      onChange={(e) => handleInputChange(e, "checkOutDate")}
                    />
                  </label>
                  <button className="submit_button" type="submit">
                    Confirm booking
                  </button>
                </form>
                <img class="form_img" src="/src/assets/spa-logo.png"></img>
              </div>
            </div>

            <button className="close-modal-button" onClick={closeModal}>
              x
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Bookings;
