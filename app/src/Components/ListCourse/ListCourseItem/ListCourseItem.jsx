import React from "react";
import './listCourseItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faLockOpen , 
            faBookmark } from "@fortawesome/free-solid-svg-icons";


const ListCourseItem = () => {
    return (
        <div className="listCourseItem">
            <FontAwesomeIcon    className="listCourseItem-icon" 
                                icon={faLockOpen}/>
            <div className="listCourseItem-block">
                <p className="listCourseItem-block__name">SQL Tips and Tricks Lessons 1</p>
                <p className="listCourseItem-block__clock">5.60 Վ</p>
            </div>
            <FontAwesomeIcon    className="listCourseItem-icon" 
                                icon={faBookmark}/>
        </div>
    )
}

export default ListCourseItem;