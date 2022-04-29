import React from "react";
import Message from "./Message/Message";
import './messageGroup.scss'

const MessageGroup = () => {
    return (
        <div className="messageGroup">
            <Message/>
            <Message/>
            <Message/>
        </div>
    )
}

export default MessageGroup;