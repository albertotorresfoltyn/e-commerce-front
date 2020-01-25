import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage'
import moment, { updateLocale } from 'moment'
import { addItem, updateItem, removeItem } from './cartHelpers'
//import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import * as icons from '@mdi/js';

export default ({ product, onClick, isSelected, color}) => 


<MDBCard style={{ width: "16rem", background: isSelected?'lightgray':'white', maxHeight:'10rem', minHeight:'10rem'}} cascade ecommerce narrow  onClick={onClick}>
{/*<ShowImage item={product} url="product" />*/}
<MDBCardBody cascade className="text-center">
  <MDBCardTitle tag="h3">
    {product.name}
  </MDBCardTitle>
  {/* <MDBCardTitle>
    <a href={`/product/${product._id}`} ><strong>{product.name}</strong></a>
  </MDBCardTitle> */}
  <MDBCardText className="">
    
     {product.description && product.description.substring(0, 100)} 
  </MDBCardText>
  <Icon path={icons[product.icon]}
  size={2}
  color="#33b5e5"/>
</MDBCardBody>
</MDBCard>

{/* <MDBCard pricing>
<div className="price header white-text blue rounded-top">
  <span > {product.description && product.description.substring(0, 100)} </span>
  <div className="version">
    <h5 className="mb-0"> {product.name}</h5>
  </div>
</div>

</MDBCard> */}

    // <MDBCard style={{ width: "16rem", background: isSelected?'lightgray':'white', maxHeight:'10rem', minHeight:'10rem'}} cascade ecommerce narrow onClick={onClick}>
    //   {/*<ShowImage item={product} url="product" />*/}
    //   <MDBCardBody cascade className="text-center">
    //     <MDBCardTitle tag="h3">
    //       {product.name}
    //     </MDBCardTitle>
    //     {/* <MDBCardTitle>
    //       <a href={`/product/${product._id}`} ><strong>{product.name}</strong></a>
    //     </MDBCardTitle> */}
    //     <MDBCardText>
          
    //        {product.description && product.description.substring(0, 100)} 
    //     </MDBCardText>
    //     <Icon path={icons[product.icon]}
    //     size={2}
    //     color="#33b5e5"/>
    //   </MDBCardBody>
    // </MDBCard>