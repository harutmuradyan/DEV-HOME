import React,{useState,useCallback} from "react";
import './user.scss';

import LightBtn from "../../../Components/UI/LightBtn/LightBtn";
import DarkBtn from "../../../Components/UI/DarkBtn/DarkBtn";

const User = ({profession , name , logo , cover}) => {

    const [followUser,setFollowUser] = useState(false);

    const followHandler = useCallback( () => {
        if (followUser === true) {
            setFollowUser(false)
        }else {
            setFollowUser(true)
        }
    },[followUser])

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
                {
                    followUser  ? <LightBtn   text="Հետևում եք" 
                                                followHandler={followHandler}/> 
                                : <DarkBtn     text="Հետևեք"
                                                followHandler={followHandler}
                                />
                }
            </div>
        </div>
    )
}

export default User;
