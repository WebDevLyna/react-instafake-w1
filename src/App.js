import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Paragraph, Main } from './components';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="main">
      <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
          <a href="#" className="title">Instafake</a>
        </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">WebDevLyna</NavItem>
          <NavDropdown eventKey={3} title="Dropdown bruh" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} href="https://github.com/WebDevLyna/react-instafake-w1" target="_blank">Github</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2} href="https://twitter.com/WebDevLyna" target="_blank">Twitter</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

      <Main />
      <Button />
      <Paragraph />
    </div>
    );
  }
}

export default App;
