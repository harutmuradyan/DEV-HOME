import React , {useState} from "react";
import { Link } from "react-router-dom";
import './headerUser.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUsers , 
            faGraduationCap , 
            faHome , 
            faMessage , 
            faBell , 
            faBriefcase , 
            faBars} from "@fortawesome/free-solid-svg-icons";

import ModalUser from "./ModalUser/ModalUser";
import ModalServices from "./ModalServices/ModalServices";
import Chat from "./Messenger/Messenger";
import ModalSearch from "./ModalSearch/ModalSearch";


const HeaderUser = () => {

    const [userModal,setUserModal] = useState(false);
    const [servicesModal,setServicesModal] = useState(false);
    const [messenger,setMessenger] = useState(false);
    const [modalSearch,setModalSearch] = useState(false);

    return (
        <header className="header">
            <div className="headerUser">
                <div className="headerUser-content">
                    <div className="headerUser-content__logo">
                        <Link   to="/index" 
                                className="headerUser-content__logo">
                            <h1>DEV HOME</h1>
                        </Link>
                    </div>
                    <div className="headerUser-content__search">
                        <ModalSearch    modalSearch={modalSearch} 
                                        setModalSearch={setModalSearch}/>
                        <input  placeholder="  Փնտրել" 
                                onClick={() => {setModalSearch(true)}}/>
                    </div>
                    <nav className="headerUser-content__nav">
                        <ul className="headerUser-content__block">
                            <li className="headerUser-content__item">
                                <Link to="/index">
                                    <FontAwesomeIcon    icon={faHome}  
                                                        className="headerUser-content__item-icon"/>
                                </Link>
                            </li>
                            <li className="headerUser-content__item">
                                <Link   to="/network" 
                                        className="headerUser-content__item">
                                    <FontAwesomeIcon    icon={faUsers}  
                                                        className="headerUser-content__item-icon"/>
                                    <span className="count"></span>
                                </Link>
                            </li>
                            <li className="headerUser-content__item">
                                <Link   to="/learning" 
                                        className="headerUser-content__item">
                                    <FontAwesomeIcon    icon={faGraduationCap} 
                                                        className="headerUser-content__item-icon"/>
                                    <span className="count"></span>
                                </Link>
                            </li>
                            <li className="headerUser-content__item">
                                <Link   to="/vacancies" 
                                        className="headerUser-content__item">
                                    <FontAwesomeIcon    icon={faBriefcase} 
                                                        className="headerUser-content__item-icon"/>
                                    <span className="count"></span>
                                </Link>
                            </li>

                            <li className="headerUser-content__item" 
                                onClick={() => {setMessenger(true)}}>
                                <FontAwesomeIcon    icon={faMessage} 
                                                    className="headerUser-content__item-icon"/>
                                <span className="count"></span>
                            </li>
                            <Chat   messenger={messenger} 
                                    setMessenger={setMessenger}/>
                            <li className="headerUser-content__item">
                                <Link   to="/notification" 
                                        className="headerUser-content__item">
                                    <FontAwesomeIcon    icon={faBell} 
                                                        className="headerUser-content__item-icon"/>
                                    <span className="count"></span>
                                </Link>
                            </li>
                            <li     className="headerUser-content__item" 
                                    onClick={() => {setUserModal(true)}}>
                                <ModalUser  userModal={userModal} />
                                <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                                        alt="" className="headerUser-content__item-img"/>
                            </li>
                            <li     className="headerUser-content__item" 
                                    onClick={() => {setServicesModal(true)}}>
                                <FontAwesomeIcon    icon={faBars} 
                                                    className="headerUser-content__item-icon"/>
                            </li>
                            <ModalServices  servicesModal={servicesModal} 
                                            setServicesModal={setServicesModal}/>
                            <li className="headerUser-content__item">
                                <button className="headerUser-content__item-btn">
                                    Տեղխադրել
                                    <FontAwesomeIcon    icon={faBriefcase} 
                                                        className="headerUser-content__btn-icon"/>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderUser;