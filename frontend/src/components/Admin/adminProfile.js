import React, { useContext } from 'react'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import Footer from '../footer';
import AdminNavbar from './adminNavbar';


const AdminProfile = () => {
    const {isAuthenticatedAdmin } =  useContext(Context);
  
    if(!isAuthenticatedAdmin){
      return <Navigate to="/"/> ;
    }
    return (
      <div>
       <AdminNavbar/>
       <h1>Admin Profile Page</h1>
       <Footer/>
      </div>
    )
}

export default AdminProfile
