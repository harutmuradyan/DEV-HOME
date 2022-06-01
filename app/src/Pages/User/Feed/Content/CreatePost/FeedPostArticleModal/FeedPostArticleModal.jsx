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
                    <div className="feedPostArticleModal-content__container">
                        <div className="feedPostArticleModal-content__header">
                            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                                    alt="" 
                                    className="feedPostArticleModal-content__header-img"></img>
                            <div className="feedPostArticleModal-content__header-group">
                                <p className="feedPostArticleModal-content__header-name">Անի Ղազարյան</p>
                                <select className="feedPostArticleModal-content__header-hideen">
                                    <option>Բոլորի համար</option>
                                </select>
                            </div>
                        </div>
                        <div className="feedPostArticleModal-content__view">
                            <p className="feedPostArticleModal-content__view-title">Ինչով եք ուզում կիսվել `</p>
                            <textarea  className="feedPostArticleModal-content__view-about"></textarea>
                        </div>
                    </div>
                </div>
                <div className="feedPostArticleModal-footer">
                    <button className="feedPostArticleModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostArticleModal;