import React, { useContext } from 'react'
import UserNavbar from './userNavbar'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

const PortfolioAdmin = () => {
  const {isAuthenticated } =  useContext(Context);
  
  
  
  if(!isAuthenticated){
    return <Navigate to="/"/> ;
  }
  return(
    <>
    <UserNavbar/>
    <h1>Admin Portfolio Page</h1>
    </>
  )
}

export default PortfolioAdmin
