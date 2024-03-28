import React, { useContext } from 'react'
import AdminNavbar from './adminNavbar'
import Footer from '../footer'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

const AdminHome = () => {
    const {isAuthenticatedAdmin } =  useContext(Context);

    if(!isAuthenticatedAdmin){
      return <Navigate to="/"/> ;
    }
  
    return (
    <div>
    <AdminNavbar/>
    <Footer/>
    </div>
  )
}

export default AdminHome
