import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App.js';  

  
ReactDOM.render(<App />, document.getElementById('app'));  

<Navbar bg="dark" variant="dark">
<Navbar.Brand href="#HomePage">HomePage</Navbar.Brand>
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
