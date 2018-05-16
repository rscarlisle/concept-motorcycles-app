import React, { Component } from 'react';
import './App.css';
import MotorcycleFeed from './Components/motorcycle_feed'
import AuthPage from './Components/auth_page'
import { Navbar, NavItem} from 'react-materialize';

class App extends Component { 

  constructor(props) {
    super(props) 

    this.state = {
      display: 'feed' // profile signup/login 
    }
  }

  getComponent(display) {
    if(display === 'login') {
      return(<AuthPage />)    
    } else if(display === 'profile') {
      return(<h1>This is Profile Page</h1>) 
    } else if(display === 'feed') {
      return(<MotorcycleFeed />)      
    }
  } 


  render() { 
    const displayComponent = this.getComponent(this.state.display)
    return (
      <div className="App">
         {/* Navbar  */} 
         <Navbar brand='Motorcycles' right>
           <NavItem onClick={() => this.setState({ display: 'profile'})}>Profile</NavItem>
           <NavItem onClick={() => this.setState({ display: 'feed'})}>Feed</NavItem>
           <NavItem onClick={() => this.setState({ display: 'login'})}>Login/Signup</NavItem>
         </Navbar>
         {/* Profile OR Feed OR LOGIN/SIGNUP*/}
         {
           displayComponent
         }

      </div>
    );
  }
}

export default App;
