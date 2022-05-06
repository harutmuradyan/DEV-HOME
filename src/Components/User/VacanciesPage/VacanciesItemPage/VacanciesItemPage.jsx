import React from "react";
import './vacanciesItemPage.scss';

import VacanciesItemPageCollections from "./VacanciesItemPageCollections/VacanciesItemPageCollections";
import VacanciesItemPageForm from "./VacanciesItemPageForm/VacanciesItemPageForm";

const VacanciesItemPage = () => {
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

export default VacanciesItemPage;