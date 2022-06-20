import React , {useState} from "react";
import { Link } from "react-router-dom";
import './headerUser.scss';

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faUsers , 
            faGraduationCap , 
            faHome , 
            faMessage , 
            faBell , 
            faBriefcase , 
            faBars,
            faSearch} from "@fortawesome/free-solid-svg-icons";

import ModalUser from "./ModalUser/ModalUser";
import ModalServices from "./ModalServices/ModalServices";
import ModalSearch from "./ModalSearch/ModalSearch";

const HeaderUser = ({logined}) => {

    const [userModal,setUserModal] = useState(false);
    const [servicesModal,setServicesModal] = useState(false);
    const [modalSearch,setModalSearch] = useState(false);

    const {users} = useSelector((state) => state.user);

    return (
        <header className="header">
            <div className={logined ? "headerUser active" : "headerUser"}>
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
                        <button className="headerUser-content__search-btn"
                                onClick={() => {setModalSearch(true)}}>
                            <FontAwesomeIcon    icon={faSearch} 
                                                className="headerUser-content__search-icon"/>
                            <input  placeholder="  Փնտրել" 
                                    className="headerUser-content__search-input"
                                    />
                        </button>
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
                            <li className="headerUser-content__item item-close">
                                <Link   to="/learning" 
                                        className="headerUser-content__item">
                                    <FontAwesomeIcon    icon={faGraduationCap} 
                                                        className="headerUser-content__item-icon"/>
                                    <span className="count"></span>
                                </Link>
                            </li>
                            <li className="headerUser-content__item item-close">
                                <Link   to="/vacancies" 
                                        className="headerUser-content__item">
                                    <FontAwesomeIcon    icon={faBriefcase} 
                                                        className="headerUser-content__item-icon"/>
                                    <span className="count"></span>
                                </Link>
                            </li>
                            <li className="headerUser-content__item"> 
                                <Link   to="/messaging"
                                        className="headerUser-content__item">
                                    <FontAwesomeIcon    icon={faMessage} 
                                                        className="headerUser-content__item-icon"/>
                                    <span className="count"></span>
                                </Link>
                            </li>
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
                                {   
                                    users.filter((elem) => elem.id === 4).map((el) => {
                                        return  <ModalUser      userModal={userModal}
                                                                key={el.id}
                                                                logo={el.logo}
                                                                name={el.name}
                                                                profession={el.profession}
                                                                /> 
                                    })
                                }
                                {   
                                    users.filter((elem) => elem.id === 4).map((el) => {
                                        return    <img  src={el.logo}
                                                        key={el.id} 
                                                        alt="" 
                                                        className="headerUser-content__item-img"/>       
                                    })
                                }
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
                    <button >
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderUser;