import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage'
import moment, { updateLocale } from 'moment'
import { addItem, updateItem, removeItem } from './cartHelpers'

const Card = ({ product, showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false

}) => {

  const [redirect, setRedirect] = useState(false)
  const [count, setCount] = useState(product.count)

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <MDBTooltip placement="top">
          <MDBBtn tag="a" href={`/product/${product._id}`} target="_blank" color="transparent" size="lg" className="p-1 m-0 mr-2 z-depth-0" >
            <MDBIcon icon="eye" />
          </MDBBtn>
          <div>Ver</div>
        </MDBTooltip>
      )
    )
  }

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true)
    })
  }

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }


  const showAddToCart = (showAddToCartButton) => {
    return showAddToCartButton && (

      <MDBTooltip placement="top">
        <MDBBtn onClick={addToCart} tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
          <MDBIcon icon="shopping-cart" />
        </MDBBtn>
        <div>Agregar al carrito</div>
      </MDBTooltip>

    )
  }

  const showRemoveButton = showRemoveProductButton => {
    return showRemoveProductButton && (
      <button
        onClick={() => removeItem(product._id)}
        className="btn btn-outline-danger mr-2 mb-2">
        Remove Product
      </button>
    )
  }

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="barge badge-primary badge-pill">In Stock</span>
    ) : (
        <span className="barge badge-primary badge-pill">Out of Stock</span>
      )
  }

  const handleChange = productId => event => {
    setCount(event.target.value < 1 ? 1 : event.target.value)
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value)
    }
  }

  const showCartUpdateOptions = cartUpdate => {
    return cartUpdate && (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              Adjust Quantity
            </span>
          </div>

          <input
            type="number"
            className="form-control"
            value={count}
            onChange={handleChange(product._id)}
          />
        </div>
      </div>
    )
  }
  debugger;
  return (
    <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce narrow>
      <ShowImage item={product} url="product" />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle tag="h5">
          {product.category.name}
        </MDBCardTitle>
        <MDBCardTitle>
          <a href={`/product/${product._id}`} ><strong>{product.name}</strong></a>
        </MDBCardTitle>
        <MDBCardText>
          {product.description.substring(0, 100)}
        </MDBCardText>
        <MDBCardFooter>
          <span className="float-left">${product.price}</span>
          <span className="float-right"> {showViewButton(showViewProductButton)} {showAddToCart(showAddToCartButton)}</span
        </MDBCardFooter>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;