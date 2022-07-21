import React from "react";
import './learningItemPageRandomItems.scss';

import LearningItemPageRandomItem from "./LearningItemPageRandomItem/LearningItemPageRandomItem";



const LearningItemPageRandomItems = () => {
    return (
        <div className="learningItemPageRandomItems">
            <h2 className="learningItemPageRandomItems-title">Առաջարկվող Դասեր</h2>
            <LearningItemPageRandomItem/>
            <LearningItemPageRandomItem/>
            <LearningItemPageRandomItem/>
            <LearningItemPageRandomItem/>
        </div>
    )
}

export default LearningItemPageRandomItems;