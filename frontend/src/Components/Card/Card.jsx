import './Card.css';

const Card = ({ name, price, className }) => {
  return (
    <div className={className}>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
};

export default Card;
