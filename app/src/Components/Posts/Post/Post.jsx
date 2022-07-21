import React,{useState , useCallback} from "react";
import './post.scss'


import CreateComment from "../../CreateComment/CreateComment";
import SuccessBtn from "../../UI/SuccessBtn/SuccessBtn";
import LightBtn from "../../UI/LightBtn/LightBtn";
import Comments from "../../Comments/Comments";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faHeart , 
            faThumbsUp , 
            faHands , 
            faComment , 
            faRightLong , 
            faPaperPlane} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Post = ({cover , desc , userId , id  , video}) => {
    const [reactionBar , setReactionBar] = useState(false);
    const [commentBar , setCommentBar] = useState(false);
    const [followUser,setFollowUser] = useState(false);
    const [longDesc,setlongDesc] = useState(false);
    const [like,setLike] = useState(false);
    const [likeCount,setLikeCount] = useState(0);
    const [heart,setHeart] = useState(false);
    const [heartCount,setHeartCount] = useState(0);
    const [commentsModal,setCommentsModal] = useState(false);

    const {users} = useSelector((state) => state.user);

    const likeHandler = useCallback( () => {
        if (like === false) {
            setLike(true)
            setLikeCount(likeCount+1)
            setReactionBar(false)
        }else {
            setLike(false)
            setLikeCount(likeCount-1)
            setReactionBar(false)
        }
    },[like,likeCount])

    const heartHandler = useCallback( () => {
        if (heart === false ) {
            setHeart(true)
            setHeartCount(heartCount+1)
            setReactionBar(false)
        }else {
            setHeart(false)
            setHeartCount(heartCount-1)
            setReactionBar(false)
        }
    },[heart,heartCount])

    const followHandler = useCallback( () => {
        if (followUser === true) {
            setFollowUser(false)
        }else {
            setFollowUser(true)
        }
    },[followUser])

    const commentsModalHandler = useCallback( () => {
        if (commentsModal === true) {
            setCommentsModal(false)
        }else {
            setCommentsModal(true)
        }
    },[commentsModal])

    const reactionBarHandler = useCallback( () => {
        if (reactionBar === false) {
            setReactionBar(true)
        }else {
            setReactionBar(false)
        }
    },[reactionBar])
    
    const commentBarHandler = useCallback( () => {
        if (commentBar === true) {
            setCommentBar(false)
        }else {
            setCommentBar(true)
        }
    },[commentBar])

    const descHandler = useCallback( () => {
        const shortDesc = desc.slice(0,90) + "...";
        return longDesc ? <span>{desc}</span> : <span>{shortDesc}</span>
    },[longDesc,desc])

    const longDescHandler = useCallback( () => {
        if (longDesc === true) {
            setlongDesc(false)
        }else {
            setlongDesc(true)
        }
    },[longDesc])

    return (
        <div className="post">
            {[...users].filter((u) => u.id === userId).map((e) => {
                return (
                    <div    key={e.id} 
                            className="post-header">
                        <Link   to={{pathname:`/profile/${userId}`,  userId }}
                                className="post-link">
                            <div className="post-header__img">
                                <img    src={e.logo} 
                                        alt=""></img>
                            </div>
                            <div className="post-header__info">
                                <h2>{e.name}</h2>
                                <p>{e.profession}</p>
                                <p>1 օր</p>
                            </div>
                        </Link>
                        <div className="post-header__follow">
                            {
                                followUser  ? <SuccessBtn   text="Հետևեք"
                                                            followHandler={followHandler}/>
                                            : <LightBtn     text="Հետևում եք"
                                                            followHandler={followHandler}/>
                            }
                        </div>
                    </div>
                )
            })}
            <div className="post-content">
                <div className="post-content__title">
                    <p> {descHandler()} </p>
                    <button className="post-content__title-btn" onClick={longDescHandler}>Դիտել ամբողջը</button>
                </div>
                <div className={cover ? "post-content__photo active" : "post-content__photo"}>
                    <img    src={cover}
                            alt=""></img>
                </div>
                <div className={video ? "post-content__video active" : "post-content__video"}>
                    <video  controls>
                        <source src={video}></source>
                    </video>
                </div>
                <div className="post-content__block">
                    <div className="post-content__reactions">
                        <FontAwesomeIcon    icon={faHeart}  
                                            alt="" 
                                            className="post-content__reactions-icon red"></FontAwesomeIcon>
                        <FontAwesomeIcon    icon={faHands}  
                                            alt="" 
                                            className="post-content__reactions-icon green"></FontAwesomeIcon>
                        <FontAwesomeIcon    icon={faThumbsUp}  
                                            alt="" 
                                            className="post-content__reactions-icon blue"></FontAwesomeIcon>
                        <p className="post-content__reactions-user">Գագիկ Նալբանդյան</p>
                        <p className="post-content__reactions-count">{heartCount} {likeCount} </p>
                    </div>
                    <button className="post-content__comment-modal"
                            onClick={commentsModalHandler}>Մեկնաբանություններ</button>
                </div>
                <div className={reactionBar ? "post-content__reaction active" : "post-content__reaction"}>
                    <FontAwesomeIcon    icon={faHeart}  
                                        alt="" 
                                        onClick={heartHandler}
                                        className="post-content__reaction-icon red"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faHands}  
                                        onClick={reactionBarHandler}
                                        alt="" 
                                        className="post-content__reaction-icon green"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faThumbsUp}  
                                        onClick={likeHandler}
                                        alt="" 
                                        className="post-content__reaction-icon blue"></FontAwesomeIcon>
                </div>
                <div className="post-content__btns">
                    <ul className="post-content__nav">
                        <li     className="post-content__item" 
                                onClick={reactionBarHandler}>
                            <FontAwesomeIcon    icon={faThumbsUp} 
                                                className="post-content__item-icon"/>
                            Հավանել
                        </li>
                        <li     className="post-content__item " 
                                onClick={commentBarHandler}>
                            <FontAwesomeIcon    icon={faComment} 
                                                className="post-content__item-icon"/>
                            Մեկնաբանել
                        </li>
                        <li className="post-content__item">
                            <FontAwesomeIcon    icon={faRightLong} 
                                                className="post-content__item-icon"/>
                            Կիսվել
                        </li>
                        <li className="post-content__item">
                            <FontAwesomeIcon    icon={faPaperPlane} 
                                                className="post-content__item-icon"/>
                            Ուղարկել
                        </li>
                    </ul>
                </div>
                <CreateComment commentBar={commentBar} postId={id} />
                <Comments    commentsModal={commentsModal} postId={id}/>
               
            </div>
        </div>
    )
}

export default Post;