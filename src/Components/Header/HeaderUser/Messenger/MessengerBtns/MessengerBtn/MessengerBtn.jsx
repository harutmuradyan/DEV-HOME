import React from "react";
import './messengerBtn.scss';

const MessengerBtn= () => {
    return (
        <div className="messengerBtn-block">
            <img className="messengerBtn-block__img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
            <p className="messengerBtn-block__name">Մարինե Գասպարյան</p>
            <p className="messengerBtn-block__time">14:20</p>
        </div>
    )
}

export default MessengerBtn;