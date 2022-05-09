import React from "react";
import './companyPost.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faHeart , 
            faThumbsUp , 
            faHands , 
            faPaperPlane} from "@fortawesome/free-solid-svg-icons";


const CompanyPost = () => {

    return (
        <div className="companyPost">
            <div className="companyPost-header">
                <div className="companyPost-header__img">
                    <img    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                </div>
                <div className="companyPost-header__info">
                    <h2>Քրիստինե Գրիգորյան</h2>
                    <p>DEVOPS DEVELOPER</p>
                    <p>1 օր</p>
                </div>
            </div>
            <div className="companyPost-content">
                <div className="companyPost-content__title">
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
                <div className="companyPost-content__photo">
                    <img    src="https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg" 
                            alt=""></img>
                </div>
                <div className="companyPost-content__follow">
                    <FontAwesomeIcon    icon={faHeart}  
                                        alt="" 
                                        className="companyPost-content__follow-icon red"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faHands}  
                                        alt="" 
                                        className="companyPost-content__follow-icon green"></FontAwesomeIcon>
                    <FontAwesomeIcon    icon={faThumbsUp}  
                                        alt="" 
                                        className="companyPost-content__follow-icon blue"></FontAwesomeIcon>
                    <p className="companyPost-content__follow-name">Գագիկ Նալբանդյան</p>
                    <p className="companyPost-content__follow-peoples">և 15 հետևորդ</p>
                </div>
                <div className="companyPost-content__comment">
                    <img    className="companyPost-content__comment-img" 
                            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                            alt=""></img>
                    <input  className="companyPost-content__comment-input" 
                            placeholder=" Մեկնաբանություն"/>
                    <button className="companyPost-content__comment-btn">
                        <FontAwesomeIcon    icon={faPaperPlane} 
                                            className="companyPost-content__comment-icon"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CompanyPost;