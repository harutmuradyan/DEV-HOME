import React from "react";
import './vacanciesItemPageCollections.scss';

import VacanciesItemPageCollection from "./VacanciesItemPageCollection/VacanciesItemPageCollection";

import { useSelector } from "react-redux";

const VacanciesItemPageCollections = () => {

    const {vacancies} = useSelector((state) => state.vacancie)

    return (
        <div className="vacanciesItemPageCollections">
            <h2 className="vacanciesItemPageCollections-title">Ձեզ համար ընտրված աշխատանքներ</h2>
            <div className="vacanciesItemPageCollections-conatiner">
                {
                    vacancies.map((v) => {
                        return  <VacanciesItemPageCollection    key={v.id} 
                                                                workName={v.workName}
                                                                workPosition={v.workPosition}
                                                                city={v.city}
                                                                country={v.country}
                                                                WorkConditions={v.WorkConditions}
                                                                createDay={v.createDay}
                                                                companyId={v.companyId}

                        />
                    })
                }
            </div>
        </div>
    )
}

export default VacanciesItemPageCollections;