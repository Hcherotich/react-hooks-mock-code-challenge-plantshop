import React, { Component } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

class PlantPage extends Component {
  state = {
    plants: [
      { id: 1, name: 'Aloe', image: './images/aloe.jpg', price: 15.99 },
      { id: 2, name: 'ZZ Plant', image: './images/zz-plant.jpg', price: 25.98 }
    ]
  };

  handleAddPlant = newPlant => {
    this.setState(prevState => ({
      plants: [...prevState.plants, newPlant]
    }));
  };

  handleSearch = query => {
    // Logic to filter plants based on search query
    console.log('Search query:', query);
  };

  render() {
    const { plants } = this.state;

    return (
      <div className="PlantPage">
        <h1>Plantsy</h1>
        <NewPlantForm onAddPlant={this.handleAddPlant} />
        <Search onSearch={this.handleSearch} />
        <PlantList plants={plants} />
      </div>
    );
  }
}

export default PlantPage;
