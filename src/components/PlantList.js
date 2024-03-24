import React from 'react';
import PlantCard from './PlantCard';

const PlantList = ({ plants }) => {
  return (
    <div className="PlantList">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
