import React,{useState} from "react";
import './teaching.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import TeachingItem from "./TeachingItem/TeachingItem";
import ProfileUniversityModal from "./ProfileUniversityModal/ProfileUniversityModal";

import { useSelector } from "react-redux";

const Teaching = () => {

    const [profileUniversityModal,setProfileUniversityModal] = useState(false);

    const {placesOfLearning} = useSelector((state) => state.placeOfLearning)

    const currentUser = 4;

    return (
        <div className="teaching">
            <div className="teaching-header">
                <h2 className="teaching-header__title">Ուսուցում</h2>
                <div className="teaching-header__block">
                    <button className="teaching-header__btn" 
                            onClick={() => {setProfileUniversityModal(true)}}>
                        <FontAwesomeIcon    className="teaching-header__icon" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>

            {
                [...placesOfLearning].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return <TeachingItem   key={e.id}
                                                    universityName={e.universityName}
                                                    startLearning={e.startLearning}
                                                    endLearning={e.endLearning}
                                                    profession={e.profession}
                                                    logo={e.logo}                   
                    />  
                })
            }


            <ProfileUniversityModal     profileUniversityModal={profileUniversityModal} 
                                        setProfileUniversityModal={setProfileUniversityModal}/>
        </div>
    )
}

export default Teaching;