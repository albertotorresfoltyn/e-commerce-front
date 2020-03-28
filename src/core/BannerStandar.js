import React from 'react';
import { MDBCol, MDBCardTitle } from "mdbreact";
import Search from './Search'


const BannerStandar = (params) => {
    return  <div class="jumbotron jumboHead">
      <p className="mx-5 mb-5 caps"> </p>
            <Search  params = {params}/>
    
    </div>

}

export default BannerStandar;