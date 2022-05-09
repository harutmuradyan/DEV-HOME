import React from "react";
import './posts.scss';

import Post from "./Post/Post";

const Posts = () => {

return (
        <div className="posts">
            <div className="posts-filtr">
                <p className="posts-filtr__title">Դասակարգել</p>
                <select className="posts-filtr__category">
                    <option>Շատ դիտվաԾ</option>
                </select>
            </div>
            <div className="posts-items">
                <Post/>
                <Post/>
                <Post/>
            </div>
            <div className="posts-seeMore">
                <button className="posts-seeMore__btn">Դիտել ավելին</button>
            </div>
        </div>
    )
} 

export default Posts;