import React,{useState} from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import './license.scss';
import LicenseItem from "./LicenseItem/LicenseItem";
import ProfileLicenseModal from "./ProfileLicenseModal/ProfileLicenseModal";


const License = () => {

    const [profileLicenseModal,setProfileLicenseModal] = useState(false);
    const {licenses} = useSelector((state) => state.license)
    const currentUser = 4;

    return (
        <div className="license">
            <div className="license-header">
                <h2 className="license-header__title">Լիազորագրեր</h2>
                <div className="license-header__block">
                    <button className="license-header__btn" 
                            onClick={() => {setProfileLicenseModal(true)}}>
                        <FontAwesomeIcon    className="license-header__btn" 
                                            icon={faAdd}/>
                    </button>
                </div>
            </div>

            {
                [...licenses].filter((e) => e.userId === currentUser).sort((a, b) => b.id - a.id).map((e) => {
                    return  <LicenseItem    key={e.id}
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

export default License;