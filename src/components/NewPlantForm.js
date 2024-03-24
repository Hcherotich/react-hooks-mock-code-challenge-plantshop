import React, { Component } from 'react';

class NewPlantForm extends Component {
  state = {
    name: '',
    image: '',
    price: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, image, price } = this.state;
    // Logic to handle form submission (e.g., send data to backend)
    console.log('New plant submitted:', { name, image, price });
    // Clear form fields
    this.setState({ name: '', image: '', price: '' });
  };

  render() {
    const { name, image, price } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={this.handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    );
  }
}

export default NewPlantForm;
