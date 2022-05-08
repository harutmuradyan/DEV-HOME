import React from "react";
import './companyContacts.scss';

const CompanyContacts = () => {
    return (
        <div className="companyContacts">
            <div className="companyContacts-container">
                <h2 className="companyContacts-title">Կապ մեզ հետ</h2>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Ինտերնետային կայք</p>
                    <p className="companyContacts-block__text">http://rockberryWEB.ru/</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Հեռախոսահամար</p>
                    <p className="companyContacts-block__text">+374 94 22 22 22</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Ուղվածություն</p>
                    <p className="companyContacts-block__text">Քաղցրավենիք</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Գտնվելու վայր</p>
                    <p className="companyContacts-block__text">Ք․Երևան Մաշտոցի 20</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Ստեղծվել է</p>
                    <p className="companyContacts-block__text">2020</p>
                </div>
                <div className="companyContacts-block">
                    <p className="companyContacts-block__title">Աշխատակիցների քանակ</p>
                    <p className="companyContacts-block__text">51-200</p>
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