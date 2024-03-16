const RestaurantButton = ({ orderOne ,orderType}) => {
    return (
      <button data-testid="button" className="button restaurant__button" onClick={orderOne}>
        Add {orderType}
      </button>
    );
  };
  
  export default RestaurantButton;