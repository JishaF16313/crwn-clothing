import React from "react";
import "./menuitems.styles.scss";
const Menuitems = ({title,imageUrl,id,size}) => {
  return (
    <div  className={`${size} menu-item`}>

      <div className="background-image" style={{
backgroundImage:`url(${imageUrl})`
    }}/>

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOPE NOW</span>
      </div>
    </div>
   
  );
};

export default Menuitems;
