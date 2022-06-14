import React from "react";
import './posts.scss';

import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {

    const {posts} = useSelector((state) => state.userpost)

    return (
        <div className="posts">
            <div className="posts-filtr">
                <p className="posts-filtr__title">Դասակարգել</p>
                <select className="posts-filtr__category">
                    <option>Շատ դիտվաԾ</option>
                </select>
            </div>
            <div className="posts-items">
                {
                    posts.filter((elem) => elem.id <= 10).map((el,index) => {
                        return <Post    key={el.id}
                                        logo={el.logo}
                                        postcover={el.postCover}
                                        desc={el.desc}
                                        />
                    })
                }
            </div>
            <div className="posts-seeMore">
                <button className="posts-seeMore__btn">Դիտել ավելին</button>
            </div>
        </div>
    )
} 

export default Posts;