import React from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom'; 

const Dashboard = () => {

    const {
            user: { _id, name, email, role} 
          } = isAuthenticated();

    const userLinks = () => {
              return (
                  <div className="card">
                      <h4 className="card-header">Opciones de Usuario</h4>
                      <ul className="list-group">
                          <li className="list-group-item">
                              <Link className="nav-link" to="/cart">Mi Carrito</Link>
                          </li>

                          <li className="list-group-item">
                              <Link className="nav-link" to="/profile/update">Modificar Perfil</Link>  
                          </li>  
                      
                      </ul>
                  
                  </div>

              );
          };

    const userInfo = () => {
        return (
            <div className="card mb-5">
            <h3 className="card-header">Información de Usuario</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{role === 1 ? "Admin": "Registered User"} </li>
            </ul>
        </div> 
        );
    };

    const purchaseHistory = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Historial de Compra</h3>
                    <ul className="list-group">
                        <li className="list-group-item">historial</li>
                    </ul>
            </div> 
        )
    }
    
    return (
        <Layout title="Dashboard" description={`Great Day ${name}!`} className="container-fluid">
            <div className="row">
                <div className="col-3">
                    { userLinks() }
                </div>
                <div className="col-9">
                    { userInfo() }
                    { purchaseHistory() }
                </div>
            </div>       
        </Layout>
    );
  
};

export default Dashboard;