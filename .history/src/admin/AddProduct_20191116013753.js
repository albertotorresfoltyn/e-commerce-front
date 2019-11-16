import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom'; 
import {createProduct, getCategories } from './apiAdmin'
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";

const AddProduct = () => {
    //our state:
    const [values, setValues] = useState({
        name:'',
        description:'',
        price:'',
        categories: [],
        shipping:'',
        quantity:'',
        photo:'',
        loading: false,
        error:'',
        createdProduct:'',
        redirectToProfile: false,
        formData:'' 
    })

    const { user, token } = isAuthenticated();
    const {
        name, description, price, categories, category, shipping, quantity,
                     loading, error, createdProduct, redirectToProfile, formData} = values
                     
    //load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, categories: data, formData: new FormData() });
            }
        });
    };
    //populate & update the form data (categories)
    
    useEffect(() => {
        init();
    }, []);

    
    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    };

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error: '', loading: true})

        createProduct(user._id, token, formData).then (data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    photo: "",
                    price:"",
                    quantity:"",
                    loading: false,
                    createdProduct: data.name                 
                    });
                }
            });
    };


    const newPostForm = () => (<>
            <MDBContainer className="filters-container">
                <MDBSelect>
                    <MDBSelectInput selected="Choose your option" />
                    <MDBSelectOptions>
                        <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                        <MDBSelectOption value="1">Option nr 1</MDBSelectOption>
                        <MDBSelectOption value="2">Option nr 2</MDBSelectOption>
                        <MDBSelectOption value="3">Option nr 3</MDBSelectOption>
                    </MDBSelectOptions>
                </MDBSelect>
                <label>Material Select</label>
            </MDBContainer>
        <form onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div >
                <label>
                    <input onChange={handleChange('photo')} type="file"name="photo" accept="image/*" />
                </label>
            </div>

            <div >
                <label >Name</label>
                <input onChange={handleChange("name")} type="text"  value={name} />
            </div>

            <div >
                <label >Description</label>
                <textarea onChange={handleChange("description")}  value={description} />
            </div>

            <div >
                <label >Price</label>
                <input onChange={handleChange("price")} type="number"  value={price} />
            </div>

            <div >
                <label >Category</label>
                
                <select onChange={handleChange("category")}>
                    
                    <option>Please Select..</option> 
                    {categories && categories.map((c, i) => {debugger; return(
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    )})}

                </select>    

            </div>

            <div >
                <label >Shipping</label>
                <select onChange={handleChange("shipping")} >

                    <option>Please Select..</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>

                </select>    
            </div>

            <div >
                <label >Quantity</label>
                <input onChange={handleChange("quantity")} type="number"  value={quantity} />
            </div>

            <button className="btn btn-outline-primary">Create Product</button>

        </form></>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: createdProduct ? '' : 'none' }}>
            <h2>{`${createdProduct}`} is created!</h2>
        </div>
    );

    const showLoading = () => (
        loading && (
            <div className="alert alert-sucess">
                <h2>Loading...</h2>
            </div>
        ) 
    );

    return (
            <Layout title="Add a new Product" description={`G'day ${user.name}, ready to add a new Product?`}>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    { showLoading() }
                    { showSuccess() }
                    { showError() }
                    { newPostForm() }
                    </div>
                </div>
            </Layout>
    )

} 

export default AddProduct;