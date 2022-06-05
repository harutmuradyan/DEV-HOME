import React from "react";
import './profileUniversityItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfileUniversityItem = () => {
    return (
        <div className="profileUniversityItem">
            <div className="profileUniversityItem-content">
                <div className="profileUniversityItem-content__img">
                    <img    src="https://upload.wikimedia.org/wikipedia/commons/3/35/GorSU_logo.png" 
                            alt=""></img>
                </div>
                <div className="profileUniversityItem-content__info">
                    <h2>Հայաստանի Պետական Ճարտարագիտական Համալսարան</h2>
                    <p>Postal communication DefinitionR</p>
                    <p>Սկինբ 2022 - ավարտ 2024</p>
                </div>
                <button className="profileUniversityItem-content__btn">
                    <FontAwesomeIcon    className="profileUniversityItem-content__icon" 
                                        icon={faPen}/>
                </button>
            </div>
        </div>
    )
}

export default ProfileUniversityItem;