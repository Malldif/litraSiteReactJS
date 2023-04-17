import React, {Component} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import logo from './logo192.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Map from "../Pages/Map";
import Info from "../Pages/Info";

export default class Header extends Component{
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}>
                    <Container>
                        <NavbarBrand href={"/litraSiteReactJS/"}>
                            <img src={logo}
                                 height={30}
                                 width={30}
                                 className={"d-Line-block align-top"}
                                 alt="Logo"/>
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navnar-nav"></NavbarToggle>
                        <NavbarCollapse id={"responsive-navbar-nav"}>
                            <Nav className={"me-auto"}>
                                <NavLink href={"/litraSiteReactJS"}> Главная </NavLink>
                                <NavLink href={"/litraSiteReactJS/map"}> Карта </NavLink>
                                <NavLink href={"/litraSiteReactJS/info"}> Информация </NavLink>
                                <NavLink href={"https://ilibrary.ru/text/69/p.1/index.html"} style={{color:"blue", marginTop:"-4px", fontSize:"20px"}}> Преступление и наказание </NavLink>
                            </Nav>
                            <Form inline style={{ display: "flex", gap: "5px" }}>
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
                        <Route path="/litraSiteReactJS" element={<Home/>}/>
                        <Route path="/litraSiteReactJS/map" element={<Map/>}/>
                        <Route path="/litraSiteReactJS/info" element={<Info/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}