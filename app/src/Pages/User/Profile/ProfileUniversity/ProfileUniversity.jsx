import React,{useState} from "react";
import './profileUniversity.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import ProfileUniversityItem from "./ProfileUniversityItem/ProfileUniversityItem";
import ProfileUniversityModal from "./ProfileUniversityModal/ProfileUniversityModal";

import { useSelector } from "react-redux";

const ProfileUniversity = () => {

    const [profileUniversityModal,setProfileUniversityModal] = useState(false);

    const {placesOfLearning} = useSelector((state) => state.placeOfLearning)

    const currentUser = 4;

    return (
        <div className="profileUniversity">
            <div className="profileUniversity-header">
                <h2 className="profileUniversity-header__title">Ուսուցում</h2>
                <div className="profileUniversity-header__block">
                    <button className="profileUniversity-header__btn" 
                            onClick={() => {setProfileUniversityModal(true)}}>
                        <FontAwesomeIcon    className="profileUniversity-header__icon" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>

            {
                [...placesOfLearning].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return <ProfileUniversityItem   key={e.id}
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

export default ProfileUniversity;