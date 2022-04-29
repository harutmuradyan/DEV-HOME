import React from "react";
import './messageBtn.scss'

const MessageBtn = () => {
    return (
        <div className="messageBtn-block">
            <img className="messageBtn-block__img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
            <p className="messageBtn-block__name">Մարինե Գասպարյան</p>
            <p className="messageBtn-block__time">14:20</p>
        </div>
    )
}

export default MessageBtn;