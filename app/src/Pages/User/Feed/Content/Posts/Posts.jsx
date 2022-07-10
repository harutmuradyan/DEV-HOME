import React from "react";
import './posts.scss';

import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {

    const {posts} = useSelector((state) => state.post);
     
    return (
        <div className="posts">
            <div className="posts-filtr">
                <p className="posts-filtr__title">Դասակարգել</p>
                <select className="posts-filtr__category">
                    <option>Վերջինը</option>
                    <option>Շատ հավանած</option>
                </select>
            </div>
            <div className="posts-items">
                {
                    posts.map( (el) => {
                        return <Post    key={el.id}
                                        id={el.id}
                                        cover={el.cover}
                                        desc={el.desc}
                                        userId={el.userId}
                                        />
                    })
                }
            </div>
        </div>
    )
} 

export default Posts;