import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom';
import { signout, isAuthenticated } from '../auth'
import { itemTotal } from './cartHelpers'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
const isActive = (history, path) => {
    if (history.location.pathname === path){
        return { color: "#ff9900" };   
    } else {
        return { color: "#ffffff" }
    }

};
//this way we have access to prop.history
const Menu = ({ history }) => (
    <>
    <MDBNavbar color="26333C" dark expand="md">
        <MDBCollapse id="navbarCollapse3" isOpen={true} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
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
     <div>
         <ul className="nav nav-tabs bg-primary">

               <li className="nav-item">
                 <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
               </li>

               <li className="nav-item">
                 <Link className="nav-link" style={isActive(history, '/shop')} to="/shop">Shop</Link>
               </li>

               <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, '/cart')} to="/cart">
                        Cart{" "}<sup>
                                    <small className="cart-badge">{itemTotal()}</small>
                                </sup>
                    </Link>
               </li>

              {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard">
                            Dashboard
                        </Link>
                </li> 
              )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                    <Link className="nav-link" style={isActive(history, "/admin/dashboard")}
                    to="/admin/dashboard">
                        Dashboard
                    </Link>
                </li> 
              )}        
            
            {!isAuthenticated() && (
                <Fragment>
                     <li className="nav-item">
                          <Link className="nav-link" style ={isActive(history, '/signin')} to="/signin">Signin</Link>
                    </li>
            
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Signup</Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                    <li className="nav-item">
                            <span className="nav-link" style={{cursor: "pointer", color: "#ffffff" }} onClick={() => 
                                signout(() => {
                                history.push("/"); //take the user to homepage after signout
                                })
                            }
                            > 
                                Signout
                            </span>    
               
                     </li>
            )}

         </ul>   

     </div>
     </>
)

export default withRouter(Menu);