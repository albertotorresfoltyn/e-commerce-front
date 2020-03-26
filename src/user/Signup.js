import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Layout from "../core/Layout";
import { signup } from '../auth';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput,
    MDBCardImage
  } from "mdbreact";
  import Background from '../resources/empresa.jpg';

  var sectionStyle = {
    backgroundColor:"beige"
   };

const Signup = () => {
    
    const [values, setValues] = useState({
        //our state that will change with the input values, this should be updated
        name:'',
        email:'',
        password:'',
        error:'',
        success: false, 
         
    });

    const {name, email, password, success, error} = values 

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value });
    };

   


    const clickSubmit = (event) => {
        event.preventDefault() //browser doesnt reload when click submit
        setValues({...values, error: false});
        signup({ name, email, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error, success: false})
            } else {
                setValues({
                    ...values,
                    name:'',
                    email:'',
                    password:'',
                    error:'',
                    success: true,
                })
            }
        }) 
    }

    const signUpForm = () => (


<div className="m-auto" style={sectionStyle}>
<MDBContainer >
      <MDBRow>
        <MDBCol md="6" className="m-auto ">
          <MDBCard className="mb-5 mt-5">
          <MDBCardImage
            className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 '
            tag='div'
          >
        <h3 className="my-3">
                  <MDBIcon icon="lock" /> Registración
                </h3>
          </MDBCardImage>
            <MDBCardBody>
          
              <form>
                <div className="grey-text">
                <MDBInput
                    label="Nombre completo"
                    icon="user"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleChange('name')}
                    value={name}
                  />
                  <MDBInput
                    label="Correo"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleChange('email')}
                    value={email}
                  />
                  <MDBInput
                    label="Contraseña"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={handleChange('password')}
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="primary"
                  className="mb-3"
                  type="submit"
                  onClick={clickSubmit}
                  value={password}
                >
                  Registrarse
                </MDBBtn>
              </div>
              </form>
              <hr></hr>
              <div className="font-weight-light text-center">
                  <p>Ya contás con un usuario?  <Link className=""  to="/signin">Ingresar</Link></p>  
                </div>
        
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>

    );

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{display: success ? '' : 'none'}}>
            New account created. Please <Link to="/signin">Signin</Link>
        </div>
    )

    return(
        <Layout title="Signup" description="Signup to Ecommerce" className="">
            { showSuccess() }
            { showError() }
            { signUpForm() }
        </Layout>
    ); 
};

export default Signup;

//{ JSON.stringify(values) } -> display the JSON created