import React from "react";
import './messag.scss';

const Message = () => {
    return (
        <>
            <div className="messag-user">
                <img    className="messag-user__img" 
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""></img>
                <span className="messag-user__sessionOn"></span>
                <p className="messag-user__name">Քրիստինե Խաչատրյան</p>
                <p className="messag-user__time">15.30</p>
            </div>
            <div className="messag-user__message">
                <p className="messag-user__message-text">jhdjsahkjhfj jhjhjksahdkj jhjhjhjkh jhjhjkh sadsadjhasjdh nsadjashdjas sahdjashj</p>
            </div>
        </>
    )
}

export default Message;