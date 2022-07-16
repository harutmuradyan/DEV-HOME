import React from "react";
import './darkBtn.scss';

const DarkBtn = ({text,followHandler}) => {
    return (
        <button className="darkBtn" 
                onClick={followHandler}>
            {text}
        </button>
    )
}

export default DarkBtn;