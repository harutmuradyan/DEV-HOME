import React from "react";
import './teachersItem.scss';

import { Link } from "react-router-dom";

const TeachersItem = ({name,profession,logo,userId}) => {
    return (
        <div className="teachersItem">
            <Link to={{pathname:`/profile/${userId}`,  userId }}>
                <img    className="teachersItem-img" 
                        src={logo} 
                        alt=""></img>
                <p className="teachersItem-name">{name}</p>
                <p className="teachersItem-profesion">{profession}</p>
                <div className="teachersItem-follow">
                    <button className="teachersItem-follow__btn">Հետևել</button>
                </div>
            </Link>
        </div>
    )
}

export default TeachersItem;