import React, {Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink, S} from "react-bootstrap";
import logo from './logo192.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Map from "../Pages/Map";
import Info from "../Pages/Info";

export default class Header extends Component{
    render() {
        return (
            <>
                <Navbar  collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}>
                    <Container>
                        <NavbarBrand href={"/"}>
                            <img src={logo}
                                 height={30}
                                 width={30}
                                 className={"d-Line-block align-top"}
                                 alt="Logo"/>
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navnar-nav"></NavbarToggle>
                        <NavbarCollapse id={"responsive-navbar-nav"}>
                            <Nav className={"me-auto"}>
                                <NavLink href={"/"}> Home </NavLink>
                                <NavLink href={"/map"}> Map </NavLink>
                                <NavLink href={"/info"}> Info </NavLink>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type={"text"}
                                    placeholder={"Search"}
                                    className={"me-sm-2"}>
                                </FormControl>
                                <Button variant={"outline-info"}>Search</Button>
                            </Form>
                        </NavbarCollapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/map" element={<Map/>}/>
                        <Route path="/info" element={<Info/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}