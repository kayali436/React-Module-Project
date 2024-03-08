import { useState } from "react";

const Order = (props) => {
  const [order, setOrder] = useState(0);

  function orderOne() {
    return setOrder(order + 1);
  }
  return (
    <li className="restaurant__item">
      {props.orderType}: {order}{" "}
      <button className="button restaurant__button" onClick={orderOne}>
        Add
      </button>
    </li>
  );
};

export default Order;
