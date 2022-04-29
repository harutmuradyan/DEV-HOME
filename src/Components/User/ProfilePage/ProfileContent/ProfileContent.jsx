import React from "react";
import './profileContent.scss';

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ProfileContent = () => {
    return (
        <div className="profileContent">
            <div className="profileContent-background">
                <div className="profileContent-background__block ">
                    <img className="profileContent-background__img" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                </div>
                <div className="profileContent-background__block">
                    <button className="profileContent-background__update">
                        <FontAwesomeIcon className="profileContent-background__update-btn" icon={faAdd}/>
                    </button>
                </div>
            </div>
            <div className="profileContent-info">
                <div className="profileContent-info__left">
                    <h2 className="profileContent-info__name">Արման Ղազարյան</h2>
                    <p className="profileContent-info__profesion">WEB DEVELOPER</p>
                    <div className="profileContent-info__address">
                        Երևան Հայաստան 
                        <button className="profileContent-info__phone">Կապի տվյալներ</button>
                    </div>
                </div>
                <div className="profileContent-info__right">
                    <button className="profileContent-info__right-update">
                        <FontAwesomeIcon icon={faPen}/>
                    </button>
                    <button className="profileContent-info__btn">
                        <img className="profileContent-info__btn-work" src="https://static-s.aa-cdn.net/img/ios/1467174481/20e17c76201c22ba136d1728a4352c76?v=1" alt=""></img>
                        <p className="profileContent-info__btn-text">FL.RU Frilance</p>
                    </button>
                    <button className="profileContent-info__btn">
                        <img className="profileContent-info__btn-university" src="https://upload.wikimedia.org/wikipedia/commons/3/35/GorSU_logo.png" alt=""></img>
                        <p className="profileContent-info__btn-text">Հ Պ Ճ Հ</p>
                    </button>
                </div>
            </div>
            <div className="profileContent-serachWork">
                <div className="profileContent-serachWork__block">
                    <p className="profileContent-serachWork__text">Նշեք որպեսզի Ձեր ընկերները իմանան որ Դուք աշխատանքի փնտրման մեջ եք ։</p>
                    <button className="profileContent-serachWork__start">Սկսել</button>
                </div>
                <div className="profileContent-serachWork__block">
                    <button className="profileContent-serachWork__close">
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent;