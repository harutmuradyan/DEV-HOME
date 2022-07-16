import React from "react";
import './vacanciesItem.scss';

import VacanciesItemPageCollections from "./VacanciesItemPageCollections/VacanciesItemPageCollections";
import VacanciesItemPageForm from "./VacanciesItemPageForm/VacanciesItemPageForm";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VacanciesItem = () => {

    const {vacancies} = useSelector((state) => state.vacancie);
    const {id} = useParams();

    const vacansieId = +id;

    return (
        <div className="vacanciesItemPage">
            <div className="vacanciesItemPage-conatiner">
                <div className="vacanciesItemPage-conatiner__items">
                    <VacanciesItemPageCollections/>
                </div>
                <div className="vacanciesItemPage-conatiner__form">
                    {
                        vacancies.filter((c) => c.id === vacansieId ).map((v) => {
                            return <VacanciesItemPageForm   key={v.id} 
                                                            workName={v.workName}
                                                            workPosition={v.workPosition}
                                                            city={v.city}
                                                            country={v.country}
                                                            WorkConditions={v.WorkConditions}
                                                            createDay={v.createDay}
                                                            companyId={v.companyId}
                                                            workCategory={v.workCategory}
                                                            typeOfWork={v.typeOfWork}
                                                            WorkHours={v.WorkHours}
                                                            desc={v.desc}
                                                            jobDuties={v.jobDuties}
                                                            necessarySkills={v.necessarySkills}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default VacanciesItem;