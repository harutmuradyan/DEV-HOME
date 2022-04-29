import React from "react";
import './message.scss';

const Message = () => {
    return (
        <>
            <div className="newMessage-user">
                <img className="newMessage-user__img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                <p className="newMessage-user__name">Քրիստինե Խաչատրյան</p>
                <p className="newMessage-user__time">15.30</p>
            </div>
            <div className="newMessage-user__message">
                <p className="newMessage-user__message-text">jhdjsahkjhfj jhjhjksahdkj jhjhjhjkh jhjhjkh sadsadjhasjdh nsadjashdjas sahdjashj</p>
            </div>
        </>
    )
}

export default Message;