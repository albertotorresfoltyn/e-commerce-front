import React from 'react';
import { MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Menu from './Menu'
import '../styles.css'

const Layout = ({ title = "Title", description = "Description", className, children }) => (
    <div>
        <Menu />
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiG9ZSf6ezlAhVRGbkGHQctBWkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_58202559_old-wood-vintage-wood-wall-texture-wood-background-old-panels.html&psig=AOvVaw3TYW_H9XvRkQ6JGDccZfKH&ust=1573928101679846)` }}>
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