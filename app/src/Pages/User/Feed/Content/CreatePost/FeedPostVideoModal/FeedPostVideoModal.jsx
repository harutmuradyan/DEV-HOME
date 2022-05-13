import React from "react";
import './feedPostVideoModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const FeedPostVideoModal = (
    {   feedPostVideoModal,
        setFeedPostVideoModal   }
    ) => {
    
    return (
        <div className={feedPostVideoModal ? "feedPostVideoModal active" : "feedPostVideoModal"} 
             onClick={() => {setFeedPostVideoModal(false)}} >
            <div className="feedPostVideoModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="feedPostVideoModal-header">
                    <h2 className="feedPostVideoModal-header__title">Ավելացնել գրառում Տեսահոլովակով</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostVideoModal(false)}} 
                                     className="feedPostVideoModal-header__icon"
                                     />
                </div>
                <div className="feedPostVideoModal-content">
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
                <div className="feedPostVideoModal-footer">
                    <button className="feedPostVideoModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostVideoModal;