import React from "react";
import './darkBtn.scss';

const DangerBtn = ({text,followHandler}) => {
    return (
        <button className="dangerBtn" 
                onClick={followHandler}>
            {text}
        </button>
    )
}

export default DangerBtn;