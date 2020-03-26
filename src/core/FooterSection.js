import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterSection = () => {
  return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#212529" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Conoce nuestas redes sociales! 
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Clean Easy</strong>
            </h6>
            <hr className="deep-celeste accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            Somos una organización de origen familiar y de capital 100 % argentino que ofrece servicios de Facility para empresas y organizaciones.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>CONOCENOS</strong>
            </h6>
            <hr className="deep-celeste accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Quienes Somos</a>
            </p>
            <p>
              <a href="#!">Dejanos tu CV </a>
            </p>
            <p>
              <a href="#!">Sustentabilidad</a>
            </p>
          
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Links útiles</strong>
            </h6>
            <hr className="deep-celeste accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Home</a>
            </p>
            <p>
              <a href="#!">Búsqueda</a>
            </p>
            <p>
              <a href="#!">Registrate</a>
            </p>
            <p>
              <a href="#!">Ingresa</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>CONTACTO</strong>
            </h6>
            <hr className="deep-celeste accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> 
            Emilio Frers 2154, Martínez. Prov. de Buenos Aires. República Argentina.
            CP 1640
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 3777 234 567 
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 3777 234 568 
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Desarrollado por : <a href="https://www.EPA.com"> EPA.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterSection;