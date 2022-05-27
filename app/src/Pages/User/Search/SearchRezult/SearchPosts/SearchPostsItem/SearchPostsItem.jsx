import React,{useState} from "react";
import './searchPostsItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faHeart , 
            faThumbsUp , 
            faHands , 
            faComment , 
            faRightLong , 
            faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const SearchPostsItem = () => {

    const [feedPostReactionOppen , setFeedPostReactionOppen] = useState(false);
    const [feedPostCommentOppen , setFeedPostCommentOppen] = useState(false);

    return (
        <div className="searchPostsItem">
            <div className="searchPostsItem-header">
                <div className="searchPostsItem-header__img">
                    <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                </div>
                <div className="searchPostsItem-header__info">
                    <h2>Քրիստինե Գրիգորյան</h2>
                    <p>DEVOPS DEVELOPER</p>
                    <p>1 օր</p>
                </div>
                <div className="searchPostsItem-header__follow">
                    <button className="searchPostsItem-header__follow-btn">
                        Հետևել
                    </button>
                </div>
            </div>
            <div className="searchPostsItem-content">
                <div className="searchPostsItem-content__title">
                    <p>
                        is a workplace where you can be in 
                        the know about crypto as the crypto 
                        world is still new and ever-changing, 
                        and there is an endless supply of i
                        nnovative projects and features 
                        to keep an eye on.  
                        <span>Դիտել ամբողջը</span>
                    </p>
                </div>
                <div className="searchPostsItem-content__photo">
                    <img    src="https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg" 
                            alt=""></img>
                </div>
                <div className="searchPostsItem-content__follow">
                    <FontAwesomeIcon    icon={faHeart}  
                                        alt="" 
                                        className="searchPostsItem-content__follow-icon red"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faHands}  
                                        alt="" 
                                        className="searchPostsItem-content__follow-icon green"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faThumbsUp}  
                                        alt="" 
                                        className="searchPostsItem-content__follow-icon blue"></FontAwesomeIcon>
                    <p className="searchPostsItem-content__follow-name">Գագիկ Նալբանդյան</p>
                    <p className="searchPostsItem-content__follow-peoples">և 15 հետևորդ</p>
                </div>
                <div className={feedPostReactionOppen ? "searchPostsItem-content__reaction active" : "searchPostsItem-content__reaction"}>
                    <FontAwesomeIcon    icon={faHeart}  
                                        alt="" 
                                        onClick={() => {setFeedPostReactionOppen(false)}}
                                        className="searchPostsItem-content__reaction-icon red"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faHands}  
                                        onClick={() => {setFeedPostReactionOppen(false)}}
                                        alt="" 
                                        className="searchPostsItem-content__reaction-icon green"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faThumbsUp}  
                                        onClick={() => {setFeedPostReactionOppen(false)}}
                                        alt="" 
                                        className="searchPostsItem-content__reaction-icon blue"></FontAwesomeIcon>
                </div>
                <div className="searchPostsItem-content__btns">
                    <ul className="searchPostsItem-content__nav">
                        <li     className="searchPostsItem-content__item" 
                                onClick={() => {setFeedPostReactionOppen(true)}}>
                            <FontAwesomeIcon    icon={faThumbsUp} 
                                                className="searchPostsItem-content__item-icon"/>
                            Հավանել
                        </li>
                        <li     className="searchPostsItem-content__item " 
                                onClick={() => {setFeedPostCommentOppen(true)}}>
                            <FontAwesomeIcon    icon={faComment} 
                                                className="searchPostsItem-content__item-icon"/>
                            Մեկնաբանել
                        </li>
                        <li className="searchPostsItem-content__item">
                            <FontAwesomeIcon    icon={faRightLong} 
                                                className="searchPostsItem-content__item-icon"/>
                            Կիսվել
                        </li>
                        <li className="searchPostsItem-content__item">
                            <FontAwesomeIcon    icon={faPaperPlane} 
                                                className="searchPostsItem-content__item-icon"/>
                            Ուղարկել
                        </li>
                    </ul>
                </div>
                <div className={feedPostCommentOppen ? "searchPostsItem-content__comment active" : "searchPostsItem-content__comment"}>
                    <img    className="searchPostsItem-content__comment-img" 
                            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                    <input  className="searchPostsItem-content__comment-input" 
                            placeholder=" Մեկնաբանություն"/>
                    <button className="searchPostsItem-content__comment-btn">
                        <FontAwesomeIcon    icon={faPaperPlane} 
                                            className="searchPostsItem-content__comment-icon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchPostsItem;