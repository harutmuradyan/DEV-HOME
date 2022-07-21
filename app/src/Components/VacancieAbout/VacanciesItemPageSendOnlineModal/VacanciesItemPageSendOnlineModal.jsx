import React from "react";
import './vacanciesItemPageSendOnlineModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const VacanciesItemPageSendOnlineModal = (
    {   vacanciesItemPageSendOnlineModal,
        setVacanciesItemPageSendOnlineModal   }
    ) => {
    
    return (
        <div className={vacanciesItemPageSendOnlineModal ? "vacanciesItemPageSendOnlineModal active" : "vacanciesItemPageSendOnlineModal"} 
             onClick={() => {setVacanciesItemPageSendOnlineModal(false)}} >
            <div className="vacanciesItemPageSendOnlineModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="vacanciesItemPageSendOnlineModal-header">
                    <h2 className="vacanciesItemPageSendOnlineModal-header__title">Ուղղարկել ՕՆլայն</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setVacanciesItemPageSendOnlineModal(false)}} 
                                     className="vacanciesItemPageSendOnlineModal-header__icon"
                                     />
                </div>
                <div className="vacanciesItemPageSendOnlineModal-content">
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
                <div className="vacanciesItemPageSendOnlineModal-footer">
                    <button className="vacanciesItemPageSendOnlineModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default VacanciesItemPageSendOnlineModal;