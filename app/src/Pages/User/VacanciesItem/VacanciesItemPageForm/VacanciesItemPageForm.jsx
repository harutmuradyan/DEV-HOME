import React,{useState} from "react";
import './VacanciesItemPageForm.scss';

import VacanciesItemPageSendOnlineModal from "./VacanciesItemPageSendOnlineModal/VacanciesItemPageSendOnlineModal";
import VacanciesItemPageSendSvModal from "./VacanciesItemPageSendSvModal/VacanciesItemPageSendSvModal";

import { useSelector } from "react-redux";
import SuccessBtn from "../../../../Components/UI/SuccessBtn/SuccessBtn";

const VacanciesItemPageForm = ({    city ,
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
        <div className="vacanciesItemPageForm">
            <div className="vacanciesItemPageForm-header">
                <div className="vacanciesItemPageForm-header__info">
                    <h2 className="vacanciesItemPageForm-header__info-title">{workName}</h2>
                    <div className="vacanciesItemPageForm-header__info-block">
                        <p>{country}</p>
                        <p>{city}</p>
                        <p>{createDay}</p>
                    </div>
                </div>
                <div className="vacanciesItemPageForm-header__btns">
                    <button onClick={() => {setVacanciesItemPageSendOnlineModal(true)}}>Դիմել օնլայն</button>
                    <button onClick={() => {setVacanciesItemPageSendSvModal(true)}}>Ուղղարկել SV</button>
                </div>
            </div>
            <nav className="vacanciesItemPageForm-nav">
                <ul className="vacanciesItemPageForm-nav__block">
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Մակարդակ :</span>
                        {typeOfWork}
                    </li>
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Աշխատանքի պայմաններ :</span>
                        {WorkConditions}
                    </li>
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Կատեգորիա :</span>
                        {workCategory}
                    </li>
                    <li className="vacanciesItemPageForm-nav__block-item">
                        <span>Աշխատանքի տեսակը :</span>
                        {WorkHours}
                    </li>
                </ul>
            </nav>
            <div className="vacanciesItemPageForm-block">
                <h3 className="vacanciesItemPageForm-title">Աշխատանքի նկարագրություն՝</h3>
                <p className="vacanciesItemPageForm-text">{desc}</p>
            </div>
            <div className="vacanciesItemPageForm-block">
                <h3 className="vacanciesItemPageForm-title">Աշխատանքային պարտականություններ</h3>
                <p className="vacanciesItemPageForm-text">{jobDuties}</p>
            </div>
            <div className="vacanciesItemPageForm-block">
                <h3 className="vacanciesItemPageForm-title">Անհրաժեշտ հմտություններ</h3>
                <p className="vacanciesItemPageForm-text">{necessarySkills}</p>
            </div>
            {
                companyes.filter((c) => c.id === companyId).map((c) => {               
                    return  <div className="vacanciesItemPageForm-company"
                                key={c.id}>
                                <div className="vacanciesItemPageForm-company__block">
                                    <div className="vacanciesItemPageForm-company__block">
                                        <img src={c.logo}
                                            alt=""
                                            className="vacanciesItemPageForm-company__block-img"></img>
                                        <h4 className="vacanciesItemPageForm-company__block-name">{c.name}</h4>
                                    </div>
                                    <div className="vacanciesItemPageForm-header__btns">
                                        <SuccessBtn text="Հետևել"/>
                                    </div>
                                </div>
                                <p className="vacanciesItemPageForm-company__emploee">3000 Աշխատող</p>
                                <p className="vacanciesItemPageForm-company__info">Toptal is a network of the world's top talent in business, design, and technology that enables companies to scale their teams, on demand. With $200+ million in annual revenue and over 40% year-over-year growth, Toptal is the largest fully distributed workforce in the world.</p>
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

export default VacanciesItemPageForm;