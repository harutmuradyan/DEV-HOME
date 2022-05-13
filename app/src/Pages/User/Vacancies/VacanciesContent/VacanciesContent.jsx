import React from "react";
import './vacanciesContent.scss';

import VacanciesSearch from "./VacanciesSearch/VacanciesSearch";
import VacanciesItem from "./VacanciesItem/VacanciesItem";

const VacanciesContent = () => {
    return (
        <div className="vacanciesContent">
            <div className="vacanciesContent-container">
                <VacanciesSearch/>
            </div>
            <div className="vacanciesContent-container">
                <VacanciesItem/>
                <VacanciesItem/>
                <VacanciesItem/>
                <VacanciesItem/>
                <VacanciesItem/>
                <VacanciesItem/>
                <VacanciesItem/>
            </div>
        </div>
    )
}

export default VacanciesContent;