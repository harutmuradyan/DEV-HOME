import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import './feedPostVideoModal.scss';
import { useCreatePost } from "../../../Utils/Hooks/useCreatePost";

const FeedPostVideoModal = (
    {   feedPostVideoModal,
        setFeedPostVideoModal   }
    ) => {
        
    const {users} = useSelector((state) => state.user)
    const currentUser = 4;
    const { addPostVideoHandler,
            filePostVideo,
            changeTextPostVideohandler,
            stopPropagation,
            textPostVideo,
            closeFilePostHandler,
            changeVideoPosthandler } = useCreatePost();

    return (
        <div className={feedPostVideoModal ? "feedPostVideoModal active" : "feedPostVideoModal"} 
             onClick={() => {setFeedPostVideoModal(false)}} >
            <div className="feedPostVideoModal-container" 
                 onClick={stopPropagation}>
                <div className="feedPostVideoModal-header">
                    <h2 className="feedPostVideoModal-header__title">Ավելացնել գրառում Տեսահոլովակով</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostVideoModal(false)}} 
                                     className="feedPostVideoModal-header__icon"
                                     />
                </div>
                <div className="feedPostVideoModal-content">
                    <div className="feedPostVideoModal-content__block">
                        <input  type="file"        
                            className="feedPostVideoModal-content__file"
                            onChange={changeVideoPosthandler}
                            ></input>
                        <div className="feedPostVideoModal-content__btns">
                            <button className="feedPostVideoModal-content__close">Չեղարկել</button>
                            <button className="feedPostVideoModal-content__success">Հաստատել</button>
                        </div>
                    </div>
                    <div className="feedPostVideoModal-content__container">
                        {
                            [...users].filter((u) => u.id === currentUser).map((e) => {
                                return <div className="feedPostVideoModal-content__header"
                                            key={e.id}>
                                            <img    src={e.logo} 
                                                    alt="" 
                                                    className="feedPostVideoModal-content__header-img"></img>
                                            <div className="feedPostVideoModal-content__header-group">
                                                <p className="feedPostVideoModal-content__header-name">{e.name}</p>
                                                <select className="feedPostVideoModal-content__header-hideen">
                                                    <option>Բոլորի համար</option>
                                                </select>
                                            </div>
                                        </div>
                            })
                        }
                        <div className="feedPostVideoModal-content__view">
                        <input  type="text" 
                                    placeholder="   Ինչով եք ուզում կիսվել"
                                    onChange={changeTextPostVideohandler}
                                    value={textPostVideo}
                                    className="feedPostVideoModal-content__view-about"></input>
                            
                            <FontAwesomeIcon    icon={faClose} 
                                                className="feedPostVideoModal-content__view-close"
                                                onClick={closeFilePostHandler}
                                                />
                            {
                                filePostVideo &&
                                
                                <video  className="feedVideoPhotoModal-content__view-video"
                                        controls >
                                    <source     src={filePostVideo}
                                                type="video/mp4" />
                                </video> 
                            }    
                        </div>
                    </div>
                </div>
                <div className="feedPostVideoModal-footer">
                    <button className="feedPostVideoModal-footer__btn"
                            onClick={addPostVideoHandler}>Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostVideoModal;