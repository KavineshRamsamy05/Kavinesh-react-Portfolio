import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_data from "../../assets/services_data";


const Services = () => {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleExpand = (index) => {
    const expandedIndex = expandedIndices.indexOf(index);
    if (expandedIndex === -1) {
      setExpandedIndices([...expandedIndices, index]);
    } else {
      const newIndices = [...expandedIndices];
      newIndices.splice(expandedIndex, 1);
      setExpandedIndices(newIndices);
    }
  };

  return (
    <div id="services" className="services">
      <div className="title">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="img" />
      </div>
      <div className="services-container">
        {Services_data.map((service, index) => {
          const isExpanded = expandedIndices.includes(index);
          return (
            <div key={index} className="services-format">
              <div>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p className="r-more">
                  {isExpanded ? service.s_desc_more : service.s_desc}
                  <p onClick={() => toggleExpand(index)}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </p>
                </p>
                  
                
              </div>
              {/* <div className="services-readmore">
                <p>Read more</p>
                <img src={arrow_icon} alt="img" />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
