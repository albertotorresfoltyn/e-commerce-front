import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom'; 
import {createProduct, getCategories } from './apiAdmin'
import {MDBInput, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBContainer } from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
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

        {<form onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div >
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                        Upload
                        </span>
                    </div>
                    <div className="custom-file">
                        <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={handleChange('photo')}
                        name="photo"
                        accept="image/*"
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
                        </label>
                    </div>
                </div>
            </div>
            <div  className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
                <input className="form-control" onChange={handleChange("name")} type="text"  value={name} />
            </div>
            <div className="form-group">
                <label >Description</label>
                <textarea className="form-control" rows="3" onChange={handleChange("description")}  value={description} />
            </div>
            <div >
                <label >Price</label>
                <input className="form-group" onChange={handleChange("price")} type="number"  value={price} />
            </div>
            <div >
                <label >Category</label> 
                <select className="browser-default custom-select" onChange={handleChange("category")}>
                    <option disabled selected>Please Select..</option> 
                    {categories && categories.map((c, i) => {debugger; return(
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    )})}
                </select>
            </div>
            <div >
                <label >Shipping</label>
                <select className="browser-default custom-select" onChange={handleChange("shipping")} >
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
        </form>}
        </>
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