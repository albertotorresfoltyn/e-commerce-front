import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { getProducts, getPlaces } from './apiCore'
import Card from './Card'
import PlaceCard from './PlaceCard'
import { MDBBtn } from "mdbreact";

const kindOfRecurrence = {category:'kindOfRecurrence',values:[{ _id: 'fuck it', name: 'Unico', icon: 'mdiCalendarToday' }, { _id: 'all', name: 'Fijo(recurrente)', icon: 'mdiCalendarRange' }]};
const frequency = {category:'frequency',values:[{ _id: 'weekly', name: 'Semanal', icon: 'mdiCalendarToday' }, { _id: 'every15', name: 'Quincenal', icon: 'mdiCalendarRange' }, { _id: 'monthly', name: 'Mensual', icon: 'mdiCalendarRange' }]};

function getInitialState() {
  const result = [];
  let i = 0,
    len = arguments.length;
  for (; i < len; i += 1) {
    const arr = arguments[i];
    if (Array.isArray(arr)) {
      arr.forEach((elem)=>{
        const block = result[elem._id] || {}; 
        block[arguments[i].category] = false;
        result[elem._id]=block;
      });
    }
  }
  return result
}
const Step2 = ({ history }) => {
  const [map, setMap] = useState(getInitialState(kindOfRecurrence, frequency));
  //const [frequency, setFrequency] = useState({'fuck it': false, 'all': false});

  const toggleInMap = (value, category) => {
    const keys = Object.keys(map);
    debugger;
    for (let i = 0; i < keys.length; i += 1) {
      debugger
      if (keys[i] === value) {
        map[keys[i]] = true;
      } else {
        map[keys[i]] = false;
      }
    }
    //map[value] = !map[value]; console.log('shit', map)
    setMap( ...map );
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
            kindOfRecurrence.values.map((product) => {
              return <>
                <div key={product._id} className="col-3 mb-3">
                  <PlaceCard product={product} onClick={() => { toggleInMap(product._id) }} isSelected={map[product._id]} />
                </div>
              </>
            }
            )
          }
        </div>
        <h1 className="mb-4">Frecuencia</h1>
        <span>Seleccione el tipo de pedido</span>
        <div className="row">
          {
            frequency.values.map((period) => {
              return <>
                <div key={period._id} className="col-3 mb-3">
                  <PlaceCard product={period} onClick={() => { toggleInMap(period._id) }} isSelected={map[period._id]} />
                </div>
              </>
            }
            )
          }
        </div>
        <div className="row reverse">
          <MDBBtn right color="yellow" onClick={() => {
            history.push('/step2');
          }}>Siguiente</MDBBtn>
        </div>
      </div>
    </div>
  );
}

export default Step2;