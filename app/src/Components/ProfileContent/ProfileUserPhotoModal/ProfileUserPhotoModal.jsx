import React from "react";
import './profileUserPhotoModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileUserPhotoModal = (
    {   profileUserPhotoModal,
        setProfileUserPhotoModal   }
    ) => {
    
    return (
        <div className={profileUserPhotoModal ? "profileUserPhotoModal active" : "profileUserPhotoModal"} 
             onClick={() => {setProfileUserPhotoModal(false)}} >
            <div className="profileUserPhotoModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileUserPhotoModal-header">
                    <h2 className="profileUserPhotoModal-header__title">Տեղադրել լուսանկար</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileUserPhotoModal(false)}} 
                                     className="profileUserPhotoModal-header__icon"
                                     />
                </div>
                <div className="profileUserPhotoModal-content">
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
                <div className="profileUserPhotoModal-footer">
                    <button className="profileUserPhotoModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserPhotoModal;