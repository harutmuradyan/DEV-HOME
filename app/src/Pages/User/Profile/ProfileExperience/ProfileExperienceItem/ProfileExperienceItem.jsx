import React from "react";
import './profileExperienceItem.scss';

const ProfileExperienceItem = () => {
    return (
        <div className="profileExperienceItem">
            <div className="profileExperienceItem-content">
                <div className="profileExperienceItem-content__img">
                    <img    src="https://www.pngitem.com/pimgs/m/112-1127599_erp-software-development-company-png-images-for-software.png" 
                            alt=""></img>
                </div>
                <div className="profileExperienceItem-content__info">
                    <h2>Code Academy</h2>
                    <p>Postal communication DefinitionR</p>
                    <p>Սկինբ 2022 - ավարտ 2024</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileExperienceItem;