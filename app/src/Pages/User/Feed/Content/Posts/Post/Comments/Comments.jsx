import React from "react";
import './comments.scss'

import Comment from "./Comment/Comment";

import { useSelector } from "react-redux";

const Comments = ({commentsModal ,postId}) => {

    const {postComment} = useSelector((state) => state.postComment);
    
    return (
        <div className={commentsModal ? "post-content__comments active" : "post-content__comments"}>
            {
                postComment.filter((c) => c.postId === postId).map((e) =>
                <Comment    key={e.id} 
                            desc={e.desc} 
                            userid={e.userId}/>
                )
            }
        </div>
    )
}

export default Comments