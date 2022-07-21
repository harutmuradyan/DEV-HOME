import React from "react";
import './jobs.scss';

import { useSelector } from "react-redux" 
import Job from "./Job/Job";
import JobsSearch from "../JobsSearch/JobsSearch";

const Jobs = () => {

    const {vacancies} = useSelector((state) => state.vacancie)

    return (
        <div className="jobs">
            <div className="jobs-container">
                <JobsSearch/>
            </div>
            <div className="jobs-container">
                {
                    vacancies.map((v) => {
                        return  <Job    key={v.id} 
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

export default Jobs;