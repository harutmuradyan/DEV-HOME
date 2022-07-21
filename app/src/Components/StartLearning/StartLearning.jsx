import React from "react";
import './startLearning.scss';

const StartLearning = () => {
    return (
        <div className="startLearning">
            <div className="startLearning-container">
                <div className="startLearning-left">
                    <p className="startLearning-left__info">Բարի գալուտ գիտելիքի մեծ աշխարհ : Այստեղ դուք ունեք մեծ հնարավորություններ նոր գիտելիքներ ձեռք բերելու։</p>
                    <p className="startLearning-left__followers">Արդեն Օգտագործում են շատերը</p>
                    <button className="startLearning-left__start">Սկսել ուսուցումը մեկ ամիս անվճար</button>
                </div>
                <div className="startLearning-right">
                    <img    className="startLearning-right__img" 
                            src="https://cdn.dribbble.com/users/2918596/screenshots/9246326/media/d2a065d587a99f32128f223b2d8e7d69.gif" 
                            alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default StartLearning;