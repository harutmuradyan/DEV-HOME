import React from "react";
import './networkNotfication.scss'

import SuccessBtn from "../../../../../Components/UI/SuccessBtn/SuccessBtn";
import LightBtn from "../../../../../Components/UI/LightBtn/LightBtn";


const NetworkNotification = () => {
    return (
        <div className="networkNotification">
            <img    className="networkNotification-img" 
                    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""></img>
            <div className="networkNotification-block">
                <p className="networkNotification-block__name">Քրիստինե Խաչատրյան</p>
                <p className="networkNotification-block__work">Developer</p>
            </div>
            <SuccessBtn text="Հաստատել" 
                        acceptIcon="acceptIcon"/>
            <LightBtn   text="Չեղարկել"
                        closeIcon="closeIcon"></LightBtn>
        </div>
    )
}

export default NetworkNotification;