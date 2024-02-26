import "./Card.scss";

const Card = (props) => {
   
  return (
    <>
      <a href={props.url}>
        <h2>{props.title}</h2>
      <img src={props.image} alt="" />
      </a>
    </>
  );
};

export default Card;
