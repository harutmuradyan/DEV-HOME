import React from "react";
import './networkNotfication.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const NetworkNotification = () => {
    return (
        <div className="networkNotification">
            <img className="networkNotification-img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
            <div className="networkNotification-block">
                <p className="networkNotification-block__name">Քրիստինե Խաչատրյան</p>
                <p className="networkNotification-block__work">Developer</p>
            </div>
            <FontAwesomeIcon className="networkNotification-accept" icon={faCheck}/>
            <FontAwesomeIcon className="networkNotification-close" icon={faClose}/>
        </div>
    )
}

export default NetworkNotification;