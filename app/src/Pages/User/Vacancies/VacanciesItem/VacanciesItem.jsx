import React from "react";
import './vacanciesItem.scss';

import VacanciesItemPageCollections from "./VacanciesItemPageCollections/VacanciesItemPageCollections";
import VacanciesItemPageForm from "./VacanciesItemPageForm/VacanciesItemPageForm";

const VacanciesItem = () => {
    return (
        <div className="vacanciesItemPage">
            <div className="vacanciesItemPage-conatiner">
                <div className="vacanciesItemPage-conatiner__items">
                    <VacanciesItemPageCollections/>
                </div>
                <div className="vacanciesItemPage-conatiner__form">
                    <VacanciesItemPageForm/>
                </div>
            </div>
        </div>
    )
}

export default VacanciesItem;