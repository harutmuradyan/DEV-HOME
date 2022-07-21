import React from "react";
import './vacanciesItemPageCollections.scss';

import { useSelector } from "react-redux";

const VacanciesItemPageCollection = ({  workPosition , 
                                        workName , 
                                        city , 
                                        country , 
                                        createDay ,
                                        WorkConditions,
                                        companyId   }) => {
    
    const {companyes} = useSelector((state) => state.company);

    return (
        <div className="vacanciesItemPageCollection">
            <div className="vacanciesItemPageCollection-content">
                {
                    companyes.filter((c) => c.id === companyId).map((c) => {
                        return <div className="vacanciesItemPageCollection-content__img"
                                    key={c.id}>
                                    <img src={c.logo}
                                        alt=""></img>
                                </div> 
                    })
                }
                <div className="vacanciesItemPageCollection-content__info">
                    <h2>{workName}</h2>
                    <p>{workPosition}</p>
                    <p>{country}, {city} ({WorkConditions})</p>
                    <div className="vacanciesItemPageCollection-content__employee ">
                        <img    className="vacanciesItemPageCollection-content__employee-img"
                                src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
                                alt=""></img>
                        <p  className="vacanciesItemPageCollection-content__employee-users">2 մարդ աշխատում են այստեղ</p>
                    </div>
                    <p>{createDay}</p>
                </div>
            </div>
        </div>
    )
}

export default VacanciesItemPageCollection;