import React,{useState,useCallback} from "react";
import './feedPostVideoModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { useSelector , useDispatch} from "react-redux";
import { addPost } from "../../../Redux/slices/post.slices";

const FeedPostVideoModal = (
    {   feedPostVideoModal,
        setFeedPostVideoModal   }
    ) => {

        const [fileVideo, setFileVideo] = useState();
        const [changeText , setChangeText] = useState("");
        
        const {users} = useSelector((state) => state.user)
    
        const dispatch = useDispatch();
    
        const currentUser = 4;
    
        const changeVideohandler = useCallback ( async (e) => {
            await   setFileVideo(URL.createObjectURL(e.target.files[0]));
        },[setFileVideo])
    
        const closeVideoHandler = useCallback ( async () => {
            await    setFileVideo("")
        },[setFileVideo])
    
        const changeTexthandler = useCallback ( async (e) => {
            await   setChangeText(e.target.value);
        },[setChangeText])
    
        const postVideoHandler = useCallback( async () => {
            await   dispatch(addPost( { 
                id:Math.floor(Math.random() * 6000),
                userId:currentUser , 
                desc:changeText,
                cover:null,
                video: fileVideo
            }))
            setChangeText("")
            setFileVideo(null)
            setFeedPostVideoModal(false)
        },[fileVideo, changeText, dispatch, setFeedPostVideoModal , setChangeText])
    
    return (
        <div className={feedPostVideoModal ? "feedPostVideoModal active" : "feedPostVideoModal"} 
             onClick={() => {setFeedPostVideoModal(false)}} >
            <div className="feedPostVideoModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
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
                            onChange={changeVideohandler}
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
                                    onChange={changeTexthandler}
                                    value={changeText}
                                    className="feedPostVideoModal-content__view-about"></input>
                            
                            <FontAwesomeIcon    icon={faClose} 
                                                className="feedPostVideoModal-content__view-close"
                                                onClick={closeVideoHandler}
                                                />
                            {
                                fileVideo &&
                                
                                <video  className="feedVideoPhotoModal-content__view-video"
                                        controls >
                                    <source     src={fileVideo}
                                                type="video/mp4" />
                                </video> 
                            }    
                        </div>
                    </div>
                </div>
                <div className="feedPostVideoModal-footer">
                    <button className="feedPostVideoModal-footer__btn"
                            onClick={postVideoHandler}>Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostVideoModal;