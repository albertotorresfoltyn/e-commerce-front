import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { getProducts, getPlaces } from './apiCore'
import Card from './Card'
import PlaceCard from './PlaceCard'
import { MDBBtn } from "mdbreact";

const kindOfRecurrence = [{_id:'fuck it',name: 'Unico', icon: ''}, {_id: '_all', name:'Fijo(recurrente)', icon: ''}];
const Step2 = ({history}) => 
  const [map, setMap] = useState({});
  
  const toggleInMap = (value) => {
    map[value] = !map[value]; console.log('shit', map)
    setMap({ ...map });
  }

  useEffect(() => {
    /*loadPlacesToClean()
    loadProductsByArrival()
    loadProductsBySell()*/
  }, [])

  return (
      <div className="row">
        <div className="container mb-3">
          <h1 className="mb-4">Paso 2</h1>
          <span>Seleccione el tipo de pedido</span>
          <div className="row">
            {
              kindOfRecurrence.map((product) => {
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
            <MDBBtn right color="yellow" onClick={()=>{
              history.push('/step2');
            }}>Siguiente</MDBBtn>
          </div>
        </div>
      </div>
  );
}

export default Step2;