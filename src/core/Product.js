import React, { useState, useEffect  } from "react";
import {Row, MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBIcon } from "mdbreact";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import Search from "./Search";

const Product = props => {
 
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  
  


  const loadSingleProduct = productId => {
   
    read(productId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        //fetch related products
        listRelated(data._id).then(data => {
        
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };




  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
    console.log("product");
    console.log(product);
  }, [props]);

  

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      <div className=" my-5 py-5 ">
        <section className="text-center">
          <div className="row">
            <div className="col-lg-6">
              <div
                id="carousel-thumb1"
                className="carousel slide carousel-fade carousel-thumbnails mb-5 pb-4"
                data-ride="carousel"
              >
                <div
                  className="carousel-inner text-center text-md-left"
                  role="listbox"
                >
                  <div className="carousel-item active">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                      alt="First slide"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg"
                      alt="Second slide"
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg"
                      alt="Third slide"
                      className="img-fluid"
                    ></img>
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb1"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb1"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="row mb-4">
                <div className="col-md-12">
                  <div id="mdb-lightbox-ui"></div>
                  <div className="mdb-lightbox no-margin">
                    <figure className="col-md-4">
                      <a
                        href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                        data-size="1600x1067"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                          className="img-fluid"
                        ></img>
                      </a>
                    </figure>
                    <figure className="col-md-4">
                      <a
                        href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg"
                        data-size="1600x1067"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/2.jpg"
                          className="img-fluid"
                        ></img>
                      </a>
                    </figure>
                    <figure className="col-md-4">
                      <a
                        href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg"
                        data-size="1600x1067"
                      >
                        <img
                          src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/20.jpg"
                          className="img-fluid"
                        ></img>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center text-md-left">
              <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
    <strong>{product.name}</strong>
              </h2>
              <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">
             Categoria de producto
              </span>
             
              <Row>
                  <div className="col-lg-2">
                  <h2 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                <span className=" font-weight-bold priceStyle">
                  <strong>${product.price}</strong>
                </span>
                {/* <span className="grey-text">
                  <small>
                    <s>$89</s>
                  </small>
                </span> */}

              
              </h2>
                  </div>
                  <div className="col-lg-6">
                  <span class="qty">CANTIDAD</span>
              <div class="btn-group radio-group ml-2" data-toggle="buttons">
                <label class="btn btn-sm  btn-rounded">
                  <input type="radio" name="options" id="option1"></input>-
                </label>
               
                <span type="text" class="btn btn-sm " >5</span> 
                <label class="btn btn-sm  btn-rounded">
                  <input type="radio" name="options" id="option2"></input>+
                </label>
              </div>
                  </div>
             
              </Row>

              <Row>
              <div class="row mt-3 mb-4">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-primary btn-rounded">
                  <i class="fas fa-shopping-cart mr-2" aria-hidden="true"></i> Comprar</button>
              </div>
            </div>

            <div class="row mt-3 mb-4">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-rounded">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Agregar al carrito</button>
              </div>
            </div>
              </Row>

            

              <div
                className="accordion md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne1">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne1"
                      aria-expanded="true"
                      aria-controls="collapseOne1"
                    >
                      <h5 className="mb-0">
                        Descripción
                      
                      </h5>
                    </a>
                  </div>

                  <div
                    id="collapseOne1"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne1"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                      Texto correspondiente a la descripcion
                    </div>
                  </div>
                </div>

               

                <div className="card">
                  <div className="card-header" role="tab" id="headingThree3">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseThree3"
                      aria-expanded="false"
                      aria-controls="collapseThree3"
                    >
                      <h5 className="mb-0">
                        Descripción Larga
                      
                      </h5>
                    </a>
                  </div>

                  <div
                    id="collapseThree3"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                    Texto correspondiente a una descripción mas larga.   Texto correspondiente a una descripción mas larga.   Texto correspondiente a una descripción mas larga.   Texto correspondiente a una descripción mas larga
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="headingThree3">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseThree3"
                      aria-expanded="false"
                      aria-controls="collapseThree3"
                    >
                      <h5 className="mb-0">
                      Forma de Utilización
                     
                      </h5>
                    </a>
                  </div>

                  <div
                    id="collapseThree3"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                   Texto relacionado con la forma de utilización
                    </div>
                  </div>
                </div>
              </div>

             

            </div>
          </div>
        </section>
      </div>



      

    </Layout>
  );
};



export default Product;
