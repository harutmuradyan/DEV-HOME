import React from "react";
import './profile.scss';

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
    return (
        <div className="profilePage">
            <div className="profilePage-container">
                <div className="profilePage-content">
                    <ProfileContent />
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