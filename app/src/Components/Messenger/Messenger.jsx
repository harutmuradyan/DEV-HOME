import React, {useState} from "react";
import './messenger.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUpLong , 
            faMessage , 
            faSearch } from "@fortawesome/free-solid-svg-icons";

import NewMessag from "./NewMessag/NewMessag";
import MessagingUser from "../MessagingUsers/MessagingUser/MessagingUser";

const Messenger = () => {

    const [messenger , setMessenger] = useState(false);
    const [newMessage , setNewMessage] = useState(false);

    return (
        <div className="messenger">
            <div className="messenger-btns">
                <img    className="messenger-btns__logo" 
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""
                        onClick={() => {setMessenger(true)}}
                        ></img>
                <span className="messenger-btns__sessionOn"></span>
                <p className="messenger-btns__title">Նամակագրություն</p>
                <div className="messenger-btns__group">
                    <button className="messenger-btns__item">
                        <FontAwesomeIcon    icon={faUpLong} 
                                            onClick={() => {setMessenger(false)}}/>
                    </button>
                    <button className="messenger-btns__item">
                        <FontAwesomeIcon    icon={faMessage} 
                                            onClick={() => {setNewMessage(true)}}/>
                    </button>
                </div>
            </div>
            <div className={messenger ? "messengerContent active" : "messengerContent"}>
                <div className="messenger-container messengerBtns-blocks">
                    <div className="messenger-search">
                        <FontAwesomeIcon    icon={faSearch} 
                                            className="messenger-search__icon"/>
                        <input  className="messenger-search__input" 
                                placeholder="    Փնտրել"/>
                    </div>
                    <MessagingUser/>
                </div>
            </div>
            <div className={newMessage ? "messenger-newMessage active" : "messenger-newMessage"}>
                <NewMessag />
            </div>
        </div>
    )
}

export default Messenger;