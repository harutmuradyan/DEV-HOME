import React from "react";
import './profielAbout.scss';

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileAbout = () => {
    return (
        <div className="profileAbout">
            <div className="profilAbout-container">
                <div className="profilAbout-block">
                    <h2 className="profileAbout-block__title">Ընդհանուր տեղեկություններ</h2>
                    <button className="profileAbout-block__add">
                        <FontAwesomeIcon className="profileContent-background__update-btn" icon={faAdd}/>
                    </button>
                </div>
                <p className="profileAbout-text">Այստեղ պետք է լինի Ձեր մասին , Ձեր կոմիղ տրամադրված ինքնակենսագրականը</p>
            </div>
        </div>
    )
}

export default ProfileAbout;