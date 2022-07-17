import React from "react";
import './offerOfLessons.scss';

import OfferOfLessonsItem from "./OfferOfLessonsItem/OfferOfLessonsItem";

import { useSelector } from "react-redux";

const OfferOfLessons = () => {

    const {lessons} = useSelector((state) => state.lesson)

    return (
        <div className="offerOfLessons">
            <h2 className="offerOfLessons-title">Ուսուցում</h2>
            {
                    <OfferOfLessonsItem />
            }
        </div>
    )
}

export default OfferOfLessons;