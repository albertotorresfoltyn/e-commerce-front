import React from 'react';
import { MDBCol, MDBCardTitle } from "mdbreact";
import Background from '../resources/empresa.jpg';
import Search from './Search'

var sectionStyle = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "round"
};

var sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "round"
  };
const BannerTop = ({title = "Title", description = "Description"}) => {
    return<MDBCol className="text-white text-center py-5 px-4"  style={sectionStyle}>
        <MDBCol className="py-5">
            <MDBCardTitle className=" titleClass">{title}</MDBCardTitle>
            <h3 className="mx-5 mb-5 caps">{description} </h3>
            <Search  params = {{searchp : ""}}/>
        </MDBCol>
    </MDBCol>
}

export default BannerTop;