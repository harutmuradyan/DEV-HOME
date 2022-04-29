import React from "react";
import './chat.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import NewMessage from "./NewMessage/NewMessage";
import MessagesBtns from "./MessagesBtns/MessagesBtns";

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat-btns">
                <img className="chat-btns__logo" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                <p className="chat-btns__title">Նամակագրություն</p>
                <div className="chat-btns__group">
                    <button className="chat-btns__item">
                        <FontAwesomeIcon icon={faUpLong}/>
                    </button>
                    <button className="chat-btns__item">
                        <FontAwesomeIcon icon={faMessage}/>
                    </button>
                </div>
            </div>
            <div className="chat-container messagesBtns-blocks">
                <div className="chat-search">
                    <FontAwesomeIcon icon={faSearch} className="chat-search__icon"/>
                    <input className="chat-search__input" placeholder="    Փնտրել"/>
                </div>
                <MessagesBtns/>
            </div>
            <div className="chat-container newMessage_item">
                <NewMessage/>
            </div>
        </div>
    )
}

export default Chat;