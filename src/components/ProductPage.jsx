import React, { useState } from "react";
import Header from "./Header2";
import ingredient from "../assets/ingredient.png"; 
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    productName: "",
    unitWeight: "",
    category: "",
    destinationCountry: "",
    storageEmission: "",
    mixing: "",
    storageTime: "",
    storageCapacity: "",
    organisationID: "",
    clientID: "",
    clientName: "",
    meansOfTransport1: "",
    meansOfTransport2: "",
    meansOfTransport3: "",
    distance1: "",
    distance2: "",
    distance3: "",
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

        <h2>Adding a new Product</h2>

        <form onSubmit={handleSubmit} className="ingredient-form">
            <div className="form-group">
              <label>Product Name *</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Unit Weight (g) *</label>
              <input
                type="number"
                name="unitWeight"
                value={formData.unitWeight}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

          <div className="form-group-grid">
            {[
              "Destination Country",
              "Storage Emission",
              "Mixing",
              "Storage Time",
              "Storage Capacity",
              "Organisation ID",
              "Client ID",
              "Client Name",
              "Means of Transport 1",
              "Distance 1",
              "Means of Transport 2",
              "Distance 2",
              "Means of Transport 3",
              "Distance 3",
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

          <button type="submit" className="submit-button" onClick={()=> navigate("/link")}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
