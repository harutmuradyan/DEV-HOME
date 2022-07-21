import React from "react";
import './teachers.scss';



import { useSelector } from "react-redux";
import TeachersItem from "./TeachersItem/TeachersItem";

const Teachers = () => {

    const {users} = useSelector((state) => state.user)

    return (
        <div className="teachers">
            <div className="teachers-header">
                <h2 className="teachers-header__title">Դասախոսներ</h2>
                <button className="teachers-header__btn">Դիտել ավելին</button>
            </div>
            <div className="teachers-block">
                {
                    [...users].filter((u) => u.teacher === true).map((e) => {
                        return <TeachersItem     key={e.id}
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

export default Teachers;