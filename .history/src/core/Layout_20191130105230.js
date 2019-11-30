import React from 'react';
import { MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Menu from './Menu'
import '../styles.css'

const Layout = ({ title = "Title", description = "Description", className, children }) => (
    <div>
        <Menu />
        <BannerTop />
        <div className={className}>{children}</div>
    </div>

);

export default Layout;