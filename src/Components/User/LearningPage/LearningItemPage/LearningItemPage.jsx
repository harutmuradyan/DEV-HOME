import React from "react";
import './learningItemPage.scss';


import LearningItemPageContent from "./LearningItemPageContent/LearningItemPageContent";
import LearningItemPageCourse from "./LearningItemPageCourse/LearningItemPageCourse";

import LearningItemPageHeader from "./LearningItemPageHeader/LearningItemPageHeader";
import LearningItemPageRandomItems from "./LearningItemPageRandomItems/LearningItemPageRandomItems";

const LearningItemPage = () => {
    return (
        <div className="learningItemPage">
            <div className="learningItemPage-conatiner">
                <div className="learningItemPage-header">
                    <LearningItemPageHeader/>
                </div>
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

export  default LearningItemPage;