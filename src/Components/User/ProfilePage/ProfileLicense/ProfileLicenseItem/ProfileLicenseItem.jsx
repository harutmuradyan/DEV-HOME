import React from "react";
import './profileLicenseItem.scss';

const ProfileLicenseItem = () => {
    return (
        <div className="profileLicenseItem">
            <div className="profileLicenseItem-content">
                <div className="profileLicenseItem-content__img">
                    <img src="https://avatars.githubusercontent.com/u/1463944?s=280&v=4" alt=""></img>
                </div>
                <div className="profileLicenseItem-content__info">
                    <h2>Code Academy</h2>
                    <p>Postal communication DefinitionR</p>
                    <p>Սկինբ 2022 - ավարտ 2024</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileLicenseItem;