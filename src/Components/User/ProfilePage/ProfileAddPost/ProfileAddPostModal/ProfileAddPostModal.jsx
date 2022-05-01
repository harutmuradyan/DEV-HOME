import React from "react";
import './profileAddPostModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileAddPostModal = (
    {   profileAddPostModal,
        setProfileAddPostModal   }
    ) => {
    
    return (
        <div className={profileAddPostModal ? "profileAddPostModal active" : "profileAddPostModal"} 
             onClick={() => {setProfileAddPostModal(false)}} >
            <div className="profileAddPostModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileAddPostModal-header">
                    <h2 className="profileAddPostModal-header__title">Ավելացնել գրառում</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileAddPostModal(false)}} 
                                     className="profileAddPostModal-header__icon"
                                     />
                </div>
                <div className="profileAddPostModal-content">
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
                <div className="profileAddPostModal-footer">
                    <button className="profileAddPostModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileAddPostModal;