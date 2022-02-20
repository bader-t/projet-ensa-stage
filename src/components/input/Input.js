import React from "react";
import './input.css';


const Input = (props) => (
    <div className={props.design}>
        <input type={props.type} placeholder={props.placeholder} name={props.name} />
    </div>
);

export default Input;