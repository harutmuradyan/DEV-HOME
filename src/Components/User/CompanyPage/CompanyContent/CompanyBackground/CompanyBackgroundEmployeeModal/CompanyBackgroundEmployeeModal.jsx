import React from "react";
import './companyBackgroundEmployeeModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const CompanyBackgroundEmployeeModal = (
    {   companyBackgroundEmployeeModal,
        setCompanyBackgroundEmployeeModal   }
    ) => {
    
    return (
        <div className={companyBackgroundEmployeeModal ? "companyBackgroundEmployeeModal  active" : "companyBackgroundEmployeeModal "} 
             onClick={() => {setCompanyBackgroundEmployeeModal (false)}} >
            <div className="companyBackgroundEmployeeModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="companyBackgroundEmployeeModal-header">
                    <h2 className="companyBackgroundEmployeeModal-header__title">Աշխատակիցներ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setCompanyBackgroundEmployeeModal (false)}} 
                                     className="companyBackgroundEmployeeModal-header__icon"
                                     />
                </div>
                <div className="companyBackgroundEmployeeModal-content">
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
                <div className="companyBackgroundEmployeeModal-footer">
                    <button className="companyBackgroundEmployeeModal-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default CompanyBackgroundEmployeeModal;