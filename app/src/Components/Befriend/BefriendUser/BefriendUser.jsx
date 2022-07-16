import React from "react";
import './befriendUser.scss'

import { Link  } from "react-router-dom";

const BefriendUser = ({name,profession,logo,workplace,id}) => {

    return (
        <div className="befriendUser">
            <Link to={{pathname:`/profile/${id}`,  id }}>
            <div className="befriendUser-content">
                <div className="befriendUser-content__img">
                    <img    src={logo} 
                            alt=""></img>
                </div>
                <div className="befriendUser-content__info">
                    <h2>{name}</h2>
                    <p>{profession}</p>
                    <p>{workplace}</p>
                </div>
            </div>
            </Link>
            <div className="befriendUser-btn">
                <button className="befriendUser-content__follow">
                    Հետևել
                </button>
            </div>
        </div>
    )
}

export default BefriendUser;