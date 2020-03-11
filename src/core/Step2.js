import React, { useState, useEffect } from "react";
import SimpleCard from "./SimpleCard";
import PlaceCard from "./PlaceCard";
import InputNumber from "./InputNumber";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBStepper,
  MDBStep,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon
} from "mdbreact";
import Layout from "./Layout";

const kindOfRecurrence = {
  category: "kindOfRecurrence",
  values: [
    {
      _id: "fuck it",
      name: "Unico",
      icon: "mdiCalendarToday",
      description: "Se efectúa una vez"
    },
    {
      _id: "all",
      name: "Recurrente",
      icon: "mdiCalendarRange",
      description: "Pedido que se repite "
    }
  ]
};

const frequency = {
  category: "frequency",
  values: [
    { _id: "daily", name: "Semanal", icon: "mdiCalendarToday" },
    { _id: "twiceaday", name: "Mensual", icon: "mdiCalendarRange" }
  ]
};
const periods = {
  category: "period",
  values: [
    { _id: "weekly", name: "1 vez por semana", icon: "mdiCalendarToday" },
    { _id: "biweekly", name: "cada 2 semanas", icon: "mdiCalendarRange" },
    { _id: "monthly", name: "1 mes", icon: "mdiCalendarRange" },
    { _id: "threemonths", name: "2 meses", icon: "mdiCalendarRange" },
    { _id: "sixmonths", name: "6 meses", icon: "mdiCalendarRange" }
  ]
};

function getInitialState() {
  const result = [];
  for (let i = 0; i < arguments.length; i += 1) {
    const arr = arguments[i] && arguments[i].values;
    if (Array.isArray(arr)) {
      arr.map(elem => {
        const block = result[elem._id] || {};
        block[arguments[i].category] = false;
        result[elem._id] = block;
      });
    }
  }
  return result;
}

