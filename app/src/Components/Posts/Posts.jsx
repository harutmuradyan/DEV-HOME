import React,{useState , useCallback} from "react";
import './posts.scss';

import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {

    const {posts} = useSelector((state) => state.post);
    
    console.log(posts)

    const [lastPost , setLastPost] = useState(true);
    const [popularPost , setPopularPost] = useState(false);

    const filterLastPostHandler = useCallback ( () => {
        const lastPost =  [...posts].sort((a, b) => b.id - a.id);

        return lastPost.map( (el) => {
            return <Post    key={el.id}
                            id={el.id}
                            cover={el.cover}
                            video={el.video}
                            desc={el.desc}
                            userId={el.userId}
                            />
        })
    },[posts])

    const filterPopularPostHandler = useCallback ( () => {
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

    const filterLastPost = useCallback ( () => {
        if (lastPost === true && popularPost === true) {
            setPopularPost(false)
            setLastPost(false)
        } else if (lastPost === true && popularPost && false) {
            setLastPost(false)
            popularPost(false)
        } else {
            setLastPost(true)
            popularPost(false)
        }
    },[lastPost,popularPost])

    const filterPopularPost = useCallback ( () => {
        if (popularPost === false && lastPost === true) {
            setPopularPost(true)
            setLastPost(false)
        }else {
            setPopularPost(false)
            setLastPost(false)
        }
    },[popularPost,lastPost])

    return (
        <div className="posts">
            <div className="posts-items">
                <div className="posts-filtr">
                <p className="posts-filtr__title">Դասակարգել</p>
                <ul className="posts-filtr__category">
                    <li onClick={filterLastPost}>Վերջինը</li>
                    <li onClick={filterPopularPost}>Շատ հավանած</li>
                </ul>
            </div>
            <div className="posts-container">
                <div className={lastPost ? "posts-section active" : "posts-section"}>
                    {filterLastPostHandler()}
                </div>
                <div className={popularPost ? "posts-section active" : "posts-section"}>
                    {filterPopularPostHandler()}
                </div>
            </div>
            </div>
        </div>
    )
} 

export default Posts;