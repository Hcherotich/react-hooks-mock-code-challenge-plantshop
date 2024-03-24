import React from 'react';

const PlantCard = ({ plant }) => {
  return (
    <div className="PlantCard">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={() => console.log(`Mark ${plant.name} as sold out`)}>
        Mark as Sold Out
      </button>
    </div>
  );
};

export default PlantCard;
