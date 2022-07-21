import React from "react";
import './profileSkillsModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileSkillsModal = (
    {   profileSkillsModal,
        setProfileSkillsModal   }
    ) => {
    
    return (
        <div className={profileSkillsModal ? "profileSkillsModal active" : "profileSkillsModal"} 
             onClick={() => {setProfileSkillsModal(false)}} >
            <div className="profileSkillsModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileSkillsModal-header">
                    <h2 className="profileSkillsModal-header__title">Հմտություններ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileSkillsModal(false)}} 
                                     className="profileSkillsModal-header__icon"
                                     />
                </div>
                <div className="profileSkillsModal-content">
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
                <div className="profileSkillsModal-footer">
                    <button className="profileSkillsModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSkillsModal;