import React from "react";
import './feedPostPhotoModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";



const FeedPostPhotoModal = (
    {   feedPostPhotoModal,
        setFeedPostPhotoModal   }
    ) => {
    
    return (
        <div className={feedPostPhotoModal ? "feedPostPhotoModal active" : "feedPostPhotoModal"} 
             onClick={() => {setFeedPostPhotoModal(false)}} >
            <div className="feedPostPhotoModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="feedPostPhotoModal-header">
                    <h2 className="feedPostPhotoModal-header__title">Ավելացնել գրառում նկարով</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostPhotoModal(false)}} 
                                     className="feedPostPhotoModal-header__icon"
                                     />
                </div>
                <div className="feedPostPhotoModal-content">
                    <div className="feedPostPhotoModal-content__block">
                        <input type="file" className="feedPostPhotoModal-content__file"></input>
                        <div className="feedPostPhotoModal-content__btns">
                            <button className="feedPostPhotoModal-content__close">Չեղարկել</button>
                            <button className="feedPostPhotoModal-content__success">Հաստատել</button>
                        </div>
                    </div>
                    <div className="feedPostPhotoModal-content__container">
                        <div className="feedPostPhotoModal-content__header">
                            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                                    alt="" 
                                    className="feedPostPhotoModal-content__header-img"></img>
                            <div className="feedPostPhotoModal-content__header-group">
                                <p className="feedPostPhotoModal-content__header-name">Անի Ղազարյան</p>
                                <select className="feedPostPhotoModal-content__header-hideen">
                                    <option>Բոլորի համար</option>
                                </select>
                            </div>
                        </div>
                        <div className="feedPostPhotoModal-content__view">
                            <input  type="text" 
                                    placeholder="   Ինչով եք ուզում կիսվել"
                                    className="feedPostPhotoModal-content__view-about"></input>
                            
                            <FontAwesomeIcon    icon={faClose} 
                                                className="feedPostPhotoModal-content__view-close"/>
                            <img    src="" 
                                    alt="" 
                                    className="feedPostPhotoModal-content__view-photo"></img>
                        </div>
                    </div>
                </div>
                <div className="feedPostPhotoModal-footer">
                    <button className="feedPostPhotoModal-footer__btn">Տեղադրել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostPhotoModal;