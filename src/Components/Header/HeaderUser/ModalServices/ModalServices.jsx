import React from "react";
import './modalServices.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const ModalServices = ({servicesModal , setServicesModal}) => {
    return (
        <div className={servicesModal ? "modalServices active" : "modalServices"}>
            <div className="modalServices-block">
                <h2 className="modalServices-block__title">Աշխատանքի համար</h2>
                <FontAwesomeIcon className="modalServices-block__icon" icon={faClose} onClick={() => {setServicesModal(false)}}/>
            </div>
            <nav className="modalServices-content__nav">
                <h2 className="modalServices-content__nav-title">DEV HOME - Ի Ծառայություններ</h2>
                <ul className="modalServices-content__block">
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faHome}  className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faUsers}  className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faGraduationCap} className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faBriefcase} className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item" >
                        <FontAwesomeIcon icon={faMessage} className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faBell} className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faBars} className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faBars} className="modalServices-content__item-icon"/>
                    </li>
                    <li className="modalServices-content__item">
                        <FontAwesomeIcon icon={faBars} className="modalServices-content__item-icon"/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ModalServices;