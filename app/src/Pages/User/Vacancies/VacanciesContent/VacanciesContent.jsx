import React from "react";
import './vacanciesContent.scss';

import VacanciesSearch from "./VacanciesSearch/VacanciesSearch";
import VacanciesItem from "./VacanciesItem/VacanciesItem";

import { useSelector } from "react-redux" 

const VacanciesContent = () => {

    const {vacancies} = useSelector((state) => state.vacancie)

    return (
        <div className="vacanciesContent">
            <div className="vacanciesContent-container">
                <VacanciesSearch/>
            </div>
            <div className="vacanciesContent-container">
                {
                    vacancies.map((v) => {
                        return  <VacanciesItem  key={v.id} 
                                                vacancieId={v.id}
                                                workName={v.workName} 
                                                workPosition={v.workPosition}
                                                createDay={v.createDay}
                                                companyId={v.companyId}
                                                />
                    })
                }
            </div>
        </div>
    )
}

export default VacanciesContent;