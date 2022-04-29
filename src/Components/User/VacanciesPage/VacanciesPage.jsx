import React from "react";
import './vacanciesPage.scss';

import VacanciesContent from "./VacanciesContent/VacanciesContent";
import VacanciesSertings from "./VacanciesSertings/VacanciesSertings";
import VacanciesSidebar from "./VacanciesSidebar/VacanciesSidebar";

const VacanciesPage = () => {
    return (
        <div className="vacancies">
            <div className="vacancies-leftBlock">
                <VacanciesSertings/>                 
            </div>
            <div className="vacancies-content">
                <VacanciesContent/>
            </div>
            <div className="vacancies-rightBlock">
                <VacanciesSidebar/>
            </div>
        </div>
    )
}

export default VacanciesPage;