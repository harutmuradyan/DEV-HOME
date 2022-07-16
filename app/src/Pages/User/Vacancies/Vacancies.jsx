import React from "react";
import './vacancies.scss';

import VacanciesContent from "./VacanciesContent/VacanciesContent";
import VacanciesSertings from "./VacanciesSertings/VacanciesSertings";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";

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
                <SidebarFooter/>
            </div>
        </div>
    )
}

export default Vacancies;