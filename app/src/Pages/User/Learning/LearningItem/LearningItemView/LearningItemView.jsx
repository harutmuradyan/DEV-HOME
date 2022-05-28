import React,{useState} from "react";
import './learningItemView.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faThumbsUp , 
            faPlus , 
            faRightToBracket , 
            faBookmark , 
            faBars} from "@fortawesome/free-solid-svg-icons";
            

const LearningItemView = () => {

    const [view , setView] = useState(false);
    const [play , setPlay] = useState(false);

    return (
        <div className="learningItemView">
            <div className="learningItemView-header">
                <nav className="learningItemView-header__nav">
                    <ul className="learningItemView-header__nav-block">
                        <li className="learningItemView-header__nav-item">Գնել</li>
                        <li className="learningItemView-header__nav-item">Վճարել 1 ամսով</li>
                        <li className="learningItemView-header__nav-item">Գնել</li>
                        <li className="learningItemView-header__nav-item">Վճարել 1 ամսով</li>
                    </ul>
                </nav>
            </div>
            <div className={view ? "learningItemView-navbar active" : "learningItemView-navbar"}>
                <nav className="learningItemView-nav">
                    <button className="learningItemView-nav__oppen">
                        <FontAwesomeIcon    icon={faBars}
                                            className="learningItemView-nav__oppen-icon"/>
                        Դասեր
                    </button>
                    <ul className="learningItemView-nav__content">
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
                <div className="learningItemView-navbar__title">
                    <h2 className="learningItemView-navbar__title-name">SQL course</h2>
                    <p className="learningItemView-navbar__title-direction">Create db Sql</p>
                </div>
                <div className="learningItemView-btns">
                    <button className="learningItemView-btn">
                        <FontAwesomeIcon    icon={faThumbsUp} 
                                            className="learningItemView-btn__icon"/>
                        1.600
                    </button>
                    <button className="learningItemView-btn">
                        <FontAwesomeIcon    icon={faBookmark} 
                                            className="learningItemView-btn__icon"/>
                        11.300
                    </button>
                    <button className="learningItemView-btn">
                        <FontAwesomeIcon    icon={faPlus} 
                                            className="learningItemView-btn__icon"/>
                    </button>
                    <button className="learningItemView-btn">
                        <FontAwesomeIcon    icon={faRightToBracket} 
                                            className="learningItemView-btn__icon"/>
                    </button>
                </div>
            </div>
            <div    className="learningItemView-content"
                    onClick={() => {setView(true)}}>
                <img    className="learningItemView-content__background" 
                        src="https://media.istockphoto.com/vectors/the-boy-builds-a-toy-humanoid-robot-from-constructor-programs-it-on-vector-id1211393520?k=20&m=1211393520&s=612x612&w=0&h=koYR7eu3agxCyFDOIsPdy5e__ZlF0UwyTe_xobZKdTA=" 
                        alt=""
                        ></img>
                <video  className="learningItemView-content__video"  
                        controls>
                    <source src="https://www.youtube.com/watch?v=ryJOS-8hmQo&ab_channel=%D0%9D%D0%B0%D0%B2%D1%8B%D0%BA%D0%B8%E2%80%94%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0" 
                            type="video/mp4"/>
                </video>
            </div>
            <div className={view ? "learningItemView-footer active" : "learningItemView-footer"}></div>
        </div>
    ) 
}

export default LearningItemView;