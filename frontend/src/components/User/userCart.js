import React, { useContext } from 'react'
import UserNavbar from './userNavbar'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

const UserCart = () => {
    const {isAuthenticated } =  useContext(Context);
    if(!isAuthenticated){
      return <Navigate to="/"/> ;
    }
    return (
    <div>
        <UserNavbar/>
        <h1>User Cart</h1>
   
    </div>
  )
}

export default UserCart
