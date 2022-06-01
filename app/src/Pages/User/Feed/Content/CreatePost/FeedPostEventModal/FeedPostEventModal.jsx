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
                    <div className="feedPostEventModal-content__header">
                        <input  type="file"
                                className="feedPostEventModal-content__header-file"></input>
                        <img    src="" 
                                alt="" 
                                className="feedPostEventModal-content__header-img"></img>
                    </div>
                    <div className="feedPostEventModal-content__block">
                        <p className="feedPostEventModal-content__title">Միջոցառման տիպը</p>
                        <div className="feedPostEventModal-content__group">
                            <div className="feedPostEventModal-content__block">
                                <input  type="checkbox" 
                                        className="feedPostEventModal-content__checkbox"></input>
                                <p className="feedPostEventModal-content__text">Օնլայն</p>
                            </div>
                            <div className="feedPostEventModal-content__block">
                                <input  type="checkbox" 
                                        className="feedPostEventModal-content__checkbox"></input>
                                <p className="feedPostEventModal-content__text">Անդնական</p>
                            </div>
                        </div>
                    </div>
                    <div className="feedPostEventModal-content__block">
                        <p className="feedPostEventModal-content__title">Միջոցառման տիպը</p>
                        <select className="feedPostEventModal-content__select">
                            <option>Ընտրել</option>
                        </select>
                    </div>
                    <div className="feedPostEventModal-content__block">
                        <p className="feedPostEventModal-content__title">Ժամային գոտին</p>
                        <select className="feedPostEventModal-content__select">
                            <option>Ընտրել</option>
                        </select>
                    </div>
                    <div className="feedPostEventModal-content__group">
                        <div className="feedPostEventModal-content__block">
                            <p className="feedPostEventModal-content__text">Օր՝ Սկիզբ</p>
                            <input className="feedPostEventModal-content__input"></input>
                        </div>
                        <div className="feedPostEventModal-content__block">
                            <p className="feedPostEventModal-content__text">Ժամ՝ Սկիզբ</p>
                            <input className="feedPostEventModal-content__input"></input>
                        </div>
                    </div>
                    <div className="feedPostEventModal-content__group">
                        <div className="feedPostEventModal-content__block">
                            <p className="feedPostEventModal-content__text">Օր՝ Ավարտ</p>
                            <input className="feedPostEventModal-content__input"></input>
                        </div>
                        <div className="feedPostEventModal-content__block">
                            <p className="feedPostEventModal-content__text">Ժամ՝ Ավարտ</p>
                            <input className="feedPostEventModal-content__input"></input>
                        </div>
                    </div>
                    <div className="feedPostEventModal-content__block">
                        <p className="feedPostEventModal-content__title">Նկարագրություն</p>
                        <textarea className="feedPostEventModal-content__textare"></textarea>
                    </div>
                </div>
                <div className="feedPostEventModal-footer">
                    <button className="feedPostEventModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostEventModal;