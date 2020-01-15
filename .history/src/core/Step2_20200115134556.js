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
  for (let i=0; i < arguments.length; i += 1) {
    const arr = arguments[i]&&arguments[i].values;
    if (Array.isArray(arr)) {
      arr.map((elem)=>{
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
      if (keys[i] === value) { //id 
        const mapkeys = Object.keys(map[keys[i]]);
        for (let j = 0; j < mapkeys.length; j += 1) { //category
          map[keys[i]][mapkeys[j]] = (mapkeys[j]===category);
        }
      } /*else {
        //limpiar
        const mapkeys = Object.keys(map[keys[i]]);
        for (let j = 0; j < mapkeys.length; j += 1) {
          map[keys[i]][mapkeys[j]] = false;
        }
      }*/
    }
    setMap( {...map} );
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
                  <PlaceCard product={product} onClick={() => { toggleInMap(product._id,'kindOfRecurrence') }} isSelected={map[product._id]['kindOfRecurrence']} />
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
                  <PlaceCard product={period} onClick={() => { toggleInMap(period._id, 'frequency') }} isSelected={map[period._id]['frequency']} />
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