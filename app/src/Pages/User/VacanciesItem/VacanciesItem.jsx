import React from "react";
import './vacanciesItem.scss';
import Jobs from "../../../Components/Jobs/Jobs";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VacancieAbout from "../../../Components/VacancieAbout/VacancieAbout";

const VacanciesItem = () => {

    const {vacancies} = useSelector((state) => state.vacancie);
    const {id} = useParams();

    const vacansieId = +id;

    return (
        <div className="vacanciesItemPage">
            <div className="vacanciesItemPage-conatiner">
                <div className="vacanciesItemPage-conatiner__items">
                    <div className="vacanciesItemPageCollections">
                        <h2 className="vacanciesItemPageCollections-title">Ձեզ համար ընտրված աշխատանքներ</h2>
                        <Jobs/>
                    </div>
                </div>
                <div className="vacanciesItemPage-conatiner__form">
                    {
                        vacancies.filter((c) => c.id === vacansieId ).map((v) => {
                            return <VacancieAbout   key={v.id} 
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