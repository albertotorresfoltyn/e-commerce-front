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
        descriptionLg:'',
        wayUse:'',
        tags:[],
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
        name, description, descriptionLg, wayUse, tags ,price, categories, category, shipping, quantity,
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
        var value = (name === 'photo' )? event.target.files[0] : event.target.value;
        if (name == 'tags' )  value = value.split(" ");

       
        formData  && formData.set(name, value);
        setValues({...values, [name]: value})
        // if (name === 'photos'){
        //     console.log(event.target.files[0]);
        //     console.log(JSON.stringify(event.target.files[0]));
        //     console.log(value);
        //     debugger

        //     var reader = new FileReader();
        // var file =event.target.files[0];
    
        // reader.onload = function(upload) {
        //     var fileData = {
        //         file: {
        //         // name: upload.target.name,
        //         // size: upload.target.size,
        //         // type: upload.target.type,
        //         type : upload.target.result.split(",")[0],
        //         data: upload.target.result.split(",")[1]
        //         }
        //     }
        //     var arra = [fileData,fileData,fileData];
        //     formData  && formData.set('photos', JSON.stringify(arra));
        // };
    
        // reader.readAsDataURL(file);

        


            
      
    };

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error: '', loading: true})
     
        formData  && formData.set('tags', JSON.stringify(formData.get('tags').split(",")));
       

        createProduct(user._id, token, formData).then (data => {
            debugger 
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    descriptionLg:"",
                    wayUse:"",
                    tags:[],
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
            <h4>Imágenes</h4>
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
            <div className="form-group">
                <label >Description Larga</label>
                <textarea className="form-control" rows="3" onChange={handleChange("descriptionLg")}  value={descriptionLg} />
            </div>
            <div className="form-group">
                <label >Forma de Utilización</label>
                <textarea className="form-control" rows="3" onChange={handleChange("wayUse")}  value={wayUse} />
            </div>
            <div className="form-group">
                <label >Tags Relacionados</label>
                <textarea className="form-control" rows="3" onChange={handleChange("tags")}  value={tags} />
            </div>
            <div  className="form-group">
                <label >Precio</label>
                <input className="form-control" onChange={handleChange("price")} type="number"  value={price} />
            </div>
            <div  className="form-group">
                <label >Categoría</label> 
                <select className="browser-default custom-select" onChange={handleChange("category")}>
                    <option disabled selected>Please Select..</option> 
                    {categories && categories.map((c, i) => {return(
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    )})}
                </select>
            </div>
            <div  className="form-group">
                <label >Shipping</label>
                <select className="browser-default custom-select" onChange={handleChange("shipping")} >
                    <option>Please Select..</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>    
            </div>
            <div >
                <label >Cantidad</label>
                <input className="form-control" onChange={handleChange("quantity")} type="number"  value={quantity} />
            </div>
            <button className="btn btn-outline-primary">Crear Producto</button>
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