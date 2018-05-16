import React, { Component } from 'react' 
import { Table } from 'react-materialize'; 

const detailStyles = {
  detailImage: {
    width: '80%', 
    height: '250px', 
    margin: '0 auto', 
    display: 'block', 
    maxWidth: '300px'
  }
} 

class MotorcycleDetailView extends Component {
  // {
  //   id: 1,
  //   name: 'Pete Norris Honda Chopper', 
  //   make: 'Honda', 
  //   model: 'Pete Norris', 
  //   color: 'White', 
  //   price: '$80,000', 
  //   image_url: 'https://s.aolcdn.com/hss/storage/midas/c4eeb3a6bced38f306943400e6935921/204650302/3-pete-norris-honda-chopper.jpg', 
  //   detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
  //   profile_id: 1 
  // },
  render() { 
    const { motorcycle } = this.props
    return(
      <div>
        <img style={detailStyles.detailImage} src={motorcycle.image_url}></img>
        <Table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{motorcycle.name}</td>
            </tr>
            <tr>
              <td>Make</td>
              <td>{motorcycle.make}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{motorcycle.model}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{motorcycle.price}</td>
            </tr>
          </tbody>
        </Table> 
        <p>{motorcycle.detail}</p>
      </div>      
    )
  }
}

export default MotorcycleDetailView