import React from "react";
import './vacanciesItemPageCollections.scss';

const VacanciesItemPageCollection = () => {


    return (
        <div className="vacanciesItemPageCollection">
            <div className="vacanciesItemPageCollection-content">
                <div className="vacanciesItemPageCollection-content__img">
                    <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                         alt=""></img>
                </div>
                <div className="vacanciesItemPageCollection-content__info">
                    <h2>Freelance React Developer</h2>
                    <p>DEVOPS DEVELOPER</p>
                    <p>Հայաստան, Երևան (Աշխատանք տանից)</p>
                    <div className="vacanciesItemPageCollection-content__employee ">
                        <img    className="vacanciesItemPageCollection-content__employee-img"
                                src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                                alt=""></img>
                        <p  className="vacanciesItemPageCollection-content__employee-users">2 մարդ աշխատում են այստեղ</p>
                    </div>
                    <p>10 ժամ առաջ</p>
                </div>
            </div>
        </div>
    )
}

export default VacanciesItemPageCollection;