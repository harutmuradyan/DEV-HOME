import React from "react";
import './vacancies.scss';

import VacanciesContent from "./VacanciesContent/VacanciesContent";
import VacanciesSertings from "./VacanciesSertings/VacanciesSertings";
import VacanciesSidebar from "./VacanciesSidebar/VacanciesSidebar";

const Vacancies = () => {
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

export default Vacancies;