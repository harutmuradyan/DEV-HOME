import React from "react";
import './learningItemPage.scss';

import LearningItemPageContent from "./LearningItemPageContent/LearningItemPageContent";
import LearningItemPageRandomItems from "./LearningItemPageRandomItems/LearningItemPageRandomItems";

const LearningItemPage = () => {
    return (
        <div className="learningItemPage">
            <div className="learningItemPage-conatiner">
                <div className="learningItemPage-header">
                    <LearningItemPageContent/>
                </div>
            </div>
            <div className="learningItemPage-conatiner">
                <div className="learningItemPage-conatiner__content">

                </div>
                <div className="learningItemPage-conatiner__sidebar">
                    <LearningItemPageRandomItems/>
                </div>
            </div>
        </div>
    )
}

export  default LearningItemPage;