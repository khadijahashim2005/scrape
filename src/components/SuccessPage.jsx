import React, { useState } from "react";
import Header from "./Header2";
import ingredient from "../assets/ingredient.png";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const navigate = useNavigate()
    return (
      <div className="success-container">
        <div className="success-card">
          <div  className="header-icon">
            <Header />
            <img src={ingredient} alt="ingredient" className="form-ingredient" />
          </div>
  
          <h2>Success Page</h2>
          <button type="submit" className="submit-button" onClick={()=> navigate("/")}>
            Home
          </button>
        </div>
      </div>
    );
  };
  
  export default SuccessPage;
  