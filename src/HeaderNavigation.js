import React from 'react';


import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/Nav';
import InlineLogin from './InlineLogin';
import UserNavigation from './UserNavigation'

export default class HeaderNavigation extends React.Component {

  render() {
    let brand = <a href='#'>Project Name</a>;
    return (
            <Navbar default toggleNavKey={0}>
                <Nav right eventKey={0}>
                    <ul className="nav navbar-nav">
                        <li><a href='#'>PRODUCTS</a></li>
                        <li><a href='#'>COMMUNITIES</a></li>
                        <li><a href='#'>REVIEWS</a></li>
                        <li><a href='#'>BRANDS</a></li>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>SEARCH</a></li>
                    </ul>
                </Nav>
                
            </Navbar>
    );
  }
}
