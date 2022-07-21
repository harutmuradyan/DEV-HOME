import React,{useState} from "react";
import './profileContent.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faPen , 
            faClose } from "@fortawesome/free-solid-svg-icons";

import ProfileContentModal from "./ProfileContentModal/ProfileContentModal";
import ProfileUserBackgroundModal from "./ProfileUserBackgroundModal/ProfileUserBackgroundModal";
import ProfileUserPhotoModal from "./ProfileUserPhotoModal/ProfileUserPhotoModal";
import ProfileUserContactModal from "./ProfileUserContactModal/ProfileUserContactModal";
import ProfileSearchWorkBtnModal from "./ProfileSearchWorkBtnModal/ProfileSearchWorkBtnModal";

const ProfileContent = ({   logo , 
                            cover , 
                            name , 
                            profession , 
                            city , 
                            earth   }) => {

    const [profileContentModal,setProfileContentModal] = useState(false);
    const [profileUserBackgroundModal,setProfileUserBackgroundModal] = useState(false);
    const [profileUserPhotoModal,setProfileUserPhotoModal] = useState(false);
    const [profileUserContactModal,setProfileUserContactModal] = useState(false);
    const [profileSearchWorkBtnModal,setProfileSearchWorkBtnModal] = useState(false);

    return (
        <div className="profileContent">
            <div className="profileContent-background">
                <div    className="profileContent-background__header">
                    <img    className="profileContent-background__cover" 
                            src={cover} 
                            alt=""
                            onClick={() => {setProfileUserBackgroundModal(true)}}></img>
                    <img    className="profileContent-background__logo" 
                            src={logo} 
                            alt=""
                            onClick={() => {setProfileUserPhotoModal(true)}}></img>
                </div>
            </div>
            <div className="profileContent-info">
                <div className="profileContent-info__left">
                    <h2 className="profileContent-info__name">{name}</h2>
                    <p className="profileContent-info__profesion">{profession}</p>
                    <div className="profileContent-info__address">
                        {earth}  {city} 
                        <button className="profileContent-info__phone"
                                onClick={() => {setProfileUserContactModal(true)}}>
                            Կապի տվյալներ
                        </button>
                    </div>
                </div>
                <div className="profileContent-info__right">
                    <button className="profileContent-info__right-update" 
                            onClick={() => {setProfileContentModal(true)}}>
                        <FontAwesomeIcon icon={faPen}/>
                    </button>
                    <button className="profileContent-info__btn">
                        <img    className="profileContent-info__btn-work" 
                                src="https://static-s.aa-cdn.net/img/ios/1467174481/20e17c76201c22ba136d1728a4352c76?v=1" 
                                alt=""></img>
                        <p className="profileContent-info__btn-text">FL.RU Frilance</p>
                    </button>
                    <button className="profileContent-info__btn">
                        <img    className="profileContent-info__btn-university" 
                                src="https://upload.wikimedia.org/wikipedia/commons/3/35/GorSU_logo.png" 
                                alt=""></img>
                        <p className="profileContent-info__btn-text">Հ Պ Ճ Հ</p>
                    </button>
                </div>
            </div>
            <div className="profileContent-serachWork">
                <div className="profileContent-serachWork__block">
                    <p className="profileContent-serachWork__text">Նշեք որպեսզի Ձեր ընկերները իմանան որ Դուք աշխատանքի փնտրման մեջ եք ։</p>
                    <button className="profileContent-serachWork__start"
                            onClick={() => {setProfileSearchWorkBtnModal(true)}}>
                        Սկսել
                    </button>
                </div>
                <div className="profileContent-serachWork__block">
                    <button className="profileContent-serachWork__close">
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                </div>
            </div>

            <ProfileContentModal            profileContentModal={profileContentModal} 
                                            setProfileContentModal={setProfileContentModal}/>
            <ProfileUserBackgroundModal     profileUserBackgroundModal={profileUserBackgroundModal} 
                                            setProfileUserBackgroundModal={setProfileUserBackgroundModal}/>
            <ProfileUserPhotoModal          profileUserPhotoModal={profileUserPhotoModal} 
                                            setProfileUserPhotoModal={setProfileUserPhotoModal}/>
            <ProfileUserContactModal        profileUserContactModal={profileUserContactModal} 
                                            setProfileUserContactModal={setProfileUserContactModal}/>
            <ProfileSearchWorkBtnModal      profileSearchWorkBtnModal={profileSearchWorkBtnModal} 
                                            setProfileSearchWorkBtnModal={setProfileSearchWorkBtnModal}/>
        </div>
    )
}

export default ProfileContent;