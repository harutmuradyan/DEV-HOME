import React from "react";
import './messagingSessionItem.scss';

const MessagingSessionItem = ({text}) => {
    return (
        <div className="messagingSessionItem">
            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""
                    className="messagingSessionItem-img"></img>
            <div className="messagingSessionItem-block">
                <h2 className="messagingSessionItem-name">Լիլիթ Համբարցումյան</h2>
                <p className="messagingSessionItem-message">{text}</p>
            </div>
            <p className="messagingSessionItem-date">18 Ապրլի</p>
        </div>
    )
}

export default MessagingSessionItem;