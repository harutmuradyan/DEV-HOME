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
                    <div className="feedPostVideoModal-content__block">
                        <input  type="file" 
                                className="feedPostVideoModal-content__file"></input>
                        <div className="feedPostVideoModal-content__btns">
                            <button className="feedPostVideoModal-content__close">Չեղարկել</button>
                            <button className="feedPostVideoModal-content__success">Հաստատել</button>
                        </div>
                    </div>
                    <div className="feedPostVideoModal-content__container">
                        <div className="feedPostVideoModal-content__header">
                            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                                    alt="" 
                                    className="feedPostVideoModal-content__header-img"></img>
                            <div className="feedPostVideoModal-content__header-group">
                                <p className="feedPostVideoModal-content__header-name">Անի Ղազարյան</p>
                                <select className="feedPostVideoModal-content__header-hideen">
                                    <option>Բոլորի համար</option>
                                </select>
                            </div>
                        </div>
                        <div className="feedPostVideoModal-content__view">
                            <input  type="text" 
                                    placeholder="   Ինչով եք ուզում կիսվել"
                                    className="feedPostVideoModal-content__view-about"></input>
                            
                            <FontAwesomeIcon    icon={faClose} 
                                                className="feedPostVideoModal-content__view-close"/>
                            <img    alt=""
                                    src=""  
                                    className="feedPostVideoModal-content__view-video"></img>
                        </div>
                    </div>
                </div>
                <div className="feedPostVideoModal-footer">
                    <button className="feedPostVideoModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostVideoModal;