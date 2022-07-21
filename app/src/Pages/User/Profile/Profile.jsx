import React from "react";
import './profile.scss';

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import ProfileContent from "./ProfileContent/ProfileContent";
import ProfileStatistics from "./ProfileStatistics/ProfileStatistics";
import ProfileAddPost from "./ProfileAddPost/ProfileAddPost";
import ProfileUniversity from "./ProfileUniversity/ProfileUniversity";
import ProfileLicense from "./ProfileLicense/ProfileLicense";
import ProfileSkills from "./ProfileSkills/ProfileSkills";

import ProfileExperience from "./ProfileExperience/ProfileExperience";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import Befriend from "../../../Components/Befriend/Befriend";
import OfferOfLessons from "../../../Components/OfferOfLessons/OfferOfLessons";
import AboutDesc from "../../../Components/AboutDesc/AboutDesc";

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
                    <ProfileStatistics />
                    <AboutDesc/>
                    <ProfileAddPost/>
                    <ProfileExperience/>
                    <ProfileUniversity/>
                    <ProfileSkills/>
                    <ProfileLicense/>
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