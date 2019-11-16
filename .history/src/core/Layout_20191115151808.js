import React from 'react';
import { MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Menu from './Menu'
import '../styles.css'

const Layout = ({ title = "Title", description = "Description", className, children }) => (
    <div>
        <Menu />
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://barriodogg.com/wp-content/uploads/2018/11/WEBSITE-WOOD-BACKGROUND.jpg)` }}>
                <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-4 m-5 font-bold">{title}</MDBCardTitle>
                    <p className="mx-5 mb-5">{description} </p>
                </MDBCol>
            </MDBCol>
        <div className={className}>{children}</div>
    </div>

);

export default Layout;