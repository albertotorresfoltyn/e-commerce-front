import React from 'react';
import { API } from "../config";
import {  MDBCardImage } from "mdbreact";
 

const ShowImage = ({ item, url }) => (

    <MDBCardImage className="m-auto maxWidth150" cascade top src={`${API}/${url}/photo/${item._id}`}
    waves />

    // <div className="product-img">
    //     <img
    //         src={`${API}/${url}/photo/${item._id}`}
    //         alt={item.name}
    //         className="mb-3"
    //         style={{ maxHeight: "100%", maxWidth: "100%" }}
    //     />    
    // </div>
);

export default ShowImage;