import React from "react";
import './user.scss';

const User = ({profession , name , logo , cover}) => {
    return (
        <div className="user">
            <div className="user-block">
                <img    className="user-block__cover"
                        src={cover}
                        alt=""></img>
            </div>
            <div className="user-logo">
                <img    className="user-logo__img" 
                            src={logo} 
                            alt=""></img>
            </div>
            <h2 className="user-name">{name}</h2>
            <p className="user-profession">{profession}</p>
            <div className="user-frends">
                <button className="user-frends__btn">Ընկերանալ</button>
            </div>
        </div>
    )
}

export default User;
