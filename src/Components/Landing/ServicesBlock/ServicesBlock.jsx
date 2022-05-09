import React from "react";
import './servicesBlock.scss';

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicesBlock = () => {
    return(
        <div className="servicesBlock">
            <div className="servicesBlock-content">
                <h1 className="servicesBlock-content__title">Բարի գալուստ Մասնագետների աշխարհ</h1>
                <div className="servicesBlock-content__links">
                    <button className="servicesBlock-content__item">
                        Փնտրել նոր աշխատանք
                        <FontAwesomeIcon icon={faRightFromBracket} 
                                         className="servicesBlock-content__item-icon"/>
                    </button>
                    <button className="servicesBlock-content__item">
                        Գտիր Նոր ընկերներ
                        <FontAwesomeIcon icon={faRightFromBracket} 
                                         className="servicesBlock-content__item-icon"/>
                    </button>
                    <button className="servicesBlock-content__item">
                        Ավելացրու Իմացություններտ
                        <FontAwesomeIcon icon={faRightFromBracket} 
                                         className="servicesBlock-content__item-icon"/>
                    </button>
                </div>
            </div>
            <div className="servicesBlock-background">
                <img    src="https://images.squarespace-cdn.com/content/v1/5d01440fc4bd93000125725d/1616616510334-DSTJFK6A7UD51T52EA5H/CalendarHero-HeroImage.png" 
                        alt="asd" 
                        className="servicesBlock-background__img"></img>
            </div>
        </div>
    )
}

export default ServicesBlock;
