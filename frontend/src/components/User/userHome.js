import React, { useContext } from 'react'
import Footer from '../footer.js'
import { Context } from '../../index.js';
import { Navigate } from 'react-router-dom';
import UserNavbar from './userNavbar.js';

const UserHome = () => {
  
  
  const {isAuthenticated } =  useContext(Context);
  
  if(!isAuthenticated){
    return <Navigate to="/"/> ;
  }
  return (
    <div>
     <UserNavbar/>
     <Footer/>
    </div>
  )
}

export default UserHome
