import React, { useState, useEffect } from 'react'
//import Layout from "./Layout"
import { getCategories, list } from "./apiCore"
import { Link, Redirect } from 'react-router-dom';
import Card from "./Card"
import { MDBBtn } from "mdbreact";

const Search = ({ history }) => {

    const [data, setData] = useState({
        categories: [],
        category: '',
        search: '',
        results: [],
        searched: false
    });

    const { categories, category, search, results, searched } = data;

    const loadCategories = () => {
        getCategories().then(data => {
            if ((!data) || (data.error)) {
                setData({ ...[], categories: [] })
                if (!data) { console.log('data is empty') }
                else { console.log(data.error) }
            } else {
                setData({ ...data, categories: data })
            }
        })
    }

    useEffect(() => {
        loadCategories()
    }, [])

    const shouldRedirect = redirect => {
     console.log(history);
        debugger
            return <Redirect to="/shop" />
     
    }


    const searchData = () => {
        //console.log(search, category)
        if (search) {
            list({ search: search || undefined, category: category })
                .then(response => {
                    if (response.error) {
                        console.log(response.error)
                    } else {
                        setData({ ...data, results: response, searched: true })
                    }
                })

        }
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        searchData();
    }

    const handleChange = (name) => event => {
        setData({ ...data, [name]: event.target.value, searched: false })
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Se encontro/aron ${results.length} producto/s`
        }
        if (searched && results.length < 1) {
            return `No se encontraron productos`
        }
    };

    const searchedProducts = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>

                <div className="row">
                    {results.map((product, i) => (<Card key={i} product={product} />))}
                </div>
            </div>
        )
    }



    //search bar populate
    const searchForm = () => (
      //  <form onSubmit={searchSubmit}>
            <span className="input-group-text">
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <select className="btn mr-2" onChange={handleChange("category")}>
                            <option value="All">Todas las categorias</option>
                            { categories.map((c, i) => (
                                <option key={i} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        type="search"
                        className="form-control"
                        onChange={handleChange("search")}
                        placeholder="Necesitas un producto en especial?"
                    />
                   
                    <MDBBtn gradient="aqua"  size="md" type="submit" className="mr-auto">Buscar</MDBBtn>


                     {/* Trate de usar el Redirect, y despues trate de usar el history y no me andan ninguno de los dos */}
                    <MDBBtn gradient="aqua"  size="md" type="button" className="mr-auto" onClick={shouldRedirect}>No funciona</MDBBtn>
                   
                   
                    {/* Como puedo hacer de llevar esto a una funcion? */}
                    <a href={`/shop/${search}`} ><strong>FUNCIONA</strong></a> 
                   
                 
            
                </div>
            </span>
       // </form>
    )

    return (
        <div className="row">
            <div className="container mb-3">
                {searchForm()}
            </div>

            <div className="container-fluid mb-3">
                {searchedProducts(results)}
            </div>
        </div>
    );
};

export default Search;

