import React from "react";
import './universityContacts.scss';

const UniversityContacts = () => {
    return (
        <div className="universityContacts">
            <div className="universityContacts-container">
                <h2 className="universityContacts-title">Կապ մեզ հետ</h2>
                <div className="universityContacts-block">
                    <p className="universityContacts-block__title">Ինտերնետային կայք</p>
                    <p className="universityContacts-block__text">http://rockberryWEB.ru/</p>
                </div>
                <div className="universityContacts-block">
                    <p className="universityContacts-block__title">Հեռախոսահամար</p>
                    <p className="universityContacts-block__text">+374 94 22 22 22</p>
                </div>
                <div className="universityContacts-block">
                    <p className="universityContacts-block__title">Ուղվածություն</p>
                    <p className="universityContacts-block__text">Քաղցրավենիք</p>
                </div>
                <div className="universityContacts-block">
                    <p className="universityContacts-block__title">Գտնվելու վայր</p>
                    <p className="universityContacts-block__text">Ք․Երևան Մաշտոցի 20</p>
                </div>
                <div className="universityContacts-block">
                    <p className="universityContacts-block__title">Ստեղծվել է</p>
                    <p className="universityContacts-block__text">2020</p>
                </div>
                <div className="universityContacts-block">
                    <p className="universityContacts-block__title">Աշխատակիցների քանակ</p>
                    <p className="universityContacts-block__text">51-200</p>
                </div>
            </div>
            <div className="universityContacts-container">
                <img    className="universityContacts-gps" 
                        src="https://factor.am/en/wp-content/uploads/sites/3/2021/12/maxresdefault.jpg" 
                        alt="">
                </img>
            </div>
        </div>
    )
}

export default UniversityContacts;