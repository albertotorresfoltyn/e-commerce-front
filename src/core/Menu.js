import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return "active";
  } else {
    return "";
  }
};
//this way we have access to prop.history
const Menu = ({ history }) => (
  <MDBNavbar color="elegant-color" dark expand="md">
    <MDBNavbarBrand>
      <strong className="white-text">Clean Easy</strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler />
    <MDBCollapse id="navbarCollapse3" isOpen={true} navbar>
      <MDBNavbarNav left>
        <MDBNavItem className={isActive(history, "/")}>
          <MDBNavLink to="/">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className={isActive(history, "/shop")}>
          <MDBNavLink to="/shop">Productos</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem className={isActive(history, "/cart")}>
          <MDBNavLink to="/cart">
            Carrito{" "}
            <sup>
              {/* <small className="cart-badge">{itemTotal()}</small> */}
            </sup>
          </MDBNavLink>
        </MDBNavItem>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <MDBNavItem>
            <MDBNavLink to="/user/dashboard">Dashboard</MDBNavLink>
          </MDBNavItem>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <MDBNavItem>
            <MDBNavLink to="/admin/dashboard">Dashboard</MDBNavLink>
          </MDBNavItem>
        )}
      </MDBNavbarNav>
      <MDBNavbarNav right>
      {isAuthenticated() && (
                    <li className="nav-item">
                            <span className="nav-link" style={{cursor: "pointer", color: "#ffffff" }} onClick={() => 
                                signout(() => {
                                history.push("/"); //take the user to homepage after signout
                                })
                            }
                            > 
                                Salir
                            </span>    
               
                     </li>
            )}
        {!isAuthenticated() && (
          <Fragment>
            <MDBNavItem  className={isActive(history, "/signin")}>
              <MDBNavLink
               
                to="/signin"
              >
                Ingresar
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem   className={isActive(history, "/signup")}>
              <MDBNavLink
                to="/signup"
              >
                Registrarte
              </MDBNavLink>
            </MDBNavItem>
          </Fragment>
        )}
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
);

export default withRouter(Menu);
