import React from "react";
import './contacts.scss';

const Contacts = ({webSites , tell , shpere , employee , createDay}) => {
    return (
        <div className="contacts">
            <div className="contacts-container">
                <h2 className="contacts-title">Կապ մեզ հետ</h2>
                <div className="contacts-block">
                    <p className="contacts-block__title">Ինտերնետային կայք</p>
                    <p className="contacts-block__text">{webSites}</p>
                </div>
                <div className="contacts-block">
                    <p className="contacts-block__title">Հեռախոսահամար</p>
                    <p className="contacts-block__text">{tell}</p>
                </div>
                <div className="contacts-block">
                    <p className="contacts-block__title">Ուղվածություն</p>
                    <p className="contacts-block__text">{shpere}</p>
                </div>
                <div className="contacts-block">
                    <p className="contacts-block__title">Ստեղծվել է</p>
                    <p className="contacts-block__text">{createDay}</p>
                </div>
                <div className="contacts-block">
                    <p className="contacts-block__title">Աշխատակիցների քանակ</p>
                    <p className="contacts-block__text">{employee}</p>
                </div>
            </div>
            <div className="contacts-container">
                <img    className="contacts-gps" 
                        src="https://factor.am/en/wp-content/uploads/sites/3/2021/12/maxresdefault.jpg" 
                        alt="">
                </img>
            </div>
        </div>
    )
}

export default Contacts;