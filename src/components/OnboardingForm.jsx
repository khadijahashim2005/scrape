import React, { useState } from "react";
import logo from "../assets/logo.png";
const OnboardingForm = () => {
  const [formData, setFormData] = useState({ organization: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        <div className="onboarding-header">
          <h1>Carbon Tag Client Onboarding</h1>
          <img src={logo} alt="SCR4PE Logo" className="onboarding-logo" />
        </div>
        <form onSubmit={handleSubmit} className="onboarding-form">
          <div className="form-group">
            <label>Organization Name:</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingForm;