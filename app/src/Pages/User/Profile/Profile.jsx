import React from "react";
import './profile.scss';

import { useSelector } from "react-redux";

import ProfileContent from "./ProfileContent/ProfileContent";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";
import ProfileFrends from "./ProfileFrends/ProfileFrends";
import ProfileLearning from "./ProfileLearning/ProfileLearning";
import ProfileStatistics from "./ProfileStatistics/ProfileStatistics";
import ProfileAddPost from "./ProfileAddPost/ProfileAddPost";
import ProfileUniversity from "./ProfileUniversity/ProfileUniversity";
import ProfileLicense from "./ProfileLicense/ProfileLicense";
import ProfileSkills from "./ProfileSkills/ProfileSkills";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileExperience from "./ProfileExperience/ProfileExperience";

const Profile = () => {
    
    const {users} = useSelector((state) => state.user);

    return (
        <div className="profilePage">
            <div className="profilePage-container">
                <div className="profilePage-content">
                    {
                        users.filter(el => el.id === 4).map((el) => {
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
                    <ProfileAbout/>
                    <ProfileAddPost/>
                    <ProfileExperience/>
                    <ProfileUniversity/>
                    <ProfileSkills/>
                    <ProfileLicense/>
                </div>
                <div className="profilePage-sidebar">
                    <ProfileFrends/>
                    <ProfileLearning/>
                    <ProfileSidebar/>
                </div>
            </div>
        </div>
    )
}

export default Profile;