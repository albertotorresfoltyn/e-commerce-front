import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home   from './core/Home'
import Privateroute from './auth/PrivateRoute'
import Dashboard from './user/userDashboard'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct'
import Shop from './core/Shop'
import Product from './core/Product'
import Cart from './core/Cart'
import Orders from './admin/Orders'
import Step2 from './core/Step2'


const Routes = () => {
    return ( 
    //makes the props available on these componentes
    <BrowserRouter> 
        <Switch>
            <Route path="/"      exact component={Home}/>
            <Route path="/"      exact component={Step2}/>
            <Route path="/shop"exact component={Shop}/>
            <Route path="/signin"exact component={Signin}/>
            <Route path="/signup"exact component={Signup}/>
            <Privateroute path="/user/dashboard" exact component={Dashboard} />
            <AdminRoute  path="/admin/dashboard" exact component={AdminDashboard}/>
            <AdminRoute path="/create/category"exact component={AddCategory}/>
            <AdminRoute path="/create/product" exact component={AddProduct}/>
            <Route path="/product/:productId"exact component={Product}/>
            <Route path="/cart" exact component={Cart}/>
            <AdminRoute path="/admin/orders" exact component={Orders}/>
        </Switch>
    </BrowserRouter>
    );
};

export default Routes;