import React from "react";
import './profileUniversityItem.scss';

const ProfileUniversityItem = () => {
    return (
        <div className="profileUniversityItem">
            <div className="profileUniversityItem-content">
                <div className="profileUniversityItem-content__img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/GorSU_logo.png" alt=""></img>
                </div>
                <div className="profileUniversityItem-content__info">
                    <h2>Հայաստանի Պետական Ճարտարագիտական Համալսարան</h2>
                    <p>Postal communication DefinitionR</p>
                    <p>Սկինբ 2022 - ավարտ 2024</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileUniversityItem;