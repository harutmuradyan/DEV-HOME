import React from "react";
import './companyBackgroundExperienceModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const CompanyBackgroundExperienceModal = (
    {   companyBackgroundExperienceModal,
        setCompanyBackgroundExperienceModal   }
    ) => {
    
    return (
        <div className={companyBackgroundExperienceModal ? "companyBackgroundExperienceModal active" : "companyBackgroundExperienceModal"} 
             onClick={() => {setCompanyBackgroundExperienceModal(false)}} >
            <div className="companyBackgroundExperienceModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="companyBackgroundExperienceModal-header">
                    <h2 className="companyBackgroundExperienceModal-header__title">Աշխատանքներ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setCompanyBackgroundExperienceModal(false)}} 
                                     className="companyBackgroundExperienceModal-header__icon"
                                     />
                </div>
                <div className="companyBackgroundExperienceModal-content">
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>
                <div className="companyBackgroundExperienceModal-footer">
                    <button className="companyBackgroundExperienceModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default CompanyBackgroundExperienceModal;