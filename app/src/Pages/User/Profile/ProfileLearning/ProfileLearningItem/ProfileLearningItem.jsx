import React from "react";
import './profileLearningItem.scss';

const ProfileLearningItem = () => {
    return (
        <div className="profileLearningItem">
            <div className="profileLearningItem-content">
                <div className="profileLearningItem-content__img">
                    <img    src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
                            alt=""></img>
                </div>
                <div className="profileLearningItem-content__info">
                    <h2>JS դասընթաց</h2>
                    <p>Դիտել են 100</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileLearningItem;