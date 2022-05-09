import React,{useState} from "react";
import './profileUniversity.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd , faPen} from "@fortawesome/free-solid-svg-icons";

import ProfileUniversityItem from "./ProfileUniversityItem/ProfileUniversityItem";
import ProfileUniversityModal from "./ProfileUniversityModal/ProfileUniversityModal";

const ProfileUniversity = () => {

    const [profileUniversityModal,setProfileUniversityModal] = useState(false);

    return (
        <div className="profileUniversity">
            <div className="profileUniversity-header">
                <h2 className="profileUniversity-header__title">Ուսուցում</h2>
                <div className="profileUniversity-header__block">
                    <button className="profileUniversity-header__btns" 
                            onClick={() => {setProfileUniversityModal(true)}}>
                        <FontAwesomeIcon    className="profileUniversity-header__btn" 
                                            icon={faAdd}/>
                    </button>
                    <button className="profileUniversity-header__btns">
                        <FontAwesomeIcon    className="profileUniversity-header__btn" 
                                            icon={faPen}/>
                    </button>
                </div>
            </div>

            <ProfileUniversityItem/>
            <ProfileUniversityItem/>
            <ProfileUniversityItem/>

            <ProfileUniversityModal     profileUniversityModal={profileUniversityModal} 
                                        setProfileUniversityModal={setProfileUniversityModal}/>
        </div>
    )
}

export default ProfileUniversity;