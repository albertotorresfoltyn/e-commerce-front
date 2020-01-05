import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage'
import moment, { updateLocale } from 'moment'
import { addItem, updateItem, removeItem } from './cartHelpers'
//import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import * as icons from '@mdi/js';
const Card = ({ product, showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false

}) => {

  const [redirect, setRedirect] = useState(false)
  const [count, setCount] = useState(product.count)

  const handleChange = productId => event => {
    setCount(event.target.value < 1 ? 1 : event.target.value)
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value)
    }
  }

  debugger;
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce narrow>
      <ShowImage item={product} url="product" />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          {product.name}
        </MDBCardTitle>
        <MDBCardTitle>
          <a href={`/product/${product._id}`} ><strong>{product.name}</strong></a>
        </MDBCardTitle>
        <MDBCardText>
          {product.description && product.description.substring(0, 100)}
        </MDBCardText>
        <Icon path={icons['mdiAccount']}
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"/>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;