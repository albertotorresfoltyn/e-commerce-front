import React from 'react';
import { MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Menu from './Menu'
import '../styles.css'

const Layout = ({ title = "Title", description = "Description", className, children }) => (
    <div>
        <Menu />
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://previews.123rf.com/images/prapann/prapann1606/prapann160600110/58202559-old-wood-vintage-wood-wall-texture-wood-background-old-panels.jpg)` }}>
                <MDBCol className="py-5">
                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">{title}</MDBCardTitle>
                    <p className="mx-5 mb-5">{description}
                    </p>
                    <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
                </MDBCol>
            </MDBCol>
        <div className={className}>{children}</div>
    </div>

);

export default Layout;