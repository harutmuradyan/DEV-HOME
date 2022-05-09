import React,{useState} from "react";
import './createPost.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faCamera  , 
            faVideo , 
            faCalendar , 
            faFlag} from "@fortawesome/free-solid-svg-icons";

import FeedPostPhotoModal from "./FeedPostPhotoModal/FeedPostPhotoModal";
import FeedPostVideoModal from "./FeedPostVideoModal/FeedPostVideoModal";
import FeedPostEventModal from "./FeedPostEventModal/FeedPostEventModal";
import FeedPostArticleModal from "./FeedPostArticleModal/FeedPostArticleModal";

const CreatePost = () => {

    const [feedPostPhotoModal,setFeedPostPhotoModal] = useState(false);
    const [feedPostVideoModal,setFeedPostVideoModal] = useState(false);
    const [feedPostEventModal,setFeedPostEventModal] = useState(false);
    const [feedPostArticleModal,setFeedPostArticleModal] = useState(false);

    return (
        <div className="createPost">
            <div className="createPost-header">
                <img    className="createPost-header__logo" 
                        src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                        alt=""></img>
                <input  className="createPost-header__input" 
                        placeholder="     Գրեք տեքստը"
                        onClick={() => {setFeedPostArticleModal(true)}}></input>
            </div>
            <div className="createPost-category">
                <ul className="createPost-category_bar">
                    <li className="createPost-category__item" 
                        onClick={() => {setFeedPostPhotoModal(true)}}>
                        <FontAwesomeIcon    icon={faCamera}  
                                            className="createPost-category__item-icon blue"/>
                        Նկար
                    </li>
                    <li  className="createPost-category__item"
                         onClick={() => {setFeedPostVideoModal(true)}}>
                        <FontAwesomeIcon    icon={faVideo} 
                                            className="createPost-category__item-icon green"/>
                        Վիդեո
                    </li>
                    <li  className="createPost-category__item"
                        onClick={() => {setFeedPostEventModal(true)}}>
                        <FontAwesomeIcon    icon={faCalendar} 
                                            className="createPost-category__item-icon yellow"/>
                        Միջոցառում
                    </li>
                    <li  className="createPost-category__item"
                        onClick={() => {setFeedPostArticleModal(true)}}>
                        <FontAwesomeIcon    icon={faFlag} 
                                            className="createPost-category__item-icon red"/>
                        Հոդված
                    </li>
                </ul>
            </div>

            <FeedPostPhotoModal         feedPostPhotoModal={feedPostPhotoModal} 
                                        setFeedPostPhotoModal={setFeedPostPhotoModal}/>
            <FeedPostVideoModal         feedPostVideoModal={feedPostVideoModal} 
                                        setFeedPostVideoModal={setFeedPostVideoModal}/>
            <FeedPostEventModal         feedPostEventModal={feedPostEventModal} 
                                        setFeedPostEventModal={setFeedPostEventModal}/>
            <FeedPostArticleModal       feedPostArticleModal={feedPostArticleModal} 
                                        setFeedPostArticleModal={setFeedPostArticleModal}/>
        </div>
    )
}

export default CreatePost;