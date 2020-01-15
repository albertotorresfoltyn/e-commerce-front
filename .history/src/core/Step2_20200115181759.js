import React, { useState, useEffect } from 'react'
import PlaceCard from './PlaceCard'
import { MDBBtn } from "mdbreact";

const kindOfRecurrence = {
  category: 'kindOfRecurrence',
  values: [
    { _id: 'fuck it', name: 'Unico', icon: 'mdiCalendarToday' },
    { _id: 'all', name: 'Fijo(recurrente)', icon: 'mdiCalendarRange' }]
};
const frequency = {
  category: 'frequency',
  values: [
    { _id: 'daily', name: '1 vez por dia', icon: 'mdiCalendarToday' },
  { _id: 'twiceaday', name: '2 veces por dia', icon: 'mdiCalendarRange' },
  { _id: 'weekly', name: '1 vez por semana', icon: 'mdiCalendarRange' },
  { _id: 'weekly2', name: '2 veces por semana', icon: 'mdiCalendarRange' }]
};
const periods = {
  category: 'period',
  values: [
    { _id: 'weekly', name: '1 vez por semana', icon: 'mdiCalendarToday' },
  { _id: 'biweekly', name: 'cada 2 semanas', icon: 'mdiCalendarRange' },
  { _id: 'monthly', name: '1 mes', icon: 'mdiCalendarRange' },
  { _id: 'threemonths', name: '2 meses', icon: 'mdiCalendarRange' },
  { _id: 'sixmonths', name: '6 meses', icon: 'mdiCalendarRange' }]
};

function getInitialState() {
  const result = [];
  for (let i = 0; i < arguments.length; i += 1) {
    const arr = arguments[i] && arguments[i].values;
    if (Array.isArray(arr)) {
      arr.map((elem) => {
        const block = result[elem._id] || {};
        block[arguments[i].category] = false;
        result[elem._id] = block;
      });
    }
  }
  return result
}
const Step2 = ({ history }) => {
  const [map, setMap] = useState(getInitialState(kindOfRecurrence, frequency, periods));
  const toggleInMap = (value, category) => {
    const keys = Object.keys(map);
    debugger;
    for (let i = 0; i < keys.length; i += 1) {
      const mapkeys = Object.keys(map[keys[i]]);
      for (let j = 0; j < mapkeys.length; j += 1) { //category
        if (mapkeys[j] === category)
          map[keys[i]][mapkeys[j]] = (keys[i] === value) && (mapkeys[j] === category);
      }
    }
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
            kindOfRecurrence.values.map((product) => {
              return <>
                <div key={product._id} className="col-3 mb-3">
                  <PlaceCard product={product} onClick={() => { toggleInMap(product._id, 'kindOfRecurrence') }} isSelected={map[product._id]['kindOfRecurrence']} />
                </div>
              </>
            }
            )
          }
        </div>
        <h1 className="mb-4">Frecuencia de limpieza</h1>
        <span>Seleccione la cantidad de veces que va a limpiar</span>
        <div className="row">
          {
            frequency.values.map((freq) => {
              return <>
                <div key={freq._id} className="col-3 mb-3">
                  <PlaceCard product={freq} onClick={() => { toggleInMap(freq._id, 'frequency') }} isSelected={map[freq._id]['frequency']} />
                </div>
              </>
            }
            )
          }
        </div>
        <h1 className="mb-4">Periodo de limpieza</h1>
        <div className="row">
          {
            periods.values.map((period) => {
              return <>
                <div key={period._id} className="col-3 mb-3">
                  <PlaceCard product={period} onClick={() => { toggleInMap(period._id, 'period') }} isSelected={map[period._id]['period']} />
                </div>
              </>
            })
          }
        </div>
        <div className="row reverse">
          <MDBBtn right color="yellow" onClick={() => {
            history.push('/step2');
          }}>Siguiente</MDBBtn>
          <MDBBtn left color="yellow" onClick={() => {
            history.push('/');
          }}>Volver</MDBBtn>
        </div>
      </div>
    </div>
  );
}

export default Step2;