import React from "react";
import './card.css';


const Card = ({ children, styles }) => (
    <div className={styles.Card}   >
        {children}
    </div>
);

export default Card;