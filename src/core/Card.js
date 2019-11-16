 import React, {useState} from 'react';
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
                <Link to={`/product/${product._id}`} className="mr-2">
                    
                    <MDBBtn color="blue"> Ver Producto</MDBBtn>

                    
                </Link>
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
                <MDBBtn onClick={addToCart} color="blue"> Agregar al carrito <MDBIcon icon="shopping-cart"/></MDBBtn>
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

     return (

            <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce wide>
                <ShowImage item={product} url="product"/>
              
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle tag="h5">
               {product.category.name}
                </MDBCardTitle>
                <MDBCardTitle>
                  <a href="#!"><strong>{product.name}</strong></a>
                </MDBCardTitle>
               
                <MDBCardText>
                {product.description.substring(0, 100)}
                </MDBCardText>
                <MDBCardFooter>

                <h4 className="font-weight-bold blue-text">
                <strong>${product.price}</strong>
              </h4>
                  
                  {showViewButton(showViewProductButton)}
                {showAddToCart(showAddToCartButton)}
                {showRemoveButton(showRemoveProductButton)}
                {showCartUpdateOptions(cartUpdate)}
                </MDBCardFooter>
              </MDBCardBody>
            </MDBCard>
          );
        
        
    

};

export default Card;






