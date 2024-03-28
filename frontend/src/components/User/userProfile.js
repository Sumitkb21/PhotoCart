import React, { useContext } from 'react'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import UserNavbar from './userNavbar';
import Footer from '../footer';

const UserProfile = () => {
    const {isAuthenticated } =  useContext(Context);
  
    if(!isAuthenticated){
      return <Navigate to="/"/> ;
    }
    return (
      <div>
        
       <UserNavbar/>
       <h1>User Profile Page</h1>
       <Footer/>
      </div>
    )
}

export default UserProfile
