import React from "react";
import './profileLicenseModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileLicenseModal = (
    {   profileLicenseModal,
        setProfileLicenseModal   }
    ) => {
    
    return (
        <div className={profileLicenseModal ? "profileLicenseModal active" : "profileLicenseModal"} 
             onClick={() => {setProfileLicenseModal(false)}} >
            <div className="profileLicenseModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileLicenseModal-header">
                    <h2 className="profileLicenseModal-header__title">Լիազորագրեր</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileLicenseModal(false)}} 
                                     className="profileLicenseModal-header__icon"
                                     />
                </div>
                <div className="profileLicenseModal-content">
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
                <div className="profileLicenseModal-footer">
                    <button className="profileLicenseModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileLicenseModal;