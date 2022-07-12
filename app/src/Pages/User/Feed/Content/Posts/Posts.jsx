import React,{useState , useCallback} from "react";
import './posts.scss';

import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {

    const {posts} = useSelector((state) => state.post);
    
    const [lastPost , setLastPost] = useState(false);
    const [popularPost , setPopularPost] = useState(false);
    const [randomPost , setRandomPost] = useState(false);

    const filterLastPost = useCallback ( () => {
        const lastPost =  [...posts].sort((a, b) => b.id - a.id);
        return lastPost.map( (el) => {
            return <Post    key={el.id}
                            id={el.id}
                            cover={el.cover}
                            desc={el.desc}
                            userId={el.userId}
                            />
        })
    },[posts])

    const filterPopularPost = useCallback ( () => {
        const popularPost =  [...posts].filter((e) => e.like >= 50).sort((a, b) => b.id - a.id);
        return popularPost.map( (el) => {
            return <Post    key={el.id}
                            id={el.id}
                            cover={el.cover}
                            desc={el.desc}
                            userId={el.userId}
                            />
        })
    },[posts])

    const filterRandomPost = useCallback ( () => {
        const randomPost =  [...posts].filter((e) => e.like >= 10).sort((a, b) => b.id - a.id);
        return randomPost.map( (el) => {
            return <Post    key={el.id}
                            id={el.id}
                            cover={el.cover}
                            desc={el.desc}
                            userId={el.userId}
                            />
        })
    },[posts])

    return (
        <div className="posts">
            <div className="posts-items">
                <div className="posts-filtr">
                <p className="posts-filtr__title">Դասակարգել</p>
                <div className="posts-filtr__category">
                    <div onClick={() => {setLastPost(true)}}>Վերջինը</div>
                    <div onClick={() => {setPopularPost(true)}}>Շատ հավանած</div>
                </div>
            </div>
            <div className="posts-container">
                <div className={lastPost ? "posts-section active" : "posts-section"}>
                    {filterLastPost()}
                </div>
                <div className={popularPost ? "posts-section active" : "posts-section"}>
                    {filterPopularPost()}
                </div>
                <div className={randomPost ? "posts-section active" : "posts-section"}>
                    {filterRandomPost()}
                </div>
            </div>
            </div>
        </div>
    )
} 

export default Posts;