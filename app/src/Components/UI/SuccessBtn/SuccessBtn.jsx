import React from "react";
import './successBtn.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessBtn = ({text,followHandler,acceptIcon}) => {
    return (
        <button className="successBtn" 
                onClick={followHandler}>
            {
                acceptIcon  ? <FontAwesomeIcon   icon={faCheck} 
                                            className="icon-accept"/>
                            : ""
            }

            {text}
        </button>
    )
}

export default SuccessBtn;