import React from "react";
import './vacancies.scss';

import VacanciesContent from "./VacanciesContent/VacanciesContent";
import VacanciesSertings from "./VacanciesSertings/VacanciesSertings";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import FollowCompany from "../../../Components/FollowCompany/FollowCompany";

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
                <FollowCompany/>
                <SidebarFooter/>
            </div>
        </div>
    )
}

export default Vacancies;