import React from "react";
import './profileFrends.scss';

import { useSelector } from "react-redux";

import ProfileAddFrends from "./ProfileAddFrends/ProfileAddFrends";

const ProfileFrends = () => {

    const {users} = useSelector((state) => state.user) 

    return (
        <div className="profileFrends">
            <h2 className="profileFrends-title">Գտեք նոր ընկերներ</h2>
            {
                users.filter(el => el.id <= 5).map((el) => {
                    return  <ProfileAddFrends   key={el.id}
                                                logo={el.logo}
                                                name={el.name}
                                                profession={el.profession}
                    />
                })
            }
        </div>
    )
}

export default ProfileFrends;