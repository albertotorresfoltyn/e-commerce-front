import React, { useState, useEffect } from "react";
import { API } from "../config";
import {
  Row,
  MDBContainer,
  MDBCollapse,
  Col,
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBIcon,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdbreact";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import Search from "./Search";

const Product = props => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  var counter =0;

  const loadSingleProduct = productId => {
    read(productId).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        console.log(data)
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
              <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={2}
                  slide={true}
                  showControls={true}
                  showIndicators={true}
                  multiItem
                >
                  <MDBCarouselInner>
                    <Row>

                    {
                     
                    product &&
                      product.photos &&
                      product.photos.map((item, i) => {
                        debugger
                        counter = counter + 1;
                        return (
                          
                            <MDBCarouselItem key={counter} itemId={counter}>
                        
                          <MDBCardImage
                            top
                            src={`${API}/product/photo/5e7e9f2d54bd5c491c3906dd`}
                            overlay='white-slight'
                        
                            alt={item.name}
                            className="m-auto maxWidth300"
                            
                          />
                         
                        </MDBCarouselItem>
                        );
                      
                      })}
                      
                    </Row>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>
            </div>

            <div className="col-lg-5 text-center text-md-left">
              <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                <strong>{product.name}</strong>
              </h2>
              <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">
                {product && product.category && product.category.name}
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
                  <span className="qty">CANTIDAD</span>
                  <div
                    className="btn-group radio-group ml-2"
                    data-toggle="buttons"
                  >
                    <label className="btn btn-sm  btn-rounded">
                      <input type="radio" name="options" id="option1"></input>-
                    </label>

                    <span type="text" className="btn btn-sm ">
                      1
                    </span>
                    <label className="btn btn-sm  btn-rounded">
                      <input type="radio" name="options" id="option2"></input>+
                    </label>
                  </div>
                </div>
              </Row>

              <Row>
                <div className="row mt-3 mb-4">
                  <div className="col-md-12 text-center text-md-left text-md-right">
                    <button className="btn btn-primary btn-rounded">
                      <i
                        className="fas fa-shopping-cart mr-2"
                        aria-hidden="true"
                      ></i>{" "}
                      Comprar
                    </button>
                  </div>
                </div>

                <div className="row mt-3 mb-4">
                  <div className="col-md-12 text-center text-md-left text-md-right">
                    <button className="btn btn-rounded">
                      <i
                        className="fas fa-cart-plus mr-2"
                        aria-hidden="true"
                      ></i>{" "}
                      Agregar al carrito
                    </button>
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
                      <h5 className="mb-0">Descripción</h5>
                    </a>
                  </div>

                  <div
                    id="collapseOne1"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne1"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">{product.description}</div>
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
                      <h5 className="mb-0">Descripción Larga</h5>
                    </a>
                  </div>

                  <div
                    id="collapseThree3"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">{product.descriptionLg}</div>
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
                      <h5 className="mb-0">Tags Relacionados</h5>
                    </a>
                  </div>

                  <Row className="mb-3 ml-4">
                    {product &&
                      product.tags &&
                      product.tags.map(tag => {
                        return (
                        
                            <MDBBadge key={tag} color="primary" className="mr-3 p-3">
                            {tag}
                          </MDBBadge>
                         
                          
                        );
                      })}
                       </Row>
                 
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
                      <h5 className="mb-0">Forma de Utilización</h5>
                    </a>
                  </div>

                  <div
                    id="collapseThree3"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">{product.wayUse}</div>
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
