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
                <img    src="https://converge.colorado.edu/wp-content/uploads/2021/04/ss_Social-Work.jpg" 
                        alt="asd" 
                        className="servicesBlock-background__img"></img>
            </div>
        </div>
    )
}

export default ServicesBlock;
