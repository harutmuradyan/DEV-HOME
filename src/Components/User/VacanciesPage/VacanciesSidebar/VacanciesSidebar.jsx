import React from "react";
import './vacanciesSidebar.scss';

const VacanciesSidebar = () => {
    return (
        <div className="vacanciesSidebar">
            <div className="vacanciesSidebar-container">
                <div className="vacanciesSidebar-contaier__img">
                    <img src="https://us.123rf.com/450wm/lassedesignen/lassedesignen1901/lassedesignen190100018/126282291-megaphone-with-speech-bubble.jpg?ver=6" alt=""></img>
                </div>
                <div className="vacanciesSidebar-block">
                    <ul className="vacanciesSidebar-bar">
                        <li className="vacanciesSidebar-bar__item">Տեղեկություն</li>
                        <li className="vacanciesSidebar-bar__item">Հնարավորություններ</li>
                        <li className="vacanciesSidebar-bar__item">Հարցեր</li>
                        <li className="vacanciesSidebar-bar__item">Գովազդ</li>
                        <li className="vacanciesSidebar-bar__item">Ծառայություններ</li>
                        <li className="vacanciesSidebar-bar__item"></li>
                    </ul>
                    <h2>DEV HOME © 2022</h2>
                </div>
            </div>
        </div>
    )
}

export default VacanciesSidebar;