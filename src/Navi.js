import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
    state = {};
    render() {
        return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Northwind App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen= {this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>
                        <Link to="form1">Form Demo 1</Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="form2">Form Demo 2</Link>
                    </NavLink>
                </NavItem>
                <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}
