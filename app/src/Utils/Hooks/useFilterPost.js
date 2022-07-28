import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../../Components/Posts/Post/Post";

export function useFilterPost () {
    const [toggleState, setToggleState] = useState(1);
    const [postFilter , setPostFilter] = useState(false);

    const {posts} = useSelector((state) => state.post);

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

    const toggleTabHandler = useCallback ( (index) => {
        postFilter === false ? setPostFilter(true) : setPostFilter(false);
        setToggleState(index);
    },[postFilter]);

    return {
        LastPostHandler,
        PopularPostHandler,
        toggleTabHandler,
        postFilter,
        toggleState
    }
}