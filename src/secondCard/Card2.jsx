import React from "react";
import style from "./index.module.css";
import running from "./running.jpg";

const Card2 = () => {
  return (
    <>
      <div className={style.container}>
        <img
          className={style.img}
          src={running}
          alt="runningImage"
          style={{ borderRadius: "10px 10px 0px 0px" }}
        />
        <div className={style.flex}>
          <h4 className={style.heading}>Running challenge</h4>
          <h5 className={style.completed}>82% Completed </h5>
          <span className={style.progress_bar}></span>
        </div>
        <p className={style.description}>
          56 km this month • 17% improvement compared to last month • 443 place
          in global scoreboard
        </p>
        <br />
        <hr />
        <div className={style.footer}>
        <h4 style={{marginLeft:"12px" ,color:"grey", fontWeight:"500"}}>Distance</h4>
        <h4 style={{color:"grey", fontWeight:"500"}}>Avg.speed</h4>
        <h4 style ={{marginRight:"12px",color:"grey", fontWeight:"500"}}>Score</h4>
        </div>
<div className={style.score}>
        <h3 style={{marginLeft:"12px",marginTop:"-10px", fontWeight:"500" }}>27.4Km</h3>
        <h3 style={{marginTop:"-10px",fontWeight:"500",marginLeft:"20px"}}>7.4Km/h</h3>
        <h3 style={{marginRight:"8px" ,marginTop:"-10px",fontWeight:"500", }}>85/100</h3>
        </div>
      </div>
    </>
  );
};

export default Card2;
