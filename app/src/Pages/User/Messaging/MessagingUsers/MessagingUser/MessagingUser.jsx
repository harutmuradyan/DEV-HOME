import React from "react";
import './messagingUser.scss';

const MessagingUser = ({logo , name}) => {
    return (
        <div className="messagingUserContent">
            <img    src={logo} 
                    alt=""
                    className="messagingUserContent-img"></img>
            <span className="messagingUserContent__sessionOn"></span>
            <div className="messagingUserContent-block">
                <h2 className="messagingUserContent-name">{name}</h2>
                <p className="messagingUserContent-message">Այո իհարկե</p>
            </div>
            <p className="messagingUserContent-date">18 Ապրլի</p>
        </div>
    )
}

export default MessagingUser;