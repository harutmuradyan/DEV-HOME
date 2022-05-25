import React from "react";
import './messaging.scss';

import MessagingSession from "./MessagingSession/MessagingSession";
import MessagingUsers from "./MessagingUsers/MessagingUsers";
import MessangingFooter from "./MessangingFooter/MessangingFooter";


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
                <MessangingFooter/>
            </div>
        </div>
    )
}

export default Messaging;