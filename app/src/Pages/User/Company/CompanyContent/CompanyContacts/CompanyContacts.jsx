import React from "react";
import './companyContacts.scss';

const CompanyContacts = ({webSites , tell , shpere , employee , createDay}) => {
    return (
        <div className="companyContacts">
            <div className="companyContacts-container">
                <h2 className="companyContacts-title">Կապ մեզ հետ</h2>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Ինտերնետային կայք</p>
                    <p className="companyContacts-block__text">{webSites}</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Հեռախոսահամար</p>
                    <p className="companyContacts-block__text">{tell}</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Ուղվածություն</p>
                    <p className="companyContacts-block__text">{shpere}</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Ստեղծվել է</p>
                    <p className="companyContacts-block__text">{createDay}</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Աշխատակիցների քանակ</p>
                    <p className="companyContacts-block__text">{employee}</p>
                </div>
            </div>
            <div className="companyContacts-container">
                <img    className="companyContacts-gps" 
                        src="https://factor.am/en/wp-content/uploads/sites/3/2021/12/maxresdefault.jpg" 
                        alt="">
                </img>
            </div>
        </div>
    )
}

export default CompanyContacts;