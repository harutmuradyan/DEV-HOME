import React from "react";
import './vacanciesItemPageSendSvModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const VacanciesItemPageSendSvModal = (
    {   vacanciesItemPageSendSvModal,
        setVacanciesItemPageSendSvModal   }
    ) => {
    
    return (
        <div className={vacanciesItemPageSendSvModal ? "vacanciesItemPageSendSvModal active" : "vacanciesItemPageSendSvModal"} 
             onClick={() => {setVacanciesItemPageSendSvModal(false)}} >
            <div className="vacanciesItemPageSendSvModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="vacanciesItemPageSendSvModal-header">
                    <h2 className="vacanciesItemPageSendSvModal-header__title">Ուղղաչկել SV</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setVacanciesItemPageSendSvModal(false)}} 
                                     className="vacanciesItemPageSendSvModal-header__icon"
                                     />
                </div>
                <div className="vacanciesItemPageSendSvModal-content">
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
                <div className="vacanciesItemPageSendSvModal-footer">
                    <button className="vacanciesItemPageSendSvModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default VacanciesItemPageSendSvModal;