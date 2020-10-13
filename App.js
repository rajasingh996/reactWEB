import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, Card } from 'react-bootstrap';
// import { createStackNavigator } from 'react-navigation-stack';
// import ProfileScreen from './ProfileScreen';
// import { createAppContainer } from 'react-navigation';
// Sign in page



class App extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: '',
      password: ''
    }
  }
  
  componentDidMount() {
    this.setState({emailValue:"Robot@asto.com,password:"123456789"})
  }

  handleChange(e) {
    console.log(e)
    this.setState({
      emailValue: e.target.value
    })
  }

  passChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  
  ClearData() => {
    this.setState = ({
      emailValue: '',
      password: ''
    })
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#HomePage">My Page</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
        <>
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
                  <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={e => this.passChange(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.submitForm} >
                  Submit
  </Button>
<Button variant="primary" type="clear" onClick={this.ClearData} >
                  Clear
  </Button>
              </Form>
            </Card.Body>
          </Card>
        </>

      </>
    );
  }

  submitForm() {
    let email = document.getElementById("formBasicEmail").value;
    let password = document.getElementById("formBasicPassword").value
    console.log(email,password)
  }
}

// const stackNav = createStackNavigator(
//   {
//     Home: ProfileScreen
//   }
// )
// const appContainer = createAppContainer(stackNav);
export default App;  
