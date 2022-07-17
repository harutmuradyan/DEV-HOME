import React,{useState} from "react";
import './companyBackground.scss';
import CompanyBackgroundEmployeeModal from "./CompanyBackgroundEmployeeModal/CompanyBackgroundEmployeeModal";

import CompanyBackgroundExperienceModal from "./CompanyBackgroundExperienceModal/CompanyBackgroundExperienceModal";

const CompanyBackground = ({    backgroundDesc ,
                                logo ,
                                name , 
                                cover,
                                followerCount,
                                city,
                                country,
                                employee }) => {

    const [companyBackgroundExperienceModal,setCompanyBackgroundExperienceModal] = useState(false);
    const [companyBackgroundEmployeeModal,setCompanyBackgroundEmployeeModal] = useState(false);

    return (
        <div className="company-background">
            <div className="company-background__header">
                <img    className="company-background__cover" 
                        src={cover} 
                        alt=""
                        ></img>
                <img    className="company-background__logo" 
                        src={logo} 
                        alt=""
                        ></img>
            </div>
            <div className="company-backgroundContent">
                <p className="company-backgroundContent__name">{name}</p>
                <p className="company-backgroundContent__title">{backgroundDesc}</p>
                <div className="company-backgroundContent__conatacts">
                    <p className="company-backgroundContent__conatacts-country">{country}</p>
                    <p className="company-backgroundContent__conatacts-city">{city}</p>
                    <p className="company-backgroundContent__conatacts-followers">{followerCount} Հետևորդ</p>
                </div>
                <div className="company-backgroundContent__employee">
                    <img    className="company-backgroundContent__employee-img" 
                            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                    <p className="company-backgroundContent__employee-user">Աշխատում է ,</p>
                    <p className="company-backgroundContent__employee-count">և {employee}</p>
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