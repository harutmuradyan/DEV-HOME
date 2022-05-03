import React from "react";
import './learningContent.scss';

const LearningContent = () => {
    return (
        <div className="learningContent">
            <div className="learningContent-container">
                <div className="learningContent-left">
                    <p className="learningContent-left__info">Բարի գալուտ գիտելիքի մեծ աշխարհ ։ Այստեղ դուք ունեք մեծ հնարավորություններ նոր գիտելիքներ ձեռք բերելու։</p>
                    <p className="learningContent-left__followers">Արդեն Օգտագործում են շատերը</p>
                    <button className="learningContent-left__start">Սկսել ուսուցումը մեկ ամիս անվճար</button>
                
                </div>
                <div className="learningContent-right">
                    <img    className="learningContent-right__img" 
                                src="https://cdn.dribbble.com/users/2918596/screenshots/9246326/media/d2a065d587a99f32128f223b2d8e7d69.gif" 
                                alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default LearningContent;