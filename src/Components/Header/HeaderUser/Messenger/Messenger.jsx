import React from "react";
import './messenger.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import NewMessag from "./NewMessag/NewMessag";
import MessengerBtns from "./MessengerBtns/MessengerBtns";

const Messenger = ({messenger,setMessenger}) => {
    return (
        <div className={messenger ? "messenger active" : "messenger"}>
            <div className="messenger-btns">
                <img className="messenger-btns__logo" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                <p className="messenger-btns__title">Նամակագրություն</p>
                <div className="messenger-btns__group">
                    <button className="messenger-btns__item">
                        <FontAwesomeIcon icon={faUpLong} onClick={() => {setMessenger(false)}}/>
                    </button>
                    <button className="messenger-btns__item">
                        <FontAwesomeIcon icon={faMessage}/>
                    </button>
                </div>
            </div>
            <div className="messenger-container messengerBtns-blocks">
                <div className="messenger-search">
                    <FontAwesomeIcon icon={faSearch} className="messenger-search__icon"/>
                    <input className="messenger-search__input" placeholder="    Փնտրել"/>
                </div>
                <MessengerBtns/>
            </div>
            <div className="messenger-container newMessage_item">
                <NewMessag/>
            </div>
        </div>
    )
}

export default Messenger;