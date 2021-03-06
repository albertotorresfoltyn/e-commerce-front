import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import { prices } from "./fixedPrices";
import BannerStandar from "./BannerStandar";
import { Row, MDBBadge, MDBChip } from "mdbreact";

const Shop = props => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  });

  //states:
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = () => {
    props.match.params.searchtext && setFilter(props.match.params.searchtext.split(" "));
  };

  const loadFilteredResults = newFilters => {
  
    //console.log(newFilters);
    getFilteredProducts(skip, limit, props.match.params.searchtext).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
        setSize(data.size);
        setSkip(0);
      }
    });
  };

  const loadMore = () => {
    let toSkip = skip + limit;
    //console.log(newFilters);
    getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults([...filteredResults, ...data.data]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-warning mb-5">
          Load more
        </button>
      )
    );
  };

  const reloadCall = (param) => {
    
    var indexDelete = filter.findIndex(item => item === param);
    filter.splice(indexDelete, 1);  
    var filtrosUpdated = filter.join(" ");
    window.location.href =  "http://localhost:3000/shop/" + filtrosUpdated;

  };

  //populates the categories on the sidebar
  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    //console.log(filters, filterBy)
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy == "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }

    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = value => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
  };

  return (
    <Layout title="Shop Page" description="Busqueda de Productos" className="">
      <BannerStandar    searchp = {props.match.params.searchtext} ></BannerStandar>

      <div className="container-fluid" id="ShopContainer">
        <div className="">
          <h5 className="mb-2 font-weight-bold">Filtros aplicados</h5>

          <Row className="mb-3 ml-4">
            {filter &&
              filter.map(tag => {
                return (
                  <div>
                    <MDBChip
                      waves
                      close
                      key={tag}
                      color="primary"
                      className="rounded-0"
                      onClick={ ()=>{reloadCall(tag)}}
                    >
                      {tag}
                    </MDBChip>
                  </div>
                );
              })}
          </Row>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="row">
              {filteredResults.map((product, i) => (
                <div key={i} className="col-3 mb-3">
                  <Card product={product} />
                </div>
              ))}
            </div>
            <hr />
            {loadMoreButton()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
