
const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-description">{title}</h2>
        <p className="card-description">price : ${description}</p>
      </div>
    </div>
  );
};

export default Card;
