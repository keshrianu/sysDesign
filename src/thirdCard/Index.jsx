import React from "react";
import style from "./index.module.css";

const Index = () => {
  return (
    <>
      <div className={style.card}>
        <div className={style.head}>
          <h3 style={{ fontSize: "19px", fontWeight: "700" }}>Services</h3>
          <p style={{ color: "grey", fontSize: "17px", fontWeight: "400" }}>
            +21 other services
          </p>
        </div>
        <div className={style.flexrow}>
          <div className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
              💳
            </div>

            <span className={style.des}>Credit cards</span>
          </div>
          <div className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
             🏦
            </div>
            <span className={style.des}>Banks nearby</span>
          </div>
          <div style={{ marginRight: "27px" }} className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
              🔁
            </div>
            <span className={style.des}> &nbsp;Transfers</span>
          </div>
        </div>
        <div className={style.flexrow}>
          <div className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
             💰
            </div>
            <span className={style.des}> &nbsp; Refunds</span>
          </div>
          <div className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
              🧾
            </div>
            <span className={style.des}> &nbsp; Receipts</span>
          </div>
          <div style={{ marginRight: "27px" }} className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
              🏢
            </div>
            <span className={style.des}> &nbsp; &nbsp; Taxes</span>
          </div>
        </div>
        <div className={style.flexrow}>
          <div className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
              🏢
            </div>
            <span className={style.des}> &nbsp; Reports</span>
          </div>
          <div className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "39px",
                marginTop: "16px",
              }}
            >
             💲
            </div>
            <span className={style.des}> &nbsp; Payments</span>
          </div>
          <div style={{ marginRight: "27px" }} className={style.flex}>
            <div
              style={{
                fontSize: "35px",
                marginLeft: "30px",
                marginTop: "16px",
              }}
            >
             💴
            </div>
            <span className={style.des}> &nbsp; Cashback</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
