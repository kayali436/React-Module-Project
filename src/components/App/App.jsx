import Bookings from "@/components/Bookings/Bookings.jsx";
import "./App.scss";
import AppHeader from "../AppHeader/AppHeader";
import Card from "../Card/Card";
import data from "@/data/fakeCards.json"

const App = () => (
  <div className="app">
    <AppHeader />

  <section className="app__cards">
  {data.map((card, index )=> (
      <Card key={index} title={card.title} url={card.url} image={card.image} />
     ) )}
  </section>
    <Bookings />


  </div>
);

export default App;
