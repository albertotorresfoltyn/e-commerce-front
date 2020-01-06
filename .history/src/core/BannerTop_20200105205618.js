import React from 'react';
import { MDBCol, MDBCardTitle } from "mdbreact";
import image from  '../resources/wood.jpg';
const BannerTop = ({title = "Title", description = "Description"}) => {
    return<MDBCol className="text-white text-center py-5 px-4"  style={{ backgroundImage: `url('../resources/wood.jpg')` }}>
        <MDBCol className="py-5">
            <MDBCardTitle className="h1-responsive pt-4 m-5 font-bold">{title}</MDBCardTitle>
            <p className="mx-5 mb-5">{description} </p>
        </MDBCol>
    </MDBCol>
}

export default BannerTop;