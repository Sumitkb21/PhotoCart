import React, { useContext, useState } from 'react'
import "./form.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHashtag,faLock,faEnvelope,faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import { Context } from '../..';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated,isAuthenticatedAdmin ,setIsAuthenticatedAdmin, setIsAuthenticated  , loading , setLoading, user, setUser} = useContext(Context);
  
    
  // axios.defaults.withCredentials = true ;
  const submitHandler = async(e)=>{
       
    e.preventDefault();
    setLoading(true);
    try {

      //first request
     const {data} = await axios.post("http://localhost:4000/api/v1/users/user/login" , 
      {
          email,
          password
       
      }
      ,{
       headers:{
         "Content-Type": "application/json",
      },
      withCredentials : true,
         
      }

      )
      // console.log(response.headers);
     
     setIsAuthenticated(true);
    //  setUser(user);
     setLoading(false);
     toast.success(data.message)
     

    }
    catch (error) {
      //  toast.error(error.response.data.message);
       setIsAuthenticated(false);
       setLoading(false);
       try {
        const {data} = await axios.post("http://localhost:4000/api/v1/users/adminLogin" , 
        {
            email,
            password
         
        }
        ,{
         headers:{
           "Content-Type": "application/json",
        },
        withCredentials : true,
           
        }
  
        )
        // console.log(response.headers);
       
       setIsAuthenticatedAdmin(true);
      //  setUser(user);
       setLoading(false);
       toast.success(data.message)
  
       } catch (error) {
        toast.error("Account not exist");
        setIsAuthenticatedAdmin(false);
        setLoading(false);
       }
  
    }
   
  };

  
  if(isAuthenticated){
    return <Navigate to={"/user/home"}/> ; 
  }
  if(isAuthenticatedAdmin){
    return <Navigate to={"/admin/home"}/> ; 
  }





return (
  <div>
  <Navbar/>
  <div className="reg">
    <h2 style={{textAlign:'center',color:'black', fontFamily: 'Helvetica Neue'}}>Login</h2>
<div className='form-container'>
<form className='card' style={{ background:'#eeeeee'}}  onSubmit={submitHandler}>
  <div className='form my-4' style={{textAlign:'center'}}>    
      
    
      <div className='text-center my-2'>
        <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<input type='email' name="email" value={email}  style={{fontFamily: 'Helvetica Neue'}} onChange={(e)=>{setEmail(e.target.value)} } placeholder='Email' required /><br />
      </div>    
      <div className='text-center my-2'>
        <FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;<input type="password" name="password" title='password must contains atleast 8 character' value={password} onChange={(e)=>{setPassword(e.target.value)} } placeholder='Password' style={{fontFamily: 'Helvetica Neue'}} spellcheck="false"  required /><br />
      </div>
      

     

      <div className='text-center my-2'>
      <button disabled={loading} id="click" type='submit' style={{border:'none',fontFamily: 'Helvetica Neue'}} >Login</button>
      </div>
      <div className='text-center my-2'>
        New user?  <Link  to="/signup" style={{fontFamily: 'Helvetica Neue'}} > Sign Up</Link>
      </div>
    </div>
  </form>
  </div>
  </div>
   
  </div>
)
}

export default Login
