import React, { useState } from "react";
import Header from "./Header2";
import ingredient from "../assets/ingredient.png"; 
import { useNavigate } from "react-router-dom";

const LinkIngredients = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    ingredientName: "",
    percentageOfProduct: "",
    meansOfTransport1: "",
    meansOfTransport2: "",
    meansOfTransport3: "",
    distancePreProcessing1: "",
    distancePreProcessing2: "",
    distancePreProcessing3: "",
    distancePostProcessing1: "",
    distancePostProcessing2: "",
    distancePostProcessing3: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="ingredient-container">
      <div className="ingredient-card">
        <div  className="header-icon">
          <Header />
          <img src={ingredient} alt="ingredient" className="form-ingredient" />
        </div>

        <h2>Link Ingredients to Product</h2>

        <form onSubmit={handleSubmit} className="ingredient-form">
            <div className="form-group">
              <label>Ingredient Name *</label>
              <input
                type="text"
                name="ingredientName"
                value={formData.ingredientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Percentage of Product *</label>
              <input
                type="number"
                name="percentageOfProduct"
                value={formData.percentageOfProduct}
                onChange={handleChange}
                required
              />
            </div>

          <div className="form-group-grid">
            {[
              "Means of Transport 1",
              "Distance Pre-Processing 1",
              "Distance Post-Processing 1",
              "Means of Transport 2",
              "Distance Pre-Processing 2",
              "Distance Post-Processing 2",
              "Means of Transport 3",
              "Distance Pre-Processing 3",
              "Distance Post-Processing 3",
            ].map((field) => (
              <div className="form-group" key={field}>
                <label>{field}</label>
                <select
                  name={field.toLowerCase().replace(/\s+/g, "")}
                  value={formData[field.toLowerCase().replace(/\s+/g, "")]}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </select>
              </div>
            ))}
          </div>

          <div className="button-group">
          <button type="button" className="submit-button" onClick={()=> navigate("/ingredient")}>
              Add new ingredient
            </button>
            <button type="button" className="submit-button" onClick={()=> navigate("/link")}>
              Add ingredient
            </button>
            <button type="submit" className="submit-button" onClick={()=> navigate("/packaging")}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LinkIngredients;
