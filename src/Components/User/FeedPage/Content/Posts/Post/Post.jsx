import React from "react";
import './post.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faHands } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Post = () => {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header__img">
                    <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                </div>
                <div className="post-header__info">
                    <h2>Քրիստինե Գրիգորյան</h2>
                    <p>DEVOPS DEVELOPER</p>
                    <p>1 օր</p>
                </div>
                <div className="post-header__follow">
                    <button>
                        <FontAwesomeIcon icon={faPlus} className="post-header__follow-icon"/>
                        Հետևել
                    </button>
                </div>
            </div>
            <div className="post-content">
                <div className="post-content__title">
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
                <div className="post-content__photo">
                    <img src="https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg" alt=""></img>
                </div>
                <div className="post-content__follow">
                    <FontAwesomeIcon icon={faHeart}  alt="" className="post-content__follow-icon red"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faHands}  alt="" className="post-content__follow-icon green"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faThumbsUp}  alt="" className="post-content__follow-icon blue"></FontAwesomeIcon>
                    <p className="post-content__follow-name">Գագիկ Նալբանդյան</p>
                    <p className="post-content__follow-peoples">և 15 հետևորդ</p>
                </div>
                <div className="post-content__btns">
                    <ul className="post-content__nav">
                        <li className="post-content__item">
                            <FontAwesomeIcon icon={faThumbsUp} className="post-content__item-icon"/>
                            Դուր է գալիս
                        </li>
                        <li className="post-content__item">
                            <FontAwesomeIcon icon={faComment} className="post-content__item-icon"/>
                            Մեկնաբանել
                        </li>
                        <li className="post-content__item">
                            <FontAwesomeIcon icon={faRightLong} className="post-content__item-icon"/>
                            Կիսվել
                        </li>
                        <li className="post-content__item">
                            <FontAwesomeIcon icon={faPaperPlane} className="post-content__item-icon"/>
                            Ուղարկել
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Post;