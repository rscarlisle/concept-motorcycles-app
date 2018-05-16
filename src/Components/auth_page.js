import React, { Component } from 'react'
import { Button, Icon, Modal, Input, Row } from 'react-materialize';
import SignupForm from './signup_form'

const authStyles = {
  container: {
    display: 'flex', 
    flexDirection: 'column', 
    paddingTop: '200px'
  }, 
  btn: {
    width: '70%',  
    height: '100px',
    margin: '50px auto' 
  }
}


class AuthPage extends Component {
  render() {
    return (
      <div className="auth-container" style={authStyles.container}>

      <Modal
      header='Sign Up'
      trigger={
        <Button waves='light' style={authStyles.btn}>Sign Up</Button>
      }> 
      <SignupForm />
      </Modal>

      <Modal
      header='Login'
      trigger={
        <Button waves='light' style={authStyles.btn}>Login</Button>
      }> 
      <Row>
        <Input placeholder="Enter Email" s={12} label="Email" type="email"/>
        <Input type="password" placeholder="Enter Password" label="Password" s={12} />
        <Button waves='light'>Login</Button>        
      </Row>
      </Modal>
      </div>
    )
  }
}

export default AuthPage