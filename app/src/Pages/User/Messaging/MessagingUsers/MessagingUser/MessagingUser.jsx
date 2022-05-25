import React from "react";
import './messagingUser.scss';

const MessagingUser = () => {
    return (
        <div className="messagingUserContent">
            <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""
                    className="messagingUserContent-img"></img>
            <div className="messagingUserContent-block">
                <h2 className="messagingUserContent-name">Լիլիթ Համբարցումյան</h2>
                <p className="messagingUserContent-message">Այո իհարկե</p>
            </div>
            <p className="messagingUserContent-date">18 Ապրլի</p>
        </div>
    )
}

export default MessagingUser;