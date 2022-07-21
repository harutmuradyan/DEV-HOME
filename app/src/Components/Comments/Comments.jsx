import React from "react";
import './comments.scss'

import Comment from "./Comment/Comment";

import { useSelector } from "react-redux";

const Comments = ({commentsModal ,postId}) => {

    const {comments} = useSelector((state) => state.comment);
    console.log(comments)
    console.log(postId)
    console.log(commentsModal)
    return (
        <div className={commentsModal ? "comments active" : "comments"}>
            {
                comments.filter((c) => c.postId === postId).map((e) =>
                <Comment    key={e.id} 
                            desc={e.desc} 
                            userid={e.userId}/>
                )
            }
        </div>
    )
}

export default Comments