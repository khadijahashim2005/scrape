import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../supabaseClient';

const Table = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      let {data, error} = await supabase.from("ingredients").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      }else{
        setData(data);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="table-container">
      <div className="button-group">
        <button className="create-button" onClick={()=> navigate("/ingredient")}>+ Add Ingredient</button>
        <button className="create-button"onClick={()=> navigate("/product")}>+ Add Product</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Electricity</th>
            <th>Land Use Emissions</th>
            <th>Unique ID</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.electricity || "N/A"}</td> {/* Check if electricity is needed */}
                <td>{item.emissions}</td>
                <td>{item.id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading data...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
