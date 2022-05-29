import React from "react";
import './learningItemPageContentComments.scss';

import LearningItemPageContentComment from "./LearningItemPageContentComment/LearningItemPageContentComment";

const LearningItemPageContentComments = () => {
    return (
        <div className="learningItemPageContentComments">
            <h2 className="learningItemPageContentComments-title">Մեկնաբանություններ</h2>
            <div className="learningItemPageContentComments-container">
                <LearningItemPageContentComment/>
                <LearningItemPageContentComment/>
                <LearningItemPageContentComment/>
                <LearningItemPageContentComment/>
                <LearningItemPageContentComment/>
                <LearningItemPageContentComment/>
            </div>
            <div className="learningItemPageContentComments-more">
                <button className="learningItemPageContentComments-more__btn">Դիտել ավելին</button>
            </div>
        </div>
    )
}

export default LearningItemPageContentComments;