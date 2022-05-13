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
                <div className="feedPostPhotoModal-footer">
                    <button className="feedPostPhotoModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostPhotoModal;