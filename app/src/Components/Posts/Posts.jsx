import React from "react";
import { useFilterPost } from "../../Utils/Hooks/useFilterPost";
import './posts.scss';

const Posts = () => {

    const { LastPostHandler,
            PopularPostHandler,
            toggleTabHandler,
            postFilter,
            toggleState } = useFilterPost();

    return (
        <div className="posts">
            <div className="posts-items">
                <div className="posts-filtr">
                    <p  className="posts-filtr__title" 
                        onClick={() => toggleTabHandler()}>Դասակարգել</p>
                    <div className={postFilter ?  "posts-filtr__category active" : "posts-filtr__category"}>
                        <button onClick={() => toggleTabHandler(1)}>Վերջինը</button>
                        <button onClick={() => toggleTabHandler(2)}>Շատ հավանած</button>
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