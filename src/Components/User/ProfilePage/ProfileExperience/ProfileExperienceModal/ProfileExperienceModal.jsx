import React from "react";
import './profileExperienceModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileExperienceModal = (
    {   profileExperienceModal,
        setProfileExperienceModal   }
    ) => {
    
    return (
        <div className={profileExperienceModal ? "profileExperienceModal active" : "profileExperienceModal "} 
             onClick={() => {setProfileExperienceModal(false)}} >
            <div className="profileExperienceModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileExperienceModal-header">
                    <h2 className="profileExperienceModal-header__title">ԱՇԽԱՏԱՆՔԱՅԻՆ ՓՈՐՁ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileExperienceModal(false)}} 
                                     className="profileExperienceModal-header__icon"
                                     />
                </div>
                <div className="profileExperienceModal-content">
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
                <div className="profileExperienceModal-footer">
                    <button className="profileExperienceModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileExperienceModal;