import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from '../auth';
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
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" placeholder={email}/>
            </div>
            
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" placeholder={password}/>
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
            

        </form>
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
        <Layout title="SignIn" description="SignIn to Ecommerce" className="container col-md-8 offset-md-2">
            { showLoading() }
            { showError() }
            { signUpForm() }
            { redirectUser() }
        </Layout>
    ); 
};

export default Signin;
