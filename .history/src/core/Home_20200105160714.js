import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { getProducts, getPlaces } from './apiCore'
import Card from './Card'
import Search from './Search'
import PlaceCard from './PlaceCard'

const Home = () => {
  const [productsBySell, setProductBySell] = useState([])
  const [productsByArrival, setProductByArrival] = useState([])
  const [placesToClean, setPlacesToClean] = useState([])
  const [map, setMap] = useState(new Map());
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
        setPlacesToClean(data)
      }
    })
  }

  const toggleInMap = (value) => {
    const RNDM = Math.random().toFixed(5)
    map.set(value, !map.get(value));
    setMap(new Map([...map]));
  }

  useEffect(() => {
    loadPlacesToClean()
    loadProductsByArrival()
    loadProductsBySell()
  }, [])

  return (
    <Layout title="E-commerce Limpieza" description="Created by EPA!" className="container-fluid center">
      <Search />
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
      <div className="row">
        <div className="container mb-3">
          <h1 className="mb-4">Que necesitas limpiar?</h1>
          <span>Seleccione el/los lugares que quiere limpiar</span>
          <div className="row">
            {
              placesToClean.map((product, i) => {
                <>
                {(map.get(product.id))?<span>{'checked'}</span>:null}
                (<div key={i} className="col-3 mb-3" onClick={toggleInMap(product.id)}>
                  <PlaceCard product={product} />
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;