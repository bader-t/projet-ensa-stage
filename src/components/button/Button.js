import React from "react";
import './button.css';


const Button = (props) => (
  
        <button onClick={handleClick} className={props.type} value={props.value}>{props.title}</button>
    
);
const handleClick=()=>{
    console.log("teste");
}

export default Button;