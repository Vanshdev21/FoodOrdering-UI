const ResturantCard = ({ restaurantData }) => (
  <div className="resturant-card">
    <img
      className="resturant-image"
      src={restaurantData.image}
      alt={restaurantData.name}
    />
    <div className="resturant-card-body">
      <h3>{restaurantData.name}</h3>
      <h4>{restaurantData.cuisine}</h4>
      <div className="data-of-resturant">
        <span className="rating">{restaurantData.rating}</span>
        <ul>
          <li>{restaurantData.deliveryTime}</li>
          <li>{restaurantData.price}</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ResturantCard;
