import React,{useState} from "react";
import './learningItemPlayer.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faThumbsUp , 
            faPlus , 
            faRightToBracket , 
            faBookmark , 
            faBars} from "@fortawesome/free-solid-svg-icons";
            

const LearningItemPlayer = () => {

    const [view , setView] = useState(false);
    const [play , setPlay] = useState(false);

    return (
        <div className="learningItemPlayer">
            <div className="learningItemPlayer-header">
                <nav className="learningItemPlayer-header__nav">
                    <ul className="learningItemPlayer-header__nav-block">
                        <li className="learningItemPlayer-header__nav-item">Գնել</li>
                        <li className="learningItemPlayer-header__nav-item">Վճարել 1 ամսով</li>
                        <li className="learningItemPlayer-header__nav-item">Գնել</li>
                        <li className="learningItemPlayer-header__nav-item">Վճարել 1 ամսով</li>
                    </ul>
                </nav>
            </div>
            <div className={view ? "learningItemPlayer-navbar active" : "learningItemPlayer-navbar"}>
                <nav className="learningItemPlayer-nav">
                    <button className="learningItemPlayer-nav__oppen">
                        <FontAwesomeIcon    icon={faBars}
                                            className="learningItemPlayer-nav__oppen-icon"/>
                        Դասեր
                    </button>
                    <ul className="learningItemPlayer-nav__content">
                        <li className="learningItemPlayer-nav__course">
                            <p className="learningItemPlayer-nav__course-name">Դաս 1 </p>
                            <p className="learningItemPlayer-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li><li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                        <li className="learningItemView-nav__course">
                            <p className="learningItemView-nav__course-name">Դաս 1 </p>
                            <p className="learningItemView-nav__course-direction">SQL Join</p>
                        </li>
                    </ul>
                </nav>
                <div className="learningItemPlayer-navbar__title">
                    <h2 className="learningItemPlayer-navbar__title-name">SQL course</h2>
                    <p className="learningItemPlayer-navbar__title-direction">Create db Sql</p>
                </div>
                <div className="learningItemPlayer-btns">
                    <button className="learningItemPlayer-btn">
                        <FontAwesomeIcon    icon={faThumbsUp} 
                                            className="learningItemPlayer-btn__icon"/>
                        1.600
                    </button>
                    <button className="learningItemPlayer-btn">
                        <FontAwesomeIcon    icon={faBookmark} 
                                            className="learningItemPlayer-btn__icon"/>
                        11.300
                    </button>
                    <button className="learningItemPlayer-btn">
                        <FontAwesomeIcon    icon={faPlus} 
                                            className="learningItemPlayer-btn__icon"/>
                    </button>
                    <button className="learningItemPlayer-btn">
                        <FontAwesomeIcon    icon={faRightToBracket} 
                                            className="learningItemPlayer-btn__icon"/>
                    </button>
                </div>
            </div>
            <div    className="learningItemPlayer-content"
                    onClick={() => {setView(true)}}>
                <img    className="learningItemPlayer-content__background" 
                        src="https://media.istockphoto.com/vectors/the-boy-builds-a-toy-humanoid-robot-from-constructor-programs-it-on-vector-id1211393520?k=20&m=1211393520&s=612x612&w=0&h=koYR7eu3agxCyFDOIsPdy5e__ZlF0UwyTe_xobZKdTA=" 
                        alt=""
                        ></img>
                <video  className="learningItemPlayer-content__video"  
                        controls>
                    <source src="https://www.youtube.com/watch?v=ryJOS-8hmQo&ab_channel=%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8%E2%80%94%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0" 
                            type="video/mp4"/>
                </video>
            </div>
            <div className={view ? "learningItemPlayer-footer active" : "learningItemPlayer-footer"}>
                
            </div>
        </div>
    ) 
}

export default LearningItemPlayer;