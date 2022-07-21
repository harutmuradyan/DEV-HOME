import React from "react";
import LearningAbout from "../../../Components/LearningAbout/LearningAbout";
import ListCourse from "../../../Components/ListCourse/ListCourse";
import OfferOfLessons from "../../../Components/OfferOfLessons/OfferOfLessons";
import Player from "../../../Components/Player/Player";
import StartLearning from "../../../Components/StartLearning/StartLearning";
import './learningItem.scss';





const LearningItem = () => {
    return (
        <div className="learningItemPage">
            <div className="learningItemPage-conatiner">
                <div className="learningItemPage-header">
                    <StartLearning/>
                </div>
            </div>
            <div>
                <Player/>
            </div>
            <div className="learningItemPage-conatiner">
                <div className="learningItemPage-conatiner__content">
                    <LearningAbout/>
                </div>
                <div className="learningItemPage-conatiner__sidebar">
                    <ListCourse/>  
                    <OfferOfLessons/>
                </div>
            </div>
        </div>
    )
}

export  default LearningItem;