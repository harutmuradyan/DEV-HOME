import React,{useState , useCallback} from "react";
import './befriendUser.scss'

import { Link  } from "react-router-dom";
import SuccessBtn from "../../UI/SuccessBtn/SuccessBtn";
import LightBtn from "../../UI/LightBtn/LightBtn";

const BefriendUser = ({name,profession,logo,workplace,id}) => {

    const [followUser,setFollowUser] = useState(false);

    const followHandler = useCallback( () => {
        if (followUser === true) {
            setFollowUser(false)
        }else {
            setFollowUser(true)
        }
    },[followUser])

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
                {
                    followUser  ? <SuccessBtn   text="Հետևեք " 
                                                followHandler={followHandler}/> 
                                : <LightBtn     text="Հետևում եք"
                                                followHandler={followHandler}
                                />
                }
            </div>
        </div>
    )
}

export default BefriendUser;