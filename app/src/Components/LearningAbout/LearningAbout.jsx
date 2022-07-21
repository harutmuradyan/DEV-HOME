import React from "react";
import './learningAbout.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder , faCertificate , faArrowDownWideShort , faTag} from "@fortawesome/free-solid-svg-icons";

import LearningItemPageContentComments from "./LearningItemPageContentComments/LearningItemPageContentComments";

const LearningAbout = () => {
    return (
        <div className="learningAbout">
            <div className="learningAbout-container">
                <div className="learningAbout-block">
                    <h2 className="learningAbout-block__titleDesk">Դասընթաց</h2>
                    <ul className="learningAbout-nav">
                        <li className="learningAbout-nav__item">
                            <FontAwesomeIcon    className="learningAbout-nav__item-icon" 
                                                icon={faFolder}/>
                            1 ծրագրային մաս
                        </li>
                        <li className="learningAbout-nav__item">
                            <FontAwesomeIcon    className="learningAbout-nav__item-icon"  
                                                icon={faCertificate}/>  
                            Տրվում է սերտիֆիկատ
                        </li>
                        <li className="learningAbout-nav__item">
                            <FontAwesomeIcon    className="learningAbout-nav__item-icon"  
                                                icon={faArrowDownWideShort}/>
                            Դասերի քանակ : 12
                        </li>
                        <li className="learningAbout-nav__item">
                            <FontAwesomeIcon    className="learningAbout-nav__item-icon"  
                                                icon={faTag}/>
                            Տրվող գիտելիք SQL
                        </li>
                    </ul>
                </div>
                <div className="learningAbout-instructor">
                    <h3 className="learningAbout-instructor__title">Դասախոս</h3>
                    <div className="learningAbout-instructor__block">
                        <img    className="learningAbout-instructor__block-img" 
                                src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                                alt=""></img>
                        <div className="learningAbout-instructor__blocks">
                            <p className="learningAbout-instructor__block-name">ԲԵն Խաչատրյան</p>
                            <p className="learningAbout-instructor__block-profession">WEB DEVELOPER</p>
                            <button className="learningAbout-instructor__block-see">Դիտել էջը</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="learningAbout-block desk">
                <h2 className="learningAbout-block__titleDesk">Դասընթացի նկարագրություն</h2>
                <p className="learningAbout-block__textDesk">Get Ben Sullins's 12 must-have SQL techniques for data science pros—engineers, DevOps, data miners, programmers, and other systems specialists. Ben's tips focus on practical applications of SQL queries for data analysis. Learn how to retrieve data, join tables, calculate rolling averages and rankings, work with dates and times, use window functions, aggregate and filter data, and much more. Each tip is short, relevant, and up to date with current industry best practices—making this the perfect course for busy analysts who normally struggle to find time to build their skills.
                </p>
                <div className="learningAbout-block__moreDeskCenter">
                    <button className="learningAbout-block__moreDesk">Դիտել ամբողջը</button>
                </div>
            </div>

            <LearningItemPageContentComments/>
        </div>
    )
}

export default LearningAbout;