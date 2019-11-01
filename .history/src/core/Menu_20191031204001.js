import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth'
import { itemTotal } from './cartHelpers'
import {
    MDBNavbar, /*MDBNavbarBrand,*/ MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" }
    }

};
//this way we have access to prop.history
const Menu = ({ history }) => (
        <MDBNavbar color="unique-color-dark" expand="md">
            <MDBCollapse id="navbarCollapse3" isOpen={true} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/shop">Shop</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/cart">Cart{" "}<sup>
                            <small className="cart-badge">{itemTotal()}</small>
                        </sup></MDBNavLink>
                    </MDBNavItem>
                    {(isAuthenticated() && isAuthenticated().user.role === 0) ? (
                        <MDBNavItem>
                            <MDBNavLink to="/user/dashboard">Dashboard</MDBNavLink>
                        </MDBNavItem>
                    ):null}
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <div className="d-none d-md-inline">Dropdown</div>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="twitter" />
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="google-plus-g" />
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown">
                                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
)

export default withRouter(Menu);