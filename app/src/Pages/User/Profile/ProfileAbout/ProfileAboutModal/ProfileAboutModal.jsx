import React from "react";
import './profileAboutModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileAboutModal = (
    {   profileAboutModal,
        setProfileAboutModal   }
    ) => {
    
    return (
        <div className={profileAboutModal ? "profileAboutModal active" : "profileAboutModal"} 
             onClick={() => {setProfileAboutModal(false)}} >
            <div className="profileAboutModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileAboutModal-header">
                    <h2 className="profileAboutModal-header__title">Ընդհանուր տեղեկություններ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileAboutModal(false)}} 
                                     className="profileAboutModal-header__icon"
                                     />
                </div>
                <div className="profileAboutModal-content">
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
                <div className="profileAboutModal-footer">
                    <button className="profileAboutModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileAboutModal;