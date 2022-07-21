import React from "react";
import './profileSearchWorkBtnModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ProfileSearchWorkBtnModal = (
    {   profileSearchWorkBtnModal,
        setProfileSearchWorkBtnModal   }
    ) => {
    
    return (
        <div className={profileSearchWorkBtnModal ? "profileSearchWorkBtnModal active" : "profileSearchWorkBtnModal"} 
             onClick={() => {setProfileSearchWorkBtnModal(false)}} >
            <div className="profileSearchWorkBtnModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileSearchWorkBtnModal-header">
                    <h2 className="profileSearchWorkBtnModal-header__title">Նշեք որ աշխատանք եք փնտրում</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileSearchWorkBtnModal(false)}} 
                                     className="profileSearchWorkBtnModal-header__icon"
                                     />
                </div>
                <div className="profileSearchWorkBtnModal-content">
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
                <div className="profileSearchWorkBtnModal-footer">
                    <button className="profileSearchWorkBtnModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileSearchWorkBtnModal;