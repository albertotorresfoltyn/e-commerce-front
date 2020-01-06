import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { getProducts, getPlaces } from './apiCore'
import Card from './Card'
import PlaceCard from './PlaceCard'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBTooltip, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";


const Home = () => {
  const [productsBySell, setProductBySell] = useState([])
  const [productsByArrival, setProductByArrival] = useState([])
  const [placesToClean, setPlacesToClean] = useState([])
  const [map, setMap] = useState({});
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      if ((!data) || (data.error)) {
        if (!data) { console.log('data is empty') }
        else { console.log(data.error) }
      } else {
        setProductBySell(data)
      }
    })
  }
  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      if ((!data) || (data.error)) {
        if (!data) { console.log('data is empty') }
        else { console.log(data.error) }
      } else {
        setProductByArrival(data)
      }
    })
  }
  const loadPlacesToClean = () => {
    getPlaces('createdAt').then(data => {
      if ((!data) || (data.error)) {
        if (!data) { console.log('data is empty') }
        else { console.log(data.error) }
      } else {
        setPlacesToClean(data);
        const tmp = {};
        data.map(d => {
          tmp[d._id] = false;
        })
        debugger;
        setMap(tmp);
      }
    })
  }

  const toggleInMap = (value) => {
    debugger;
    map[value] = !map[value]; console.log('shit', map)
    setMap({ ...map });
  }

  useEffect(() => {
    loadPlacesToClean()
    loadProductsByArrival()
    loadProductsBySell()
  }, [])

  return (
    <Layout title="E-commerce Limpieza" description="Created by EPA!" className="container-fluid center">
      {/*<h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <div key={i} className="col-3 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>
      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <div key={i} className="col-3 mb-3">
            <Card product={product} />
          </div>
        ))}
        </div>*/}
      {//TODO: Make a component with the following code}
      <div className="row">
        <div className="container mb-3">
          <h1 className="mb-4">Que necesitas limpiar?</h1>
          <span>Seleccione el/los lugares que quiere limpiar</span>
          <div className="row">
            {
              placesToClean.map((product) => {
                // console.log('state',map[product._id])
                return <>
                  <div key={product._id} className="col-3 mb-3">
                    <PlaceCard product={product} onClick={() => { toggleInMap(product._id) }} isSelected={map[product._id]} />
                  </div>
                </>
              }
              )
            }
          </div>
          <div className="row reverse">
            <MDBBtn right color="yellow">Siguiente</MDBBtn>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;