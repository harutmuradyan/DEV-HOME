import React,{useState} from "react";
import './messagingSession.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faBars , 
            faImage  } from "@fortawesome/free-solid-svg-icons";


import MessagingSessionItem from "./MessagingSessionItem/MessagingSessionItem";
import MessagingFunctionsModal from "./MessagingFunctionsModal/MessagingFunctionsModal";

const MessagingSession = () => {

    const [messagingFunctionsModal , setMessagingFunctionsModal] = useState(false);

    return (
        <div className="messagingSession">
            <div className="messagingSession-header">
                <div className="messagingSession-header__block">
                    <h2 className="messagingSession-header__name">Աննա Մանգասարյան</h2>
                    <div className="messagingSession-header__sessionOn">
                        <span></span>
                        <p>Կայքում է</p>
                    </div>
                </div>
                <FontAwesomeIcon    icon={faBars} 
                                    className="messagingSession-header__icon"
                                    onClick={() => {setMessagingFunctionsModal(true)}}
                                    />
                <MessagingFunctionsModal    messagingFunctionsModal={messagingFunctionsModal} 
                                            setMessagingFunctionsModal={setMessagingFunctionsModal}/>
            </div>
            
            <div className="messagingSession-content">
                <MessagingSessionItem text="packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"/>
                <MessagingSessionItem text="packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"/>
                <MessagingSessionItem text="packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"/>
                <MessagingSessionItem text="packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"/>
                <MessagingSessionItem text="packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"/>
            </div>
            <div className="messagingSession-new">
                <textarea   placeholder="  Գրել նամակ" 
                            className="messagingSession-new__item" 
                            rows="5" 
                            cols="10"
                            />
            </div>
            <div className="messagingSession-btns">
                <div className="messagingSession-btns__block">
                    <button className="messagingSession-btns__image">
                        <FontAwesomeIcon icon={faImage}/>
                    </button>
                </div>
                <button className="messagingSession-btns__sent">Ուղղարկել</button>
            </div>
        </div>
    )
}

export default MessagingSession;