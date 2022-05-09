import React from "react";
import './goPremium.scss';

import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoPremium = () => {
    return (
        <div className="goPremium">
            <p className="goPremium__title">Մուտք ավելի մեծ հնարավորություններին</p>
            <div className="goPremium__block">
                <FontAwesomeIcon    className="goPremium-block__icon" 
                                    icon={faBlog}/>
                <p className="goPremium__text">Փորձեք Վճարվող տարբերակը</p>
            </div>
        </div>
    )
}

export default GoPremium;