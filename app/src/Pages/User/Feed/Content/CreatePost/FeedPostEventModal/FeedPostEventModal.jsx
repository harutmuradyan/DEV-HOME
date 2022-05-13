import React from "react";
import './feedPostEventModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const FeedPostEventModal = (
    {   feedPostEventModal,
        setFeedPostEventModal   }
    ) => {
    
    return (
        <div className={feedPostEventModal ? "feedPostEventModal active" : "feedPostEventModal "} 
             onClick={() => {setFeedPostEventModal(false)}} >
            <div className="feedPostEventModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="feedPostEventModal-header">
                    <h2 className="feedPostEventModal-header__title">Ստեղծել միջոցառում</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostEventModal(false)}} 
                                     className="feedPostEventModal-header__icon"
                                     />
                </div>
                <div className="feedPostEventModal-content">
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
                <div className="feedPostEventModal-footer">
                    <button className="feedPostEventModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostEventModal;