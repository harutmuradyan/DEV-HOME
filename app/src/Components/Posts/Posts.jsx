import React,{useState , useCallback} from "react";
import './posts.scss';

import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {

    const {posts} = useSelector((state) => state.post);
    
    console.log(posts)

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
      };

    const LastPostHandler = useCallback ( () => {
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

    const PopularPostHandler = useCallback ( () => {
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

    

    

    return (
        <div className="posts">
            <div className="posts-items">
                <div className="posts-filtr">
                <p className="posts-filtr__title">Դասակարգել</p>
                <div className="posts-filtr__category">
                    <button onClick={() => toggleTab(1)}>Վերջինը</button>
                    <button onClick={() => toggleTab(2)}>Շատ հավանած</button>
                </div>
            </div>
            <div className="posts-container">
                <div className={toggleState === 1 ? "posts-section active" : "posts-section"}>
                    <LastPostHandler/>
                </div>
                <div className={toggleState === 2 ? "posts-section active" : "posts-section"}>
                    <PopularPostHandler/>
                </div>
            </div>
            </div>
        </div>
    )
} 

export default Posts;