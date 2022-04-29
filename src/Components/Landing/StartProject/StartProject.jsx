import React from "react";
import './startProject.scss'

const StartProject = () => {
    return (
        <div className="startProject">
            <div className="startProject-content">
                <div className="startProject-block">
                    <h2 className="startProject-block__title">
                        Միացիր ընկերներիդ և կոլոգաներիտ DEV HOME - ում  
                    </h2>
                    <button className="startProject-block__linq">
                        Սկսել
                    </button>
                </div>
                <div className="startProject-cover">
                    <img className="startProject-cover__img" src="https://www.lrec.coop/application/files/5816/0754/3341/virtual-meetings.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default StartProject;