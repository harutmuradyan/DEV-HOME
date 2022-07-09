import React from "react";
import './comment.scss'

import { useSelector } from "react-redux";

const Comment = ({id , desc , userid}) => {
    
    const {users} = useSelector((state) => state.user);

    return (
        <div className="comment">
            {users.filter((u) => u.id === userid).map((e) => {
                return  <div    key={e.id}
                                className="comment-user">
                                
                                <img    src={e.logo} 
                                        alt="" 
                                        className="comment-user__img"></img>
                        </div>
            })}
            <p className="comment-id">{id}</p>
            <p className="comment-desc">{desc}</p>
            <p className="comment-userid">{userid}</p>
        </div>
    )
}

export default Comment