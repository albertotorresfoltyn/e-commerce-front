import React from 'react';
import { MDBCol, MDBCardTitle } from "mdbreact";
import Search from './Search'


const BannerStandar = ({title = "Title", description = "Description"}) => {
    return  <div class="jumbotron jumboHead">
      <p className="mx-5 mb-5 caps"> </p>
            <Search />
    
    </div>

}

export default BannerStandar;