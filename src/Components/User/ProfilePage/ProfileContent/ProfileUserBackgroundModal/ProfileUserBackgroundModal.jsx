import React from "react";
import './profileUserBackgroundModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileUserBackgroundModal = (
    {   profileUserBackgroundModal,
        setProfileUserBackgroundModal   }
    ) => {
    
    return (
        <div className={profileUserBackgroundModal ? "profileUserBackgroundModal active" : "profileUserBackgroundModal"} 
             onClick={() => {setProfileUserBackgroundModal(false)}} >
            <div className="profileUserBackgroundModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileUserBackgroundModal-header">
                    <h2 className="profileUserBackgroundModal-header__title">Տեղադրել ետևի ֆոն</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileUserBackgroundModal(false)}} 
                                     className="profileUserBackgroundModal-header__icon"
                                     />
                </div>
                <div className="profileUserBackgroundModal-content">
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
                <div className="profileUserBackgroundModal-footer">
                    <button className="profileUserBackgroundModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserBackgroundModal;