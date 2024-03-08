import Order from "../Order/Order";

const Restaurant = () => {
  return (
    <section className="restaurant">
      <h3 className="restaurant__heading">Restaurant Orders</h3>
      <ul className="restaurant__list">
        <Order orderType={"Pizza"}/>
        <Order orderType={"Salad"}/>
        <Order orderType={"Dessert"}/>
      </ul>
    </section>
  );
};

export default Restaurant;
