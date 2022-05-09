import React,{useState} from "react";
import './companyBackground.scss';
import CompanyBackgroundEmployeeModal from "./CompanyBackgroundEmployeeModal/CompanyBackgroundEmployeeModal";

import CompanyBackgroundExperienceModal from "./CompanyBackgroundExperienceModal/CompanyBackgroundExperienceModal";

const CompanyBackground = () => {

    const [companyBackgroundExperienceModal,setCompanyBackgroundExperienceModal] = useState(false);
    const [companyBackgroundEmployeeModal,setCompanyBackgroundEmployeeModal] = useState(false);

    return (
        <div className="company-background">
            <div className="company-background__header">
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
                    <div className="company-backgroundContent__btns-left">
                        <button className="company-backgroundContent__btns-follow">Հետևել</button>
                        <button className="company-backgroundContent__btns-contact">Կապնվել</button>
                    </div>
                    <div className="company-backgroundContent__btns-right">
                        <button className="company-backgroundContent__btns-experience"
                                onClick={() => {setCompanyBackgroundExperienceModal(true)}}>
                                Աշխատատեղեր
                        </button>
                        <button className="company-backgroundContent__btns-employee"
                                onClick={() => {setCompanyBackgroundEmployeeModal(true)}}>
                                Մարդիք
                        </button>
                    </div>
                    <CompanyBackgroundExperienceModal   companyBackgroundExperienceModal={companyBackgroundExperienceModal} 
                                                        setCompanyBackgroundExperienceModal={setCompanyBackgroundExperienceModal}/>
                    <CompanyBackgroundEmployeeModal     companyBackgroundEmployeeModal={companyBackgroundEmployeeModal} 
                                                        setCompanyBackgroundEmployeeModal={setCompanyBackgroundEmployeeModal}/>
                                        
                </div>
            </div>
        </div>
    )
}

export default CompanyBackground;