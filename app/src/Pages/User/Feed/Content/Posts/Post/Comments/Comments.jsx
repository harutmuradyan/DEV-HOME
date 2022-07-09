import React from "react";
import './comments.scss'

import Comment from "./Comment/Comment";

const Comments = ({comment,commentsModal}) => {

    return (
        <div className={commentsModal ? "post-content__comments active" : "post-content__comments"}>
            {comment.map((e) =>
                <Comment key={e.id} desc={e.desc} userid={e.userId}/>
            )}
        </div>
    )
}

export default Comments