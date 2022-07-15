import React,{useState} from "react";
import './profileLicense.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

import ProfileLicenseItem from "./ProfileLicenseItem/ProfileLicenseItem";
import ProfileLicenseModal from "./ProfileLicenseModal/ProfileLicenseModal";

import { useSelector } from "react-redux";

const ProfileLicense = () => {

    const [profileLicenseModal,setProfileLicenseModal] = useState(false);

    const {licenses} = useSelector((state) => state.license)

    const currentUser = 4;

    return (
        <div className="profileLicense">
            <div className="profileLicense-header">
                <h2 className="profileLicense-header__title">Լիազորագրեր</h2>
                <div className="profileLicense-header__block">
                    <button className="profileLicense-header__btn" 
                            onClick={() => {setProfileLicenseModal(true)}}>
                        <FontAwesomeIcon    className="profileLicense-header__btn" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>

            {
                [...licenses].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return  <ProfileLicenseItem     key={e.id}
                                                    universityName={e.universityName}
                                                    companyName={e.companyName}
                                                    startLearning={e.startLearning}
                                                    endLearning={e.endLearning}
                                                    profession={e.profession}
                                                    logo={e.logo}                   
                    />  
                })
            }

            <ProfileLicenseModal    profileLicenseModal={profileLicenseModal} 
                                    setProfileLicenseModal={setProfileLicenseModal}/>
        </div>
    )
}

export default ProfileLicense;