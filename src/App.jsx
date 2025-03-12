import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Header from "./components/Header";
import InfoPanel from './components/InfoPanel';
import OnboardingForm from './components/OnboardingForm';
import IngredientPage from './components/IngredientPage';
import ProductPage from './components/ProductPage'
import LinkIngredients from './components/LinkIngredients';
import PackagingPage from './components/PackagingPage';
import SuccessPage from './components/SuccessPage';

const MainPage =() => {
  return(
    <div className='app'>
      <Sidebar />
      <div className='main-content'>
        <Header />
        <Table />
        <InfoPanel />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main application page */}
        <Route path="/" element={<MainPage />} />

        {/* Onboarding page */}
        <Route path="/onboarding" element={<OnboardingForm />} />

        {/* Add an Ingredient Page */}
        <Route path="/ingredient" element={<IngredientPage />} />

        {/* Add an Product Page */}
        <Route path="/product" element={<ProductPage />} />

        {/* Add an Link Ingredients Page */}
        <Route path="/link" element={<LinkIngredients />} />

        {/* Add an Packaging Page */}
        <Route path="/packaging" element={<PackagingPage />} />
        
        {/* Add an Success Page */}
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;