import React from "react";
import './universityBackground.scss';

const UniversityBackground = () => {

    return (
        <div className="university-background">
            <div className="university-background__header">
                <img    className="university-background__cover" 
                        src="" 
                        alt=""
                        ></img>
                <img    className="university-background__logo" 
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""
                        ></img>
            </div>
            <div className="university-backgroundContent">
                <p className="university-backgroundContent__name">NPUA</p>
                <p className="university-backgroundContent__title">Tech. university located in Yerevan, Armenia. Established in 1933, it provides educational and research programs.</p>
                <div className="university-backgroundContent__conatacts">
                    <p className="university-backgroundContent__conatacts-country">Հայստան</p>
                    <p className="university-backgroundContent__conatacts-city">Երևան</p>
                    <p className="university-backgroundContent__conatacts-followers">700 Հետևորդ</p>
                </div>
                <div className="university-backgroundContent__student">
                    <img    className="university-backgroundContent__student-img" 
                            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                    <p className="university-backgroundContent__student-user">Սովորում է այստեղ</p>
                    <p className="university-backgroundContent__student-count">և 5</p>
                </div>
                <div className="university-backgroundContent__btns">
                    <div className="university-backgroundContent__btns-left">
                        <button className="university-backgroundContent__btns-follow">Հետևել</button>
                        <button className="university-backgroundContent__btns-contact">Կապնվել</button>
                    </div>
                    <div className="university-backgroundContent__btns-right">
                        <button className="university-backgroundContent__btns-experience"
                                >
                                Աշխատատեղեր
                        </button>
                        <button className="university-backgroundContent__btns-student"
                                >
                                Ուսանողներ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniversityBackground;