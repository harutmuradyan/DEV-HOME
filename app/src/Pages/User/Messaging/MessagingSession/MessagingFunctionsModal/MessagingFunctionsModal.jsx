import React from "react";
import './messagingFunctionsModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const MessagingFunctionsModal = (
    {   messagingFunctionsModal,
        setMessagingFunctionsModal   }
    ) => {
    
    return (
        <div className={messagingFunctionsModal ? "messagingFunctionsModal active" : "messagingFunctionsModal"} 
             onClick={() => {setMessagingFunctionsModal(false)}} >
            <div className="messagingFunctionsModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="messagingFunctionsModal-header">
                    <h2 className="messagingFunctionsModal-header__title">Նամակների ֆունկցիաներ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setMessagingFunctionsModal(false)}} 
                                     className="messagingFunctionsModal-header__icon"
                                     />
                </div>
                <div className="messagingFunctionsModal-content">
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
                <div className="messagingFunctionsModal-footer">
                    <button className="messagingFunctionsModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default MessagingFunctionsModal;