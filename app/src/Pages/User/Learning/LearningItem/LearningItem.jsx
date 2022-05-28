import React from "react";
import './learningItem.scss';


import LearningItemPageContent from "./LearningItemPageContent/LearningItemPageContent";
import LearningItemPageCourse from "./LearningItemPageCourse/LearningItemPageCourse";
import LearningItemPageHeader from "./LearningItemPageHeader/LearningItemPageHeader";
import LearningItemPageRandomItems from "./LearningItemPageRandomItems/LearningItemPageRandomItems";
import LearningItemView from "./LearningItemView/LearningItemView";

const LearningItem = () => {
    return (
        <div className="learningItemPage">
            <div className="learningItemPage-conatiner">
                <div className="learningItemPage-header">
                    <LearningItemPageHeader/>
                </div>
            </div>
            <div>
                <LearningItemView/>
            </div>
            <div className="learningItemPage-conatiner">
                <div className="learningItemPage-conatiner__content">
                    <LearningItemPageContent/>
                </div>
                <div className="learningItemPage-conatiner__sidebar">
                    <LearningItemPageCourse/>
                    <LearningItemPageRandomItems/>
                </div>
            </div>
        </div>
    )
}

export  default LearningItem;