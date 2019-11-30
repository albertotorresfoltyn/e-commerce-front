import React from 'react';
import { API } from "../config";
import {  MDBCardImage } from "mdbreact";
 

const ShowImage = ({ item, url }) => (

<MDBCardImage
            top
            src={`${API}/${url}/photo/${item._id}`}
            overlay='white-slight'
            hover
            waves
            alt={item.name}
            className="m-auto maxWidth150"
            
          />
);

export default ShowImage;