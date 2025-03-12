import React  from "react";
import parameter from "../assets/parameters.png"; 
import { FiList, FiBox, FiTruck, FiPackage, FiTag, FiZap } from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    {icon: <FiList />, label: "View weekly research list"},
    {icon: <FiBox />, label: "Ingredients"},
    {icon: <FiTag />, label: "Products"},
  ];
  return (
    <div className="sidebar">
      <img src={parameter} alt="Parameter Logo" className="parameter logo" />
      <ul>
        {menuItems.map((item, index) => (
        <li key={index}>
            {item.icon}
            {item.label}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
