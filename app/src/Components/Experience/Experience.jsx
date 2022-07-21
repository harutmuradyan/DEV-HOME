import React,{useState} from "react";
import './experience.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import ExperienceItem from "./ExperienceItem/ExperienceItem";
import ProfileExperienceModal from "./ProfileExperienceModal/ProfileExperienceModal";

import { useSelector} from 'react-redux'

const Experience = () => {

    const [profileExperienceModal,setProfileExperienceModal] = useState(false);

    const {experiances} = useSelector((state) => state.experiance)

    const currentUser = 4;

    return (
        <div className="experience">
            <div className="experience-header">
                <h2 className="experience-header__title">Աշխատանքային փորձ</h2>
                <div className="experience-header__block">
                    <button className="profileExperience-header__btn" 
                            onClick={() => {setProfileExperienceModal(true)}}>
                        <FontAwesomeIcon    className="experience-header__btn" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>

            {
                [...experiances].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return <ExperienceItem  key={e.id}
                                            companyName={e.companyName}
                                            startWork={e.startWork}
                                            endWork={e.endWork}
                                            profession={e.profession}
                                            logo={e.logo}                   
                    />  
                })
            }

            
            <ProfileExperienceModal profileExperienceModal={profileExperienceModal} 
                                    setProfileExperienceModal={setProfileExperienceModal}/>
        </div>
    )
}

export default Experience;