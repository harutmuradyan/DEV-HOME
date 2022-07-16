import React from "react";
import './lightBtn.scss';

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LightBtn = ({text , followHandler , closeIcon}) => {
    return (
        <button className="lightBtn" 
                onClick={followHandler}>
            
            {
                closeIcon  ? <FontAwesomeIcon  icon={faClose} 
                                                className="icon-close"/>
                            : ""
            }

            {text}
        </button>
    )
}

export default LightBtn;