import React from 'react';
import { MDBCol, MDBCardTitle } from "mdbreact";
import Background from '../resources/wood.jpg';
import Search from './Search'

var sectionStyle = {
  backgroundImage: `url(${Background})`
};
const BannerTop = ({title = "Title", description = "Description"}) => {
    return<MDBCol className="text-white text-center py-5 px-4"  style={sectionStyle}>
        <MDBCol className="py-5">
            <MDBCardTitle className="h1-responsive pt-4 m-5 font-bold">{title}</MDBCardTitle>
            <p className="mx-5 mb-5">{description} </p>
            <Search />
        </MDBCol>
    </MDBCol>
}

export default BannerTop;