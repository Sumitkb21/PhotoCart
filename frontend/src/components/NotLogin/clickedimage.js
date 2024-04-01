import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import "./home.css";

const ClickedImage = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  


  console.log("this is ", location.state);
  const { image, upcomingImages } = location.state || {};
  console.log("this is ", upcomingImages);
  console.log("this is ", image);
  const [showResults, setShowResults] = useState([]);

 

  useEffect(() => {
    const handlePopstate = () => {
     window.scrollTo({ top: 0, behavior: "auto" }); // You can adjust behavior as needed
    };
    handlePopstate();

  }, [image]);

  //   useEffect(() => {
  //     // Scroll to the top of the page when component mounts
  //     window.scrollTo({ top: 0, behavior: 'auto' }); // You can adjust behavior as needed
  //   }, [image]); // Empty dependency array ensures this effect runs only on mount

  useEffect(() => {
    if (!image) {
      setShowResults(upcomingImages); // Display all appointments when search is empty
      return;
    }
    // Filter images based on criteria (e.g., same name)
    const filteredImages = upcomingImages.filter((img) => {
      return (
        img.name === image.name || // Match by name
        img.category === image.category // Match by category
      );
    });

    setShowResults(filteredImages);
  }, [image, upcomingImages]); // Update when image or upcomingImages change

  if (!image || !upcomingImages) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <div className="image-box" key={image._id}>
        <img src={image.image.url} alt={image.name} />
      </div>

      <div className="image-grid">
        {showResults.map((image) => (
          <div className="image-container">
            <div
              onClick={() => {
                navigate("/clickedimage", { state: { image, upcomingImages } });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
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
      <h1>clicked images</h1>
    </div>
  );
};

export default ClickedImage;
