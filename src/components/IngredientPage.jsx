import React, { useState } from "react";
import Header from "./Header2";
import ingredient from "../assets/ingredient.png";
import { useNavigate } from "react-router-dom";

const AddIngredient = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    ingredientName: "",
    originCountry: "",
    category: "",
    harvestMethod: "",
    yieldPerHectare: "",
    directEmissions: "",
    wasteEmissions: "",
    electricityEmissions: "",
    processingFactor: "",
    yieldPerAnimal: "",
    furtherProcessing: "",
    manureEmissions: "",
    landUseEmissions: "",
    fertilizerEmissions: "",
    organic: "",
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

        <h2>Adding a new Ingredient</h2>

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
            <label>Origin Country *</label>
            <input
              type="text"
              name="originCountry"
              value={formData.originCountry}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-grid">
            {[
              "Category",
              "Harvest Method",
              "Yield per Hectare",
              "Direct Emissions",
              "Waste Emissions",
              "Electricity Emissions",
              "Processing Factor",
              "Yield per Animal",
              "Further Processing",
              "Manure Emissions",
              "Land Use Emissions",
              "Fertilizer Emissions",
              "Organic",
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
          <button type="button" className="submit-button" onClick={()=> navigate("/product")}>Back to Product Page</button>
          <button type="button" className="submit-button" onClick={()=> navigate("/success")}>Submit to Supabase</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddIngredient;
