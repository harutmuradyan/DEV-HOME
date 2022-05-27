import React from "react";
import './messagingUsersFunctionsModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const MessagingUsersFunctionsModal = (
    {   messagingUsersFunctionsModal,
        setMessagingUsersFunctionsModal   }
    ) => {
    
    return (
        <div className={messagingUsersFunctionsModal ? "messagingUsersFunctionsModal active" : "messagingUsersFunctionsModal"} 
             onClick={() => {setMessagingUsersFunctionsModal(false)}} >
            <div className="messagingUsersFunctionsModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="messagingUsersFunctionsModal-header">
                    <h2 className="messagingUsersFunctionsModal-header__title">Մարդկանց Նամակների ֆունկցիաներ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setMessagingUsersFunctionsModal(false)}} 
                                     className="messagingUsersFunctionsModal-header__icon"
                                     />
                </div>
                <div className="messagingUsersFunctionsModal-content">
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
                <div className="messagingUsersFunctionsModal-footer">
                    <button className="messagingUsersFunctionsModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default MessagingUsersFunctionsModal;