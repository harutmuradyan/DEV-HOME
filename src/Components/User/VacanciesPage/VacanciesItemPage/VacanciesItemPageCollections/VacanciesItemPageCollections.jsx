import React from "react";
import './vacanciesItemPageCollections.scss';

import VacanciesItemPageCollection from "./VacanciesItemPageCollection/VacanciesItemPageCollection";

const VacanciesItemPageCollections = () => {


    return (
        <div className="vacanciesItemPageCollections">
            <h2 className="vacanciesItemPageCollections-title">Ձեզ համար ընտրված աշխատանքներ</h2>
            <div className="vacanciesItemPageCollections-conatiner">
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
                <VacanciesItemPageCollection/>
            </div>
        </div>
    )
}

export default VacanciesItemPageCollections;