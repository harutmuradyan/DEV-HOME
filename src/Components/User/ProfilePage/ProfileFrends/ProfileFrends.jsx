import React from "react";
import './profileFrends.scss';

import ProfileAddFrends from "./ProfileAddFrends/ProfileAddFrends";

const ProfileFrends = () => {
    return (
        <div className="profileFrends">
            <h2 className="profileFrends-title">Գտեք նոր ընկերներ</h2>
            <ProfileAddFrends/>
            <ProfileAddFrends/>
            <ProfileAddFrends/>
            <ProfileAddFrends/>
            <ProfileAddFrends/>
        </div>
    )
}

export default ProfileFrends;