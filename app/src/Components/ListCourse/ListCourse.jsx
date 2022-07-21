import React from "react";
import './listCourse.scss';
import ListCourseItem from "./ListCourseItem/ListCourseItem";


const ListCourse = () => {
    return (
        <div className="listCourse">
            <h2 className="listCourse-title">Դասերի ցուցակ</h2>
            <div className="listCourse-container">
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
                <ListCourseItem/>
            </div>
        </div>
    )
}

export default ListCourse;