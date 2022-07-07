import React,{useState} from "react";
import './post.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faHeart , 
            faThumbsUp , 
            faHands , 
            faComment , 
            faRightLong , 
            faPaperPlane} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";

const Post = ({cover , desc , userId}) => {

    const [feedPostReactionOppen , setFeedPostReactionOppen] = useState(false);
    const [feedPostCommentOppen , setFeedPostCommentOppen] = useState(false);

    const {users} = useSelector((state) => state.user);
    
    return (
        <div className="post">
            {users.filter((u) => u.id === userId).map((e) => {
                return (
                    <div key={e.id} className="post-header">
                        <div className="post-header__img">
                            <img    src={e.logo} 
                                    alt=""></img>
                        </div>
                        <div className="post-header__info">
                            <h2>{e.name}</h2>
                            <p>{e.profession}</p>
                            <p>1 օր</p>
                        </div>
                        <div className="post-header__follow">
                            <button className="post-header__follow-btn">
                                Հետևել
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className="post-content">
                <div className="post-content__title">
                    <p>
                        {desc}
                        <span>Դիտել ամբողջը</span>
                    </p>
                </div>
                <div className="post-content__photo">
                    <img    src={cover} 
                            alt=""></img>
                </div>
                <div className="post-content__follow">
                    <FontAwesomeIcon    icon={faHeart}  
                                        alt="" 
                                        className="post-content__follow-icon red"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faHands}  
                                        alt="" 
                                        className="post-content__follow-icon green"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faThumbsUp}  
                                        alt="" 
                                        className="post-content__follow-icon blue"></FontAwesomeIcon>
                    <p className="post-content__follow-name">Գագիկ Նալբանդյան</p>
                    <p className="post-content__follow-peoples">և 15 հետևորդ</p>
                </div>
                <div className={feedPostReactionOppen ? "post-content__reaction active" : "post-content__reaction"}>
                    <FontAwesomeIcon    icon={faHeart}  
                                        alt="" 
                                        onClick={() => {setFeedPostReactionOppen(false)}}
                                        className="post-content__reaction-icon red"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faHands}  
                                        onClick={() => {setFeedPostReactionOppen(false)}}
                                        alt="" 
                                        className="post-content__reaction-icon green"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faThumbsUp}  
                                        onClick={() => {setFeedPostReactionOppen(false)}}
                                        alt="" 
                                        className="post-content__reaction-icon blue"></FontAwesomeIcon>
                </div>
                <div className="post-content__btns">
                    <ul className="post-content__nav">
                        <li     className="post-content__item" 
                                onClick={() => {setFeedPostReactionOppen(true)}}>
                            <FontAwesomeIcon    icon={faThumbsUp} 
                                                className="post-content__item-icon"/>
                            Հավանել
                        </li>
                        <li     className="post-content__item " 
                                onClick={() => {setFeedPostCommentOppen(true)}}>
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
                <div className={feedPostCommentOppen ? "post-content__comment active" : "post-content__comment"}>
                    <img    className="post-content__comment-img" 
                            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                    <input  className="post-content__comment-input" 
                            placeholder=" Մեկնաբանություն"/>
                    <button className="post-content__comment-btn">
                        <FontAwesomeIcon    icon={faPaperPlane} 
                                            className="post-content__comment-icon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post;