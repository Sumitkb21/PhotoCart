import React, { useEffect, useState } from "react";
import Navbar from "./navbar.js";
import Footer from "../footer.js";
import axios from "axios";
import { FaEye, FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./home.css";
import { Link } from "react-router-dom";
  
const Home = () => {
  const navigate = useNavigate();

  const [upcomingImages, setUpcomingImages] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    if (!searchString) {
      setSearchResults(upcomingImages); // Display all appointments when search is empty
      return;
    }

    // const searchString = e.target.value.toLowerCase();
    const resultsArray = upcomingImages.filter((image) =>
      Object.values(image).some(
        (value) =>
          typeof value == "string" && value.toLowerCase().includes(searchString)
      )
    );
    setSearchResults(resultsArray);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/users/getall", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.Images);
        setUpcomingImages(res.data.Images);
        setSearchResults(res.data.Images);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="home-body">
      <Navbar />
      <div className="search__input-container">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="Search Image"
          onChange={handleSearchChange}
        />
        <FaSearch className="search__icon" />
      </div>

      <div className="home-container">
        <div className="image-grid">
          {searchResults.map((image) => (
            <div className="image-container">
            
           <div onClick={()=>{
            navigate('/clickedimage' , {state: {image , upcomingImages}})
           }}>
                <div className="image-box" key={image._id}>
                  <img src={image.image.url} alt={image.name} />
                </div>
           </div>
              <div className="image-details">
                <h3>{image.name}</h3>
                <span>${image.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
  // return (
  //   <div>
  //    <Navbar/>

  //    <Footer/>
  //   </div>
  // )
};

export default Home;
