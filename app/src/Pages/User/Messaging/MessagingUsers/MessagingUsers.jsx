import React,{useState} from "react";
import './messagingUsers.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faMessage , 
            faBars , 
            faSearch , faBarsProgress} from "@fortawesome/free-solid-svg-icons";

import MessagingUser from "./MessagingUser/MessagingUser";
import MessagingUsersFunctionsModal from "./MessagingUsersFunctionsModal/MessagingUsersFunctionsModal";

import { useSelector } from "react-redux";

const MessagingUsers = () => {

    const [messagingUsersFunctionsModal , setMessagingUsersFunctionsModal] = useState(false)

    const {users} = useSelector((state) => state.user)

    return (
        <div className="messagingUsersContent">
            <div className="messagingUsersContent-header">
                <h2 className="messagingUsersContent-header__title">Նամակներ</h2>
                <div className="messagingUsersContent-header__block">
                    <FontAwesomeIcon    icon={faBars} 
                                        className="messagingUsersContent-header__bars"
                                        onClick={() => {setMessagingUsersFunctionsModal(true)}}
                                        />
                    <FontAwesomeIcon    icon={faMessage} 
                                        className="messagingUsersContent-header__message"/>
                </div>
                <MessagingUsersFunctionsModal   messagingUsersFunctionsModal={messagingUsersFunctionsModal}
                                                setMessagingUsersFunctionsModal={setMessagingUsersFunctionsModal}
                />
            </div>
            <div className="messagingUsersContent-search">
                    <FontAwesomeIcon    icon={faSearch} 
                                        className="messagingUsersContent-search__icon"/>
                    <input  placeholder="  Փնտրել Նամակներ" 
                            className="messagingUsersContent-search__input"/>
                    <FontAwesomeIcon    icon={faBarsProgress} 
                                        className="messagingUsersContent-search__sort"/>
            </div>
            <div className="messagingUsersContent-users">
                {
                    users.map((u) => {
                        return  <MessagingUser  key={u.id} 
                                                name={u.name} 
                                                logo={u.logo}/>
                    })
                }
            </div>
        </div>
    )
}

export default MessagingUsers;