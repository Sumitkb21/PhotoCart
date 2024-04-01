import React, { useContext, useEffect } from 'react'
import Home from './components/NotLogin/home.js'
import {Routes,Route} from 'react-router-dom'
import Portfolio from './components/NotLogin/portfolioForNotlogin.js'
import Login from './components/NotLogin/login.js'
import Signup from './components/NotLogin/signup.js'
import UserHome from './components/User/userHome.js'
import UserProfile from './components/User/userProfile.js'
import UserCart from './components/User/userCart.js'
import PortfolioAdmin from './components/User/portfolioAdmin.js'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { Context } from './index.js'
import AdminHome from './components/Admin/adminHome.js'
import AdminPortfolio from './components/Admin/portfolio.js'
import AdminProfile from './components/Admin/adminProfile.js'
import ClickedImage from './components/NotLogin/clickedimage.js'

const App = () => {

  const {user , setUser ,isAuthenticatedAdmin ,setIsAuthenticatedAdmin , setIsAuthenticated, setLoading} = useContext(Context);


  useEffect(() => {

    setLoading(true);
   
    axios.get("http://localhost:4000/api/v1/users/userHome",{
      withCredentials:true,
    })
    .then(res=>{
      setUser(res.data.user);
      console.log(res.data.user);
      // console.log(user)
      setIsAuthenticated(true);
      // setIsAuthenticated(false);
      setLoading(false);

    })
    .catch((error)=>{
      console.log(error.response.data.message);
      setUser({});
      setIsAuthenticated(false);
      setLoading(false);
    })




    setLoading(true);

    axios.get("http://localhost:4000/api/v1/users/adminHome",{
      withCredentials:true,
    })
    .then(res=>{
      setUser(res.data.user);
      console.log(res.data.user);
      setIsAuthenticatedAdmin(true);
      setLoading(false);

    })
    .catch((error)=>{
      console.log(error.response.data.message);
      setUser({});
      setIsAuthenticatedAdmin(false);
      setLoading(false);
    })
}, [])
  


  return(
    <>
    <Routes>
    <Route path="/" element= {<Home/>}/>;
    <Route path="/user/home" element= {<UserHome/>}/>;
    <Route path="/user/profile" element= {<UserProfile/>}/>;
    <Route path="/user/cart" element= {<UserCart/>}/>;
    <Route path="/user/adminportfolio" element= {<PortfolioAdmin/>}/>;

    <Route path="/adminportfolio" element= {<Portfolio/>}/>;
    <Route path="/login" element= {<Login/>}/>;
    <Route path="/signup" element= {<Signup/>}/>;

    <Route path="/admin/home" element= {<AdminHome/>}/>;
    <Route path="/admin/portfolio" element= {<AdminPortfolio/>}/>;
    <Route path="/admin/profile" element= {<AdminProfile/>}/>;
    
    <Route path="/clickedimage" element= {<ClickedImage/>}/>;


    </Routes>
    <Toaster/>
    </>
  )
}

export default App
