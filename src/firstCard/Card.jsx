import React from "react";
import style from "./index.module.css";
import beach from "./beach.jpg";
const Card = () => {
  return (
    <>
      <div className={style.card}>
        <img
          className={style.img}
          style={{ borderRadius: "10px 10px 0px 0px" }}
          src={beach}
          alt="beach"
        />
        <h3 className={style.heading}>
          Verudela Beach
          <span
            style={{
              marginLeft: "14px",
              fontSize: "10px",
              backgroundColor: "rgb(172, 200, 236)",
              color: "rgb(38, 132, 221)",
              fontWeight: "bold",
              padding: "4px",
              borderRadius: "12px",
            }}
          >
            CROATIA
          </span>
        </h3>
        <p className={style.description}>
          Completely renovated for the season 2020, Arena Verudela Bech
          Apartments are fully equipped and modernly furnished 4-star
          self-service apartments located on the Adriatic coastline by one of
          the most beautiful beaches in Pula.
        </p>
        <hr />
        <p className={style.perfect}>PERFECT FOR YOU, IF YOU ENJOY</p>
        <div className={style.footer}>
          <p className={style.test}>☀️ SUNNY WEATHER</p>
          <p className={style.test}>🦓 ONSITE ZOO</p>
          <p className={style.test}>🌊 SEA</p>
          <br />
          <p className={style.test}>🌲 NATURE</p>
          <p className={style.test}>🤽 WATER SPORTS</p>
        </div>
        <hr />
        <button className={style.btn}>Show details</button>
        <button className={style.hrt}>❤️</button>
      </div>
    </>
  );
};

export default Card;
