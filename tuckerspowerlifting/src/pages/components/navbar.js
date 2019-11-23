import React, { useState } from 'react';
// import brtext from'../images/brtext.jpg';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./nav.css";

const NavCom = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
            <div id="linkies">
              <NavLink id='noCol' href="/">Home</NavLink>
              <NavLink id='noCol' href="/Training">Training</NavLink>
              <NavLink id='noCol' href="/Philosophy ">Philosophy</NavLink>
              <NavLink id='noCol' href="/Education ">Education</NavLink>
              {/* <NavLink id='noCol' href="/Checkout">Checkout</NavLink> */}
            </div>
        <NavbarToggler id='hamburger' onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Training">Training</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Philosophy ">Philosophy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Education ">Education</NavLink>
            </NavItem>            
          </Nav>
        </Collapse>
        {/* <div id="cartDiv">
        <Link to="/pay"><img id='cartLogo' src={shoppingCart}/><h3 id='cartCount'>0</h3></Link>
        </div> */}
        
      </Navbar>
    </div>
  );
}

export default NavCom;