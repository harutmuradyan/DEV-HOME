import React from "react";
import './companyBackground.scss';

const CompanyBackground = () => {
    return (
        <div className="company-background">
            <div    className="company-background__header">
                <img    className="company-background__cover" 
                        src="" 
                        alt=""
                        ></img>
                <img    className="company-background__logo" 
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""
                        ></img>
            </div>
            <div className="company-backgroundContent">
                <p className="company-backgroundContent__name">Rock Berry</p>
                <p className="company-backgroundContent__title">Rock Berry is engaged in the cultivation of high-quality varieties of berries in Armenia.</p>
                <div className="company-backgroundContent__conatacts">
                    <p className="company-backgroundContent__conatacts-country">Հայստան</p>
                    <p className="company-backgroundContent__conatacts-city">Երևան</p>
                    <p className="company-backgroundContent__conatacts-followers">700 Հետևորդ</p>
                </div>
                <div className="company-backgroundContent__employee">
                    <img    className="company-backgroundContent__employee-img" 
                            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                    <p className="company-backgroundContent__employee-user">Աշխատում է այստեղ</p>
                    <p className="company-backgroundContent__employee-count">և 5</p>
                </div>
                <div className="company-backgroundContent__btns">
                    <button className="company-backgroundContent__btns-follow">Հետևել</button>
                    <button className="company-backgroundContent__btns-contact">Կապնվել</button>
                </div>
            </div>
        </div>
    )
}

export default CompanyBackground;