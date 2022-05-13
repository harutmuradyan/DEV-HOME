import React from "react";
import './profileUniversityModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileUniversityModal = (
    {   profileUniversityModal,
        setProfileUniversityModal   }
    ) => {
    
    return (
        <div className={profileUniversityModal ? "profileUniversityModal active" : "profileUniversityModal"} 
             onClick={() => {setProfileUniversityModal(false)}} >
            <div className="profileUniversityModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileUniversityModal-header">
                    <h2 className="profileUniversityModal-header__title">Ուսուցում</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileUniversityModal(false)}} 
                                     className="profileUniversityModal-header__icon"
                                     />
                </div>
                <div className="profileUniversityModal-content">
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
                <div className="profileUniversityModal-footer">
                    <button className="profileUniversityModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileUniversityModal;