import React from "react";
import './messaging.scss';

import MessagingSession from "../../../Components/MessagingSession/MessagingSession";
import MessagingUsers from "../../../Components/MessagingUsers/MessagingUsers";

const Messaging = () => {
    return (
        <div className="messaging">
            <div className="messagingUsers">
                <MessagingUsers/>
            </div>
            <div className="messagingItems">
                <MessagingSession/>
            </div>
            <div className="messagingFooter">
                
            </div>
        </div>
    )
}

export default Messaging;