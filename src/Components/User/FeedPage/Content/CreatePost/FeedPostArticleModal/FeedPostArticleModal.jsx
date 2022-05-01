import React from "react";
import './feedPostArticleModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const FeedPostArticleModal = (
    {   feedPostArticleModal,
        setFeedPostArticleModal   }
    ) => {
    
    return (
        <div className={feedPostArticleModal ? "feedPostArticleModal active" : "feedPostArticleModal"} 
             onClick={() => {setFeedPostArticleModal(false)}} >
            <div className="feedPostArticleModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="feedPostArticleModal-header">
                    <h2 className="feedPostArticleModal-header__title">Գրել Հոդված</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostArticleModal(false)}} 
                                     className="feedPostArticleModal-header__icon"
                                     />
                </div>
                <div className="feedPostArticleModal-content">
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
                <div className="feedPostArticleModal-footer">
                    <button className="feedPostArticleModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostArticleModal;