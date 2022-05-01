import React,{useState} from "react";
import './profileAddPost.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import ProfileAddPostModal from "./ProfileAddPostModal/ProfileAddPostModal";

const ProfileAddPost = () => {

    const [profileAddPostModal,setProfileAddPostModal] = useState(false);

    return (
        <div className="profileAddPost">
            <h2 className="profileAddPost-title">գործողություններ</h2>
            <div className="profileAddPost-container">
                <div className="profileAddPost-block">
                    <FontAwesomeIcon className="profileAddPost-icon" icon={faUserFriends}/>
                    <div className="profileAddPost-text">
                        <p>1900 Հետևողներ</p>
                    </div>
                </div>
                <div className="profileAddPost-block">
                    <div className="profileAddPost-btn">
                        <button onClick={() => {setProfileAddPostModal(true)}}>Ավելացնել գրառում</button>
                    </div>
                </div>
            </div>
            <ProfileAddPostModal profileAddPostModal={profileAddPostModal} 
                                    setProfileAddPostModal={setProfileAddPostModal}/>
        </div>
    )
}

export default ProfileAddPost;