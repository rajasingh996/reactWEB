import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, Card } from 'react-bootstrap';
import { ToastHeader, Toast } from 'react-bootstrap'

class ProfileScreen extends Component {
    constructor() {
      super();
      this.state = { emailValue: '' }
    }
  
    handleChange(e) {
      console.log(e)
      this.setState({
        emailValue: e.target.value
      })  
    }
    
    render() {
      return (
        
            <Card bg="dark" text="white" className="col-sm-6" style={{ alignItems: 'right', float: 'right', marginRight: '0.5rem' }}>
              <Card.Header>Test Form</Card.Header>
              <Card.Body>
                <Form >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email or Phone</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email or Phone" value={this.state.emailValue} onChange={e => this.handleChange(e)} />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
      </Form.Text>
                  </Form.Group>
  
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={this.submitForm} >
                    Submit
    </Button>
                </Form>
              </Card.Body>
            </Card>
      );
    }
  
    submitForm() {
    }
  }
  export default ProfileScreen;  