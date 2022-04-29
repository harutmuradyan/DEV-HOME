import React , {useState} from "react";
import { Link } from "react-router-dom";
import './headerUser.scss';

import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ModalUser from "./ModalUser/ModalUser";
import ModalServices from "./ModalServices/ModalServices";
import Chat from "./Messenger/Messenger";

const HeaderUser = () => {

    const [userModal,setlUserModal] = useState(false);
    const [servicesModal,setServicesModal] = useState(false);
    const [messenger,setMessenger] = useState(false);

    return (
        <header className="headerUser">
            <div className="headerUser-content">
                <div className="headerUser-content__logo">
                    <Link to="/index" className="headerUser-content__logo">
                        <h1>DEV HOME</h1>
                    </Link>
                </div>
                <div className="headerUser-content__search">
                    <input placeholder="  Փնտրել"/>
                </div>
                <nav className="headerUser-content__nav">
                    <ul className="headerUser-content__block">
                        <li className="headerUser-content__item">
                            <Link to="/index">
                                <FontAwesomeIcon icon={faHome}  className="headerUser-content__item-icon"/>
                            </Link>
                        </li>
                        <li className="headerUser-content__item">
                            <Link to="/network">
                                <FontAwesomeIcon icon={faUsers}  className="headerUser-content__item-icon"/>
                            </Link>
                            <span className="count">0</span>
                        </li>
                        <li className="headerUser-content__item">
                            <Link to="">
                                <FontAwesomeIcon icon={faGraduationCap} className="headerUser-content__item-icon"/>
                            </Link>
                            <span className="count">0</span>
                        </li>
                        <li className="headerUser-content__item">
                            <Link to="/vacancies">
                                <FontAwesomeIcon icon={faBriefcase} className="headerUser-content__item-icon"/>
                            </Link>
                            <span className="count">0</span>
                        </li>

                        <li className="headerUser-content__item" onClick={() => {setMessenger(true)}}>
                            <FontAwesomeIcon icon={faMessage} className="headerUser-content__item-icon"/>
                            <span className="count">0</span>
                        </li>
                        <Chat messenger={messenger} setMessenger={setMessenger}/>
                        <li className="headerUser-content__item">
                            <Link to="/notification">
                                <FontAwesomeIcon icon={faBell} className="headerUser-content__item-icon"/>
                            </Link>
                            <span className="count">0</span>
                        </li>
                        <li className="headerUser-content__item" onClick={() => {setlUserModal(true)}}>
                            <ModalUser userModal={userModal}/>
                            <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt="" className="headerUser-content__item-img"/>
                        </li>
                        <li className="headerUser-content__item" onClick={() => {setServicesModal(true)}}>
                            <FontAwesomeIcon icon={faBars} className="headerUser-content__item-icon"/>
                        </li>
                        <ModalServices servicesModal={servicesModal} setServicesModal={setServicesModal}/>
                        <li className="headerUser-content__item">
                            <button className="headerUser-content__item-btn">
                                Տեղխադրել
                                <FontAwesomeIcon icon={faBriefcase} className="headerUser-content__btn-icon"/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderUser;