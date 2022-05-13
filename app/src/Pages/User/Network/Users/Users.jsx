import React from "react";
import './users.scss';

import User from "./User/User";

const Users = () => {
    return (
        <div className="users">
            <div className="users-header">
                <h2 className="users-header__title">
                    Կազմակերպություններ որոնց կարող եք հետևել
                </h2>
                <button className="users-header__more">Դիտել ավելին</button>
            </div>
            <div className="users-container">
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
                <User/>
            </div>
        </div>
    )
}

export default Users;
