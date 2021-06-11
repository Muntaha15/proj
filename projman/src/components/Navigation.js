import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Logout from "./Logout.js"
import logo from "../logo-1.png"
 

export default function Navigation() {
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    {/* <Nav.Link href="#deets"></Nav.Link> */}
                    <Logout />
                    {/* <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
