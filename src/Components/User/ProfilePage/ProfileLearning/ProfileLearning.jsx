import React from "react";
import './profileLearning.scss';

import ProfileLearningItem from "./ProfileLearningItem/ProfileLearningItem";

const ProfileLearning = () => {
    return (
        <div className="profileLearning">
            <h2 className="profileLearning-title">Ուսուցում</h2>
            <ProfileLearningItem/>
            <ProfileLearningItem/>
            <ProfileLearningItem/>
            <ProfileLearningItem/>
            <ProfileLearningItem/>
        </div>
    )
}

export default ProfileLearning;