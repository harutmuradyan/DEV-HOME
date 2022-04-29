import React from "react";
import './newMessage.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import MessageGroup from "./Messages/MessageGroup";

const NewMessage = () => {
    return (
        <div className="newMessage">
            <div className="newMessage-header">
                <img className="newMessage-header__img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                <p className="newMessage-header__name">Քրիստինե Խաչատրյան</p>
                <FontAwesomeIcon className="newMessage-header__close" icon={faClose}/>
            </div>
            <div className="newMessage-container">
                <MessageGroup/>
                <div className="newMessage-user__message">
                    <p className="newMessage-user__message-text">jhdjsahkjhfj jhjhjksahdkj jhjhjhjkh jhjhjkh sadsadjhasjdh nsadjashdjas sahdjashj</p>
                </div>
                <div className="newMessage-user__insertMess">
                    <input className="newMessage-user__insertMess-text" placeholder="   Գրեք Տեքստը"/>
                    <button className="newMessage-user__insertMess-sent">
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewMessage;