import React, { useContext } from 'react'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import AdminNavbar from './adminNavbar';

const AdminPortfolio = () => {
  const {isAuthenticatedAdmin } =  useContext(Context);

  if(!isAuthenticatedAdmin){
    return <Navigate to="/"/> ;
  }
  return(
    <>
    <AdminNavbar/>
    <h1>Admin Portfolio Page</h1>
    </>
  )
}

export default AdminPortfolio