import React from "react";
import './users.scss';

import {useSelector} from 'react-redux'

import User from "./User/User";

const Users = () => {

    const {data} = useSelector((state) => state.user);

    return (
        <div className="users">
            <div className="users-header">
                <h2 className="users-header__title">
                    Կազմակերպություններ որոնց կարող եք հետևել
                </h2>
                <button className="users-header__more">Դիտել ավելին</button>
            </div>
            <div className="users-container">
                {
                    data.map((el,index) => {
                        return  <User   key={el.id} 
                                        name={el.name} 
                                        logo={el.logo} 
                                        cover={el.cover}
                                        profession={el.profession}
                                        />
                    })
                }
            </div>
        </div>
    )
}

export default Users;
