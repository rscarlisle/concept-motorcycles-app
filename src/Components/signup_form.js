import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize';
import axios from 'axios'

class SignupForm extends Component { 

  constructor(props) {
    super(props)
    this.state = {
      name: '', 
      email: '', 
      username: '', 
      summary: '',
      password: ''
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
    const newUser = {
      name: this.state.name, 
      email: this.state.email, 
      username: this.state.username, 
      summary: this.state.summary, 
      password: this.state.password
    }  

    this.setState({
      name: '', 
      email: '', 
      username: '', 
      summary: '',
      password: ''
    })

    const url = `http://localhost:3001/users`

    axios.post(url, newUser)
    .then(res => {
      // this.props.refreshMotorcycles() 
      alert('Sucess! User Created')
    }) 
    

  }


  render() {
    return (
      <Row>
        <Input placeholder="Enter Name" s={12} label="Name" name="name" value={this.state.name} onChange={this.onTextChange}/>
        <Input placeholder="Enter Email" s={12} label="Email" type="email" name="email" value={this.state.email} onChange={this.onTextChange}/>
        <Input placeholder="Enter Username" s={12} label="Username" name="username" value={this.state.username} onChange={this.onTextChange}/>
        <Input placeholder="Enter Summary" s={12} label="Summary" name="summary"value={this.state.summary} onChange={this.onTextChange}/>
        <Input type="password" placeholder="Enter Password" label="Password" s={12} name="password" value={this.state.password} onChange={this.onTextChange}/>
        <Button waves='light' onClick={this.onSubmit}>Sign Up</Button>
      </Row>
    )
  }
}

export default SignupForm
