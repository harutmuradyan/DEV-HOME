import React from "react";
import './learningItemPageContent.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder , faCertificate , faArrowDownWideShort , faTag} from "@fortawesome/free-solid-svg-icons";

import LearningItemPageContentComments from "./LearningItemPageContentComments/LearningItemPageContentComments";

const LearningItemPageContent = () => {
    return (
        <div className="learningItemPageContent">
            <div className="learningItemPageContent-container">
                <div className="learningItemPageContent-block">
                    <h2 className="learningItemPageContent-block__titleDesk">Դասընթաց</h2>
                    <ul className="learningItemPageContent-nav">
                        <li className="learningItemPageContent-nav__item">
                            <FontAwesomeIcon    className="learningItemPageContent-nav__item-icon" 
                                                icon={faFolder}/>
                            1 ծրագրային մաս
                        </li>
                        <li className="learningItemPageContent-nav__item">
                            <FontAwesomeIcon    className="learningItemPageContent-nav__item-icon"  
                                                icon={faCertificate}/>  
                            Տրվում է սերտիֆիկատ
                        </li>
                        <li className="learningItemPageContent-nav__item">
                            <FontAwesomeIcon    className="learningItemPageContent-nav__item-icon"  
                                                icon={faArrowDownWideShort}/>
                            Դասերի քանակ : 12
                        </li>
                        <li className="learningItemPageContent-nav__item">
                            <FontAwesomeIcon    className="learningItemPageContent-nav__item-icon"  
                                                icon={faTag}/>
                            Տրվող գիտելիք SQL
                        </li>
                    </ul>
                </div>
                <div className="learningItemPageContent-instructor">
                    <h3 className="learningItemPageContent-instructor__title">Դասախոս</h3>
                    <div className="learningItemPageContent-instructor__block">
                        <img    className="learningItemPageContent-instructor__block-img" 
                                src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                                alt=""></img>
                        <div className="learningItemPageContent-instructor__blocks">
                            <p className="learningItemPageContent-instructor__block-name">ԲԵն Խաչատրյան</p>
                            <p className="learningItemPageContent-instructor__block-profession">WEB DEVELOPER</p>
                            <button className="learningItemPageContent-instructor__block-see">Դիտել էջը</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="learningItemPageContent-block desk">
                <h2 className="learningItemPageContent-block__titleDesk">Դասընթացի նկարագրություն</h2>
                <p className="learningItemPageContent-block__textDesk">Get Ben Sullins's 12 must-have SQL techniques for data science pros—engineers, DevOps, data miners, programmers, and other systems specialists. Ben's tips focus on practical applications of SQL queries for data analysis. Learn how to retrieve data, join tables, calculate rolling averages and rankings, work with dates and times, use window functions, aggregate and filter data, and much more. Each tip is short, relevant, and up to date with current industry best practices—making this the perfect course for busy analysts who normally struggle to find time to build their skills.
                </p>
                <div className="learningItemPageContent-block__moreDeskCenter">
                    <button className="learningItemPageContent-block__moreDesk">Դիտել ամբողջը</button>
                </div>
            </div>

            <LearningItemPageContentComments/>
        </div>
    )
}

export default LearningItemPageContent;