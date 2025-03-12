import React, { useState } from "react";
import Header from "./Header2";
import ingredient from "../assets/ingredient.png";
import { useNavigate } from "react-router-dom";

const Packaging = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    packagingType1: "",
    packagingWeight1: "",
    packagingType2: "",
    packagingWeight2: "",
    packagingType3: "",
    packagingWeight3: "",
    packagingType4: "",
    packagingWeight4: "",
    packagingType5: "",
    packagingWeight5: "",
    packagingType6: "",
    packagingWeight6: "",
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

        <h2>Packaging</h2>

        <form onSubmit={handleSubmit} className="ingredient-form">
          <div className="form-group-grid">
            {[
              "Packaging Type 1",
              "Packaging Weight 1",
              "Packaging Type 2",
              "Packaging Weight 2",
              "Packaging Type 3",
              "Packaging Weight 3",
              "Packaging Type 4",
              "Packaging Weight 4",
              "Packaging Type 5",
              "Packaging Weight 5",
              "Packaging Type 6",
              "Packaging Weight 6",
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

          <button type="submit" className="submit-button" onClick={()=> navigate("/success")}>
            Submit to Supabase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Packaging;
