import React from "react";
import './toAskNotfication.scss'

import SuccessBtn from "../../UI/SuccessBtn/SuccessBtn";
import LightBtn from "../../UI/LightBtn/LightBtn";


const ToAskNotfication = () => {
    return (
        <div className="toAskNotfication">
            <img    className="toAskNotfication-img" 
                    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""></img>
            <div className="toAskNotfication-block">
                <p className="toAskNotfication-block__name">Քրիստինե Խաչատրյան</p>
                <p className="toAskNotfication-block__work">Developer</p>
            </div>
            <SuccessBtn text="Հաստատել" 
                        acceptIcon="acceptIcon"/>
            <LightBtn   text="Չեղարկել"
                        closeIcon="closeIcon"></LightBtn>
        </div>
    )
}

export default ToAskNotfication;