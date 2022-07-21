import React,{useState} from "react";
import './vacancieAbout.scss';

import VacanciesItemPageSendOnlineModal from "./VacanciesItemPageSendOnlineModal/VacanciesItemPageSendOnlineModal";
import VacanciesItemPageSendSvModal from "./VacanciesItemPageSendSvModal/VacanciesItemPageSendSvModal";

import { useSelector } from "react-redux";
import SuccessBtn from "../UI/SuccessBtn/SuccessBtn";

const VacancieAbout = ({    city ,
                                    country,
                                    WorkConditions,
                                    createDay,
                                    workCategory,
                                    workName,
                                    typeOfWork,
                                    WorkHours,
                                    desc,
                                    jobDuties,
                                    necessarySkills,
                                    companyId  }) => {

    const [vacanciesItemPageSendOnlineModal,setVacanciesItemPageSendOnlineModal] = useState(false);
    const [vacanciesItemPageSendSvModal,setVacanciesItemPageSendSvModal] = useState(false);

    const {companyes} = useSelector((state) => state.company)

    return (
        <div className="vacancieAbout">
            <div className="vacancieAbout-header">
                <div className="vacancieAbout-header__info">
                    <h2 className="vacancieAbout-header__info-title">{workName}</h2>
                    <div className="vacancieAbout-header__info-block">
                        <p>{country}</p>
                        <p>{city}</p>
                        <p>{createDay}</p>
                    </div>
                </div>
                <div className="vacancieAbout-header__btns">
                    <button onClick={() => {setVacanciesItemPageSendOnlineModal(true)}}>Դիմել օնլայն</button>
                    <button onClick={() => {setVacanciesItemPageSendSvModal(true)}}>Ուղղարկել SV</button>
                </div>
            </div>
            <nav className="vacancieAbout-nav">
                <ul className="vacancieAbout-nav__block">
                    <li className="vacancieAbout-nav__block-item">
                        <span>Մակարդակ :</span>
                        {typeOfWork}
                    </li>
                    <li className="vacancieAbout-nav__block-item">
                        <span>Աշխատանքի պայմաններ :</span>
                        {WorkConditions}
                    </li>
                    <li className="vacancieAbout-nav__block-item">
                        <span>Կատեգորիա :</span>
                        {workCategory}
                    </li>
                    <li className="vacancieAbout-nav__block-item">
                        <span>Աշխատանքի տեսակը :</span>
                        {WorkHours}
                    </li>
                </ul>
            </nav>
            <div className="vacancieAbout-block">
                <h3 className="vacancieAbout-title">Աշխատանքի նկարագրություն՝</h3>
                <p className="vacancieAbout-text">{desc}</p>
            </div>
            <div className="vacancieAbout-block">
                <h3 className="vacancieAbout-title">Աշխատանքային պարտականություններ</h3>
                <p className="vacancieAbout-text">{jobDuties}</p>
            </div>
            <div className="vacancieAbout-block">
                <h3 className="vacancieAbout-title">Անհրաժեշտ հմտություններ</h3>
                <p className="vacancieAbout-text">{necessarySkills}</p>
            </div>
            {
                companyes.filter((c) => c.id === companyId).map((c) => {               
                    return  <div className="vacancieAbout-company"
                                key={c.id}>
                                <div className="vacancieAbout-company__block">
                                    <div className="vacancieAbout-company__block">
                                        <img src={c.logo}
                                            alt=""
                                            className="vacancieAbout-company__block-img"></img>
                                        <h4 className="vacancieAbout-company__block-name">{c.name}</h4>
                                    </div>
                                    <div className="vacancieAbout-header__btns">
                                        <SuccessBtn text="Հետևել"/>
                                    </div>
                                </div>
                                <p className="vacancieAbout-company__emploee">3000 Աշխատող</p>
                                <p className="vacancieAbout-company__info">Toptal is a network of the world's top talent in business, design, and technology that enables companies to scale their teams, on demand. With $200+ million in annual revenue and over 40% year-over-year growth, Toptal is the largest fully distributed workforce in the world.</p>
                            </div>
                }) 
            }
            <VacanciesItemPageSendOnlineModal       vacanciesItemPageSendOnlineModal={vacanciesItemPageSendOnlineModal} 
                                                    setVacanciesItemPageSendOnlineModal={setVacanciesItemPageSendOnlineModal}/>
            <VacanciesItemPageSendSvModal           vacanciesItemPageSendSvModal={vacanciesItemPageSendSvModal} 
                                                    setVacanciesItemPageSendSvModal={setVacanciesItemPageSendSvModal}/>
                                        
        </div>
    )
}

export default VacancieAbout;