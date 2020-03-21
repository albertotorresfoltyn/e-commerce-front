import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from '../auth';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput
  } from "mdbreact";
  import Background from '../resources/empresa.jpg';


var sectionStyle = {
  backgroundImage: `url(${Background})`
};
//import { set } from 'mongoose';


const Signin = () => {
    
    const [values, setValues] = useState({
        //our state that will change with the input values, this should be updated
        email:'your@mail.com',
        password:'password',
        error:'',
        loading: false,
        redirectToReferrer: false, 
    });

    const {email, password, loading, error, redirectToReferrer} = values;
    const {user} = isAuthenticated() 

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = (event) => {
        event.preventDefault() //browser doesnt reload when click submit
        setValues({...values, error: false, loading: true });
        signin({email, password})
        .then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false})
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true,
                    });
                }); //second argument for authenticate
            }
        }); 
    };

    const signUpForm = () => (

<div className="m-auto" style={sectionStyle}>
<MDBContainer >
      <MDBRow>
        <MDBCol md="6" className="m-auto ">
          <MDBCard className="mb-5 mt-5">
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Ingreso
                </h3>
              </MDBCardHeader>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Correo"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleChange('email')}
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
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                  onClick={clickSubmit}
                >
                  Ingresar
                </MDBBtn>
              </div>
              </form>
              <hr></hr>
              <div className="font-weight-light text-center">
                  <p>No contas con un usuario?  <Link className=""  to="/signup">Registrarte</Link></p>  
                  <p>No recuerdas la contraseña?  <Link className=""  to="/signup">Recuperar Contraseña</Link> </p>
                </div>
        
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>

        // <form>
        //     <div className="form-group">
        //         <label className="text-muted">Email</label>
        //         <input onChange={handleChange('email')} type="email" className="form-control" placeholder={email}/>
        //     </div>
            
        //     <div className="form-group">
        //         <label className="text-muted">Password</label>
        //         <input onChange={handleChange('password')} type="password" className="form-control" placeholder={password}/>
        //     </div>

        //     <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
            

        // </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )

    const showLoading = () => 
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );
    
    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if(isAuthenticated()) {
            return <Redirect  to="/" />;
        }
    }; 



       
    return(
        <Layout title="SignIn" description="SignIn to Ecommerce" className="">
            { showLoading() }
            { showError() }
            { signUpForm() }
            { redirectUser() }
        </Layout>
    ); 
};

export default Signin;
