import React from "react";
import './newMessag.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose ,faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Messag from "./Messag/Messag";

const NewMessag = ({setNewMessage}) => {
    return (
        <div className="newMessag">
            <div className="newMessag-header">
                <img    className="newMessag-header__img" 
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""></img>
                <span className="newMessag-header__sessionOn"></span>
                <p className="newMessag-header__name">Քրիստինե Խաչատրյան</p>
                <FontAwesomeIcon    className="newMessage-header__close" 
                                    icon={faClose}
                                    
                                    />
            </div>
            <div className="newMessag-container">
                <Messag/>
                <Messag/>
                <Messag/>
                <Messag/>
                <Messag/>
                <Messag/>
                <div className="newMessag-user__insertMess">
                    <input  className="newMessag-user__insertMess-text" 
                            placeholder="   Գրեք Տեքստը"/>
                    <button className="newMessag-user__insertMess-sent">
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewMessag;