import React from "react";
import './comment.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Comment = ({desc , userid}) => {
    
    const {users} = useSelector((state) => state.user);

    return (
        <div className="comment">
            {users.filter((u) => u.id === userid).map((e) => {
                return  <div    key={e.id}
                                className="comment-user">
                                
                                <img    src={e.logo} 
                                        alt="" 
                                        className="comment-user__img"></img>
                                <div className="comment-user__container">
                                    <h2 className="comment-user__name">{e.name}</h2>
                                    <div className="comment-user__block">
                                        <p className="comment-date">3 օր առաջ</p>
                                        <button className="comment-bar">
                                            <FontAwesomeIcon    icon={faBars} 
                                                                className="comment-bar__icon"/>
                                        </button>
                                    </div>
                                </div>
                        </div>
            })}
            <div className="comment-desc">
                <p className="comment-desc__text">{desc}</p>
            </div>
        </div>
    )
}

export default Comment