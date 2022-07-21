import React from "react";
import './profileUserContactModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faClose , 
            faPen , 
            faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const ProfileUserContactModal = (
    {   profileUserContactModal,
        setProfileUserContactModal   }
    ) => {
    
    return (
        <div className={profileUserContactModal ? "profileUserContactModal active" : "profileUserContactModal"} 
             onClick={() => {setProfileUserContactModal(false)}} >
            <div className="profileUserContactModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="profileUserContactModal-header">
                    <h2 className="profileUserContactModal-header__title">Կապի տվյալներ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setProfileUserContactModal(false)}} 
                                     className="profileUserContactModal-header__icon"
                                     />
                </div>
                <div className="profileUserContactModal-content">
                    <div className="profileUserContactModal-content__header">
                        <h1 className="profileUserContactModal-content__title">կապ հաստատելու տվյալներ</h1>
                        <FontAwesomeIcon    className="profileUserContactModal-content__update" 
                                            icon={faPen}/>
                    </div>
                    <div className="profileUserContactModal-content__blocks">
                        <h2 className="profileUserContactModal-content__blocks-logo">D/H</h2>
                        <div className="profileUserContactModal-content__block">
                            <div className="profileUserContactModal-content__block">
                                <p className="profileUserContactModal-content__block-title">Ձեր էջը</p>
                                <Link to="">http://localhost:3000/profile/AndranikXachatryan201336</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profileUserContactModal-content__blocks">
                    <FontAwesomeIcon    className="profileUserContactModal-content__blocks-icon" 
                                        icon={faEnvelope}/>
                        <div className="profileUserContactModal-content__block">
                            <div className="profileUserContactModal-content__block">
                                <p className="profileUserContactModal-content__block-title">Ձեր Էլեկտրոնային հասցեն</p>
                                <button className="profileUserContactModal-content__block-mail">AndranikXachatryan@gmail.com</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profileUserContactModal-footer">
                    <button className="profileUserContactModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserContactModal;