import React from "react";
import './createPost.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const CreatePost = () => {
    return (
        <div className="createPost">
            <div className="createPost-header">
                <img className="createPost-header__logo" src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""></img>
                <input className="createPost-header__input" placeholder="     Գրեք տեքստը"></input>
            </div>
            <div className="createPost-category">
                <ul className="createPost-category_bar">
                    <li className="createPost-category__item">
                        <FontAwesomeIcon icon={faCamera}  className="createPost-category__item-icon blue"/>
                        Նկար
                    </li>
                    <li  className="createPost-category__item">
                        <FontAwesomeIcon icon={faVideo} className="createPost-category__item-icon green"/>
                        Վիդեո
                    </li>
                    <li  className="createPost-category__item">
                        <FontAwesomeIcon icon={faCalendar} className="createPost-category__item-icon yellow"/>
                        Միջոցառում
                    </li>
                    <li  className="createPost-category__item">
                        <FontAwesomeIcon icon={faFlag} className="createPost-category__item-icon red"/>
                        Հոդված
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CreatePost;