const Step2 = ({ history }) => {
  
  
  const state = {
    formActivePanel1: 0,
    formActivePanel1Changed: false
  };

  const [map, setMap] = useState(
    getInitialState(kindOfRecurrence, frequency, periods)
  );
  const toggleInMap = (value, category) => {
    const keys = Object.keys(map);
    debugger;
    for (let i = 0; i < keys.length; i += 1) {
      const mapkeys = Object.keys(map[keys[i]]);
      for (let j = 0; j < mapkeys.length; j += 1) {
        //category
        if (mapkeys[j] === category)
          map[keys[i]][mapkeys[j]] =
            keys[i] === value && mapkeys[j] === category;
      }
    }
    setMap({ ...map });
  };

  useEffect(() => {
    /*loadPlacesToClean()
    loadProductsByArrival()
    loadProductsBySell()*/
  }, []);

  //  handleNextPrevClick = (a) => (param) => (e) => {
  //   this.setState({
  //     ['formActivePanel' + a]: param,
  //     ['formActivePanel' + a + 'Changed']: true
  //   });
  // }

  //  handleSubmission = () => {
  //   alert('Form submitted!');
  // }

  //  calculateAutofocus = (a) => {
  //   if (this.state['formActivePanel' + a + 'Changed']) {
  //     return true
  //   }
  // }

  return (
    <Layout
      title="EcoClean"
      description="Sabemos de limpieza"
      className="container-fluid center backColorLigthGray"
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="12">
            <MDBCard>
              <MDBCardBody>
                <h2 className="text-center font-weight-bold pt-4 pb-4 btn-blue mb-5">
                  <strong>Registración de un pedido </strong>
                </h2>
                <MDBStepper form>
                  <MDBStep form>
                    {/* <a href="#formstep1" onClick={this.swapFormActive(1)(1)}> */}
                    <a>
                      <MDBBtn
                        color="blue"
                        circle
                        onClick={() => this.setState({ formActivePanel1: 0 })}
                      >
                        1
                      </MDBBtn>
                    </a>
                    <p>PASO 1</p>
                  </MDBStep>
                  <MDBStep form>
                    {/* <a href="#formstep2" onClick={this.swapFormActive(1)(2)}> */}
                    <a>
                      <MDBBtn
                        color="default"
                        circle
                        onClick={() => this.setState({ formActivePanel1: 1 })}
                      >
                        2
                      </MDBBtn>
                    </a>

                    <p>Paso 2</p>
                  </MDBStep>
                  <MDBStep form>
                    {/* <a href="#formstep3" onClick={this.swapFormActive(1)(3)}> */}
                    <a>
                      <MDBBtn
                        color="default"
                        circle
                        onClick={() => this.setState({ formActivePanel1: 2 })}
                      >
                        3
                      </MDBBtn>
                    </a>
                    <p>Paso 3</p>
                  </MDBStep>
                </MDBStepper>

                <form action="" method="post">
                  <MDBRow className="mt-5" style={{ background: "#f9f9f9" }}>
                    {state.formActivePanel1 === 0 && (
                      <MDBCol md="12" className="text-center">
                        <div class=" mb-3 mt-5">
                          <h4>
                            <strong>
                              SELECCIONÁ UNA DE TUS LOCACIONES PARA LIMPIAR
                            </strong>
                          </h4>
                          <h5 className="">Mis locaciones</h5>
                          <div className="row">
                            <MDBCol style={{ maxWidth: "22rem" }}>
                              <MDBCard>
                                <MDBCardImage
                                  className="img-fluid"
                                  src="https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/archivo/nota_periodistica/cba_6.jpg"
                                  waves
                                />
                                <MDBCardBody>
                                  <MDBCardText>
                                    <strong> Junin 1425 - Dto 3A</strong>
                                  </MDBCardText>
                                  <MDBCardText>
                                    <p> 1 baño</p>
                                    <p> 2 habitaciones</p>
                                    <p> 2 comedor</p>
                                  </MDBCardText>

                                  <MDBCardTitle>Oficina Centro</MDBCardTitle>
                                  <MDBBtn gradient="purple" href="#">
                                    Editar
                                  </MDBBtn>
                                </MDBCardBody>
                              </MDBCard>
                            </MDBCol>
                            <MDBCol style={{ maxWidth: "22rem" }}>
                              <MDBCard>
                                <MDBCardImage
                                  className="img-fluid"
                                  src="https://cdn.lavoz.com.ar/sites/default/files/styles/width_1072/public/archivo/nota_periodistica/cba_6.jpg"
                                  waves
                                />
                                <MDBCardBody>
                                  <MDBCardText>
                                    <strong> Av 3 de Abril 1652 </strong>
                                  </MDBCardText>
                                  <MDBCardText>
                                    <p> 2 baño</p>
                                    <p> 4 habitaciones</p>
                                    <p> 1 comedor</p>
                                  </MDBCardText>

                                  <MDBCardTitle>Casa</MDBCardTitle>
                                  <MDBBtn gradient="purple" href="#">
                                    Editar
                                  </MDBBtn>
                                </MDBCardBody>
                              </MDBCard>
                            </MDBCol>

                            <MDBCol>
                              <MDBCard
                                className="card-image"
                                style={{
                                  backgroundColor: "#1976d2"
                                }}
                              >
                                <div className="text-white text-center d-flex align-items-center  py-5  pb-2 px-4">
                                  <div>
                                    <h5 className="">
                                      <MDBIcon icon="home" />{" "}
                                      <strong>Agregar Locaciones</strong>
                                    </h5>
                                    <br></br>
                                    <br></br>
                                    <br></br>

                                    <br></br>

                                    <p>
                                      Agrega locaciones para poder realizar
                                      pedidos en base a tus sitios.
                                      <br></br>
                                      <br></br>
                                      <br></br>
                                      <br></br>
                                      <br></br>
                                    </p>
                                    <MDBBtn
                                      tag="a"
                                      size="lg"
                                      floating
                                      gradient="purple"
                                    >
                                      <MDBIcon icon="plus" />
                                    </MDBBtn>
                                  </div>
                                </div>
                              </MDBCard>
                            </MDBCol>
                          </div>
                        </div>

                        <hr className="hrWhite"></hr>

                        <div class=" mb-3">
                          <h4>
                            <strong>CATEGORÍA</strong>
                          </h4>
                          <h5 className="">
                            Seleccione como quiere categorizar el pedido
                            Recurrente
                          </h5>
                          <div className="row">
                            <div className="col-3 mb-3"></div>
                            {frequency.values.map(freq => {
                              return (
                                <div key={freq._id} className="col-3 mb-3">
                                  <SimpleCard
                                    product={freq}
                                    onClick={() => {
                                      toggleInMap(freq._id, "frequency");
                                    }}
                                    isSelected={map[freq._id]["frequency"]}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <hr className="hrWhite"></hr>
                        <div class=" mb-3">
                          <h4>
                            <strong>FRECUENCIA</strong>
                          </h4>
                          <h5 className="">
                            Cada cuentas semanas quiere recibir el pedido{" "}
                          </h5>
                          <div className="row">
                            <div className="offset-5 mt-3 mb-3">
                              <InputNumber></InputNumber>
                            </div>

                            {/* {frequency.values.map(freq => {
                              return (
                                <div key={freq._id} className="col-3 mb-3">
                                  <SimpleCard
                                    product={freq}
                                    onClick={() => {
                                      toggleInMap(freq._id, "frequency");
                                    }}
                                    isSelected={map[freq._id]["frequency"]}
                                  />
                                </div>
                              );
                            })} */}
                          </div>
                        </div>
                        <div className="">
                          <MDBBtn
                            right
                            color="blue"
                            onClick={() => {
                              history.push("/step2");
                            }}
                          >
                            Siguiente
                          </MDBBtn>
                          <MDBBtn
                            color="blue"
                            onClick={() => {
                              history.push("/");
                            }}
                          >
                            Volver
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    )}
                    {state.formActivePanel1 === 1 && (
                      <MDBCol md="12" className="text-center">
                        <div class=" mb-3 mt-5">
                          <h4>
                            <strong>TIPO PEDIDO</strong>
                          </h4>
                          <h5 className="">Seleccione el tipo de pedido</h5>
                          <div className="row">
                            <div className="col-3 mb-3"></div>

                            {kindOfRecurrence.values.map(product => {
                              return (
                                <div key={product._id} className="col-3 mb-3">
                                  <SimpleCard
                                    product={product}
                                    onClick={() => {
                                      toggleInMap(
                                        product._id,
                                        "kindOfRecurrence"
                                      );
                                    }}
                                    isSelected={
                                      map[product._id]["kindOfRecurrence"]
                                    }
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <hr className="hrWhite"></hr>

                        <div class=" mb-3">
                          <h4>
                            <strong>CATEGORÍA</strong>
                          </h4>
                          <h5 className="">
                            Seleccione como quiere categorizar el pedido
                            Recurrente
                          </h5>
                          <div className="row">
                            <div className="col-3 mb-3"></div>
                            {frequency.values.map(freq => {
                              return (
                                <div key={freq._id} className="col-3 mb-3">
                                  <SimpleCard
                                    product={freq}
                                    onClick={() => {
                                      toggleInMap(freq._id, "frequency");
                                    }}
                                    isSelected={map[freq._id]["frequency"]}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <hr className="hrWhite"></hr>
                        <div class=" mb-3">
                          <h4>
                            <strong>FRECUENCIA</strong>
                          </h4>
                          <h5 className="">
                            Cada cuentas semanas quiere recibir el pedido{" "}
                          </h5>
                          <div className="row">
                            <div className="offset-5 mt-3 mb-3">
                              <InputNumber></InputNumber>
                            </div>

                            {/* {frequency.values.map(freq => {
                              return (
                                <div key={freq._id} className="col-3 mb-3">
                                  <SimpleCard
                                    product={freq}
                                    onClick={() => {
                                      toggleInMap(freq._id, "frequency");
                                    }}
                                    isSelected={map[freq._id]["frequency"]}
                                  />
                                </div>
                              );
                            })} */}
                          </div>
                        </div>
                        <div className="">
                          <MDBBtn
                            right
                            color="blue"
                            onClick={() => {
                              history.push("/step2");
                            }}
                          >
                            Siguiente
                          </MDBBtn>
                          <MDBBtn
                            color="blue"
                            onClick={() => {
                              history.push("/");
                            }}
                          >
                            Volver
                          </MDBBtn>
                        </div>
                      </MDBCol>
                    )}
                    {state.formActivePanel1 === 2 && (
                      <MDBCol md="12">
                        <h3 className="font-weight-bold pl-0 my-4">
                          <strong>Paso 2</strong>
                        </h3>

                        <MDBBtn color="blue" rounded className="float-left">
                          previous
                        </MDBBtn>
                        <MDBBtn color="blue" rounded className="float-right">
                          next
                        </MDBBtn>
                      </MDBCol>
                    )}
                    {state.formActivePanel1 === 3 && (
                      <MDBCol md="12">
                        <h3 className="font-weight-bold pl-0 my-4">
                          <strong>Paso 3</strong>
                        </h3>

                        <MDBBtn
                          color="indigo"
                          rounded
                          className="float-left"
                          autoFocus={this.calculateAutofocus(1)}
                        >
                          previous
                        </MDBBtn>
                        <MDBBtn color="default" rounded className="float-right">
                          submit
                        </MDBBtn>
                      </MDBCol>
                    )}
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default Step2;
