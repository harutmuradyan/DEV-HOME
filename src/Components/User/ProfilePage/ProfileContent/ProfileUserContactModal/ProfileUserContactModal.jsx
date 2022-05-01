import React from "react";
import './profileUserContactModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileUserContactModal = (
    {   profileUserContactModal,
        setProfileUserContactModal   }
    ) => {
    
    return (
        <div className={profileUserContactModal ? "profileUserContactModal active" : "profileUserContactModal"} 
             onClick={() => {setProfileUserContactModal(false)}} >
            <div className="profileUserContactModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileUserContactModal-header">
                    <h2 className="profileUserContactModal-header__title">Կապի տվյալներ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileUserContactModal(false)}} 
                                     className="profileUserContactModal-header__icon"
                                     />
                </div>
                <div className="profileUserContactModal-content">
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
                <div className="profileUserContactModal-footer">
                    <button className="profileUserContactModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserContactModal;