import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const InfoPanel = () => {
  const [info, setInfo] = useState(null);

  useEffect(() =>{
    const fetchInfo = async () =>{
      let {data, error} = await supabase.from("sources").select("*").limit(1).single();
      if (error) {
        console.error("Error fetching info:", error);
      }else{
        setInfo(data);
      }
    };
    fetchInfo();
  }, []);
  
  return (
    <div className="info-panel">
      {info ? (
        <>
          <div className="info-section source-section">
            <h3>Source:</h3>
            <p>
              {info.authors} ({info.year}). {info.title}. <em>{info.journal}, {info.volume}({info.issue})</em>, {info.pages}.{" "}
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                {info.link}
              </a>
            </p>
          </div>

          <div className="info-section score-section">
            <h3>Reliability Score:</h3>
            <div className="score-box">
              <h1>{info.reliability_score}</h1>
              <button className="score-reason">{info.score_reason}</button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading information...</p>
      )}
    </div>
  );
};

export default InfoPanel;