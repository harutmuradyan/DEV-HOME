import React from "react";
import './aboutDescUpdate.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const AboutDescUpdate = (
    {   aboutDescUpdate,
        setAboutDescUpdate   }
    ) => {
    
    return (
        <div className={aboutDescUpdate ? "aboutDescUpdate active" : "aboutDescUpdate"} 
             onClick={() => {setAboutDescUpdate(false)}} >
            <div className="aboutDescUpdate-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="aboutDescUpdate-header">
                    <h2 className="aboutDescUpdate-header__title">Ընդհանուր տեղեկություններ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setAboutDescUpdate(false)}} 
                                     className="aboutDescUpdate-header__icon"
                                     />
                </div>
                <div className="aboutDescUpdate-content">
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>
                <div className="aboutDescUpdate-footer">
                    <button className="aboutDescUpdate-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default AboutDescUpdate;