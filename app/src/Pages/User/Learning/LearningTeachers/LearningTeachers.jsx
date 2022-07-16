import React from "react";
import './learningTeachers.scss';

import LearningTeacher from "./LearningTeacher/LearningTeacher";

import { useSelector } from "react-redux";

const LearningTeachers = () => {

    const {users} = useSelector((state) => state.user)

    return (
        <div className="learningTeachers">
            <div className="learningTeachers-header">
                <h2 className="learningTeachers-header__title">Դասախոսներ</h2>
                <button className="learningTeachers-header__btn">Դիտել ավելին</button>
            </div>
            <div className="learningTeachers-block">
                {
                    [...users].filter((u) => u.teacher === true).map((e) => {
                        return <LearningTeacher     key={e.id}
                                                    name={e.name} 
                                                    profession={e.profession} 
                                                    logo={e.logo}
                                                    userId={e.id}
                                                    />
                    })
                }
            </div>
        </div>
    )
}

export default LearningTeachers;