import React, { useState } from 'react';
import style from "./navbar.module.css";

const Navbar = () => {

    
        const [inputValue, setInputValue] = useState('');
        const [staticData, setStaticData] = useState('');
      
        const handleInputChange = (e) => {
          setInputValue(e.target.value);
        };
        const handleInputClick = () => {
            
            setStaticData(['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']);
          };


  return (
    <>
      <div className={style.nav}>
        <h2 style={{ marginRight: "700px",marginLeft:"20px" }}> 🎄    Mantine</h2>

        <p >Features</p>
        <p >Pricing</p>
        <p >Learn</p>
        <p >Community</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="search"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          style={{
            margin: "12px",
            width: "220px",
            backgroundColor: "transparent",
            border: "1px solid #ccc",
            borderRadius:"5px",
            padding:"8px",
            
          }}
          placeholder=" 🔍   Search "
        
        />
        <div>{staticData}</div>
      </div>
      </div>
    </>
  );
};


export default Navbar;
