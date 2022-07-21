import React,{useState} from "react";
import './player.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faThumbsUp , 
            faPlus , 
            faRightToBracket , 
            faBookmark , 
            faBars} from "@fortawesome/free-solid-svg-icons";

import ListCourse from "../ListCourse/ListCourse";
            

const Player = () => {

    const [view , setView] = useState(false);
    const [play , setPlay] = useState(false);
    const [playerCourseBar , setPlayerCourseBar] = useState(false);

    return (
        <div className="player">
            <div className="player-header">
                <nav className="player-header__nav">
                    <ul className="player-header__nav-block">
                        <li className="player-header__nav-item">Գնել</li>
                        <li className="player-header__nav-item">Վճարել 1 ամսով</li>
                        <li className="player-header__nav-item">Գնել</li>
                        <li className="player-header__nav-item">Վճարել 1 ամսով</li>
                    </ul>
                </nav>
            </div>
            <div className={view ? "player-navbar active" : "player-navbar"}>
                <nav className="player-nav">
                    <button className="player-nav__oppen"
                            onClick={() => {setPlayerCourseBar(true)}}>
                        <FontAwesomeIcon    icon={faBars}
                                            className="player-nav__oppen-icon"/>
                        Դասեր
                    </button>
                    <ListCourse playerCourseBar={playerCourseBar} 
                                setPlayerCourseBar={setPlayerCourseBar}/>
                </nav>
                <div className="player-navbar__title">
                    <h2 className="player-navbar__title-name">SQL course</h2>
                    <p className="player-navbar__title-direction">Create db Sql</p>
                </div>
                <div className="player-btns">
                    <button className="player-btn">
                        <FontAwesomeIcon    icon={faThumbsUp} 
                                            className="player-btn__icon"/>
                        1.600
                    </button>
                    <button className="player-btn">
                        <FontAwesomeIcon    icon={faBookmark} 
                                            className="player-btn__icon"/>
                        11.300
                    </button>
                    <button className="player-btn">
                        <FontAwesomeIcon    icon={faPlus} 
                                            className="player-btn__icon"/>
                    </button>
                    <button className="player-btn">
                        <FontAwesomeIcon    icon={faRightToBracket} 
                                            className="player-btn__icon"/>
                    </button>
                </div>
            </div>
            <div    className="player-content"
                    onClick={() => {setView(true)}}>
                <img    className="player-content__background" 
                        src="https://media.istockphoto.com/vectors/the-boy-builds-a-toy-humanoid-robot-from-constructor-programs-it-on-vector-id1211393520?k=20&m=1211393520&s=612x612&w=0&h=koYR7eu3agxCyFDOIsPdy5e__ZlF0UwyTe_xobZKdTA=" 
                        alt=""
                        ></img>
                <video  className="player-content__video"  
                        controls>
                    <source src="https://www.youtube.com/watch?v=ryJOS-8hmQo&ab_channel=%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8%E2%80%94%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0" 
                            type="video/mp4"/>
                </video>
            </div>
            <div className={view ? "player-footer active" : "player-footer"}>

            </div>
        </div>
    ) 
}

export default Player;