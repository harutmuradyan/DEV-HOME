import React from "react";
import './profile.scss';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import ProfileContent from "../../../Components/ProfileContent/ProfileContent";
import License from "../../../Components/License/License"
import AddSkills from "../../../Components/AddSkills/AddSkills";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import Befriend from "../../../Components/Befriend/Befriend";
import OfferOfLessons from "../../../Components/OfferOfLessons/OfferOfLessons";
import AboutDesc from "../../../Components/AboutDesc/AboutDesc";
import Experience from "../../../Components/Experience/Experience";
import Statistics from "../../../Components/Statistics/Statistics";
import Teaching from "../../../Components/Teaching/Teaching";

const Profile = () => {
    
    const {users} = useSelector((state) => state.user);
    const {id} = useParams();
    const userId = +id;
    const currentUser = 4;

    return (
        <div className="profilePage">
            <div className="profilePage-container">
                <div className="profilePage-content">
                    {
                        [...users].filter(el => el.id === userId).map((el) => {
                            return  <ProfileContent key={el.id}
                                                    logo={el.logo}
                                                    cover={el.cover}
                                                    name={el.name}
                                                    profession={el.profession}
                                                    city={el.city}
                                                    earth={el.earth}
                            />
                        })
                    }
                    <Statistics />
                    <AboutDesc/>
                    <div className="profileAddPost">
                        <h2 className="profileAddPost-title">գործողություններ</h2>
                        <div className="profileAddPost-container">
                            <div className="profileAddPost-block">
                                <FontAwesomeIcon    className="profileAddPost-icon" 
                                                    icon={faUserFriends}/>
                                <div className="profileAddPost-text">
                                    <p>1900 Հետևողներ</p>
                                </div>
                            </div>
                            <div className="profileAddPost-block">
                                <div className="profileAddPost-btn">
                                    <button>Ավելացնել գրառում</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Experience/>
                    <Teaching/>
                    <AddSkills/>
                    <License/>
                </div>
                <div className="profilePage-sidebar">
                    <Befriend/>
                    <OfferOfLessons/>
                    <SidebarFooter/>
                </div>
            </div>
        </div>
    )
}

export default Profile;