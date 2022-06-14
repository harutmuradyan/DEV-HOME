import React from "react";
import './modalUser.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const ModalUser = ({userModal , logo , name , profession}) => {
    return (
        <div className={userModal ? "modalUser active" : "modalUser"}>
            <div className="modalUser-header">
                <img    className="modalUser-header__img" 
                        src={logo} 
                        alt=""></img>
                <div className="modalUser-block">
                    <h2 className="modalUser-block__name">{name}</h2>
                    <p className="modalUser-block__profesisons">{profession}</p>
                </div>
                <FontAwesomeIcon    className="modalUser-header__close" 
                                    icon={faUpLong}
                                    />
            </div>
            <div className="modalUser-page">
                <Link   to="/profile" 
                        className="modalUser-page__linq">
                    <button className="modalUser-page__btn">
                        Օգտվողի էջ
                    </button>
                </Link>
            </div>
            <div className="modalUser-btns">
                <button className="modalUser-btns__item">Վճարային տարբերակը</button>
                <select className="modalUser-btns__item">
                    <option>Ընտրել լեզու</option>
                    <option>RU</option>
                    <option>HAY</option>
                    <option>EN</option>
                </select>
                <button className="modalUser-btns__item">Ելք</button>
            </div>
        </div>
    )
}

export default ModalUser;