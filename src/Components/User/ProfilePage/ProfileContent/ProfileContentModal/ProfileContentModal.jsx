import React from "react";
import './profileContentModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileContentModal = (
    {   profileContentModal,
        setProfileContentModal   }
    ) => {
    
    return (
        <div className={profileContentModal ? "profileContentModal active" : "profileContentModal"} 
             onClick={() => {setProfileContentModal(false)}} >
            <div className="profileContentModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileContentModal-header">
                    <h2 className="profileContentModal-header__title">Տեղեկություններ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileContentModal(false)}} 
                                     className="profileContentModal-header__icon"
                                     />
                </div>
                <div className="profileContentModal-content">
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
                <div className="profileContentModal-footer">
                    <button className="profileContentModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileContentModal;