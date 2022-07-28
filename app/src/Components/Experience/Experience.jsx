import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useSelector} from 'react-redux'
import './experience.scss';
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import ExperienceSertings from "./ExperienceSertings/ExperienceSertings";

const Experience = () => {

    const [experienceSertings,setExperienceSertings] = useState(false);
    const {experiances} = useSelector((state) => state.experiance)
    const currentUser = 4;
    console.log(experiances)
    return (
        <div className="experience">
            <div className="experience-header">
                <h2 className="experience-header__title">Աշխատանքային փորձ</h2>
                <div className="experience-header__block">
                    <button className="profileExperience-header__btn" 
                            onClick={() => {setExperienceSertings(true)}}>
                        <FontAwesomeIcon    className="experience-header__btn" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>

            {
                [...experiances].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return <ExperienceItem  key={e.id}
                                            id={e.id}
                                            companyName={e.companyName}
                                            startWork={e.startWork}
                                            endWork={e.endWork}
                                            profession={e.profession}              
                    />  
                })
            }

            
            <ExperienceSertings experienceSertings={experienceSertings} 
                                setExperienceSertings={setExperienceSertings}/>
        </div>
    )
}

export default Experience;