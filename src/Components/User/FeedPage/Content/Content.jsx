import React from "react";
import './content.scss';

import CreatePost from "./CreatePost/CreatePost";
import Posts from "./Posts/Posts";

const Content = () => {
    return (
        <div className="content">
            <div className="content-container">
                <CreatePost/>
            </div>
            <div className="content-container">
                <Posts />
            </div>
        </div>
    )
}

export default Content;