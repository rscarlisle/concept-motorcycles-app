import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'; 
import axios from 'axios'

class AddMotorcycleForm extends Component { 
  constructor(props) {
    super(props) 

    this.state = {
      name: '', 
      make: '', 
      model: '', 
      price: '', 
      image_url: '', 
      description: ''
    } 

    this.onTextChange = this.onTextChange.bind(this) 
    this.onSubmit = this.onSubmit.bind(this)
  }


  onTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  onSubmit(e) {
    const newMotorcycle = {
      name: this.state.name, 
      make: this.state.make, 
      model: this.state.model,
      price: this.state.price,
      image_url: this.state.image_url, 
      detail: this.state.description, 
      profile_id: 13 
    }   

    this.setState({
      name: '', 
      make: '', 
      model: '', 
      price: '', 
      image_url: '', 
      description: ''
    })

    const data = {
      motorcycle: newMotorcycle
    } 

    const url = `http://localhost:3001/motorcycles`

    axios.post(url, { motorcycle: newMotorcycle })
    .then(res => {
      this.props.refreshMotorcycles()
    }) 
    
  }

  render() {
    return (
      <Row>
          <Input placeholder="Enter Name" s={12} label="Name" name="name" value={this.state.name} onChange={this.onTextChange}/>
          <Input placeholder="Enter Make" s={12} label="Make" name="make" value={this.state.make} onChange={this.onTextChange}/>
          <Input placeholder="Enter Model" s={12} label="Model" name="model" value={this.state.model} onChange={this.onTextChange}/>
          <Input placeholder="Enter Price" s={12} label="Price" name="price" value={this.state.price} onChange={this.onTextChange}/>
          <Input placeholder="Enter Image URL" s={12} label="Image URL" name="image_url" value={this.state.image_url} onChange={this.onTextChange}/> 
          <Input type='textarea' placeholder="Enter Description" s={12} label="Description"name="description" value={this.state.description} onChange={this.onTextChange}/>
          <Button waves='light' onClick={this.onSubmit}>Submit</Button>
      </Row>
    )
  }
}

export default AddMotorcycleForm
