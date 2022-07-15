import React,{useState,useCallback} from "react";
import './feedPostPhotoModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { useSelector , useDispatch} from "react-redux";
import { addPost } from "../../../../../../Redux/slices/post.slices";

const FeedPostPhotoModal = (
    {   feedPostPhotoModal,
        setFeedPostPhotoModal   }
    ) => {    

    const [filePhoto, setFilePhoto] = useState();
    const [changeText , setChangeText] = useState("");
    
    const {users} = useSelector((state) => state.user)

    const dispatch = useDispatch();

    const currentUser = 4;

    const changePhotohandler = useCallback ( async (e) => {
        await   setFilePhoto(URL.createObjectURL(e.target.files[0]));
    },[setFilePhoto])

    const closePhotoHandler = useCallback ( async () => {
        await    setFilePhoto("")
    },[setFilePhoto])

    const changeTexthandler = useCallback ( async (e) => {
        await   setChangeText(e.target.value);
    },[setChangeText])

    const postPhotoHandler = useCallback( async () => {
        await   dispatch(addPost( { 
            id:Math.floor(Math.random() * 6000),
            userId:currentUser , 
            desc:changeText,
            cover: filePhoto,
            video : null
        }))
        setChangeText("")
        setFilePhoto(null)
        setFeedPostPhotoModal(false)
    },[filePhoto, changeText, dispatch, setFeedPostPhotoModal , setChangeText])

    return (
        <div className={feedPostPhotoModal ? "feedPostPhotoModal active" : "feedPostPhotoModal"} 
             onClick={() => {setFeedPostPhotoModal(false)}} >
            <div className="feedPostPhotoModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="feedPostPhotoModal-header">
                    <h2 className="feedPostPhotoModal-header__title">Ավելացնել գրառում նկարով</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostPhotoModal(false)}} 
                                     className="feedPostPhotoModal-header__icon"
                                     />
                </div>
                <div className="feedPostPhotoModal-content">
                    <div className="feedPostPhotoModal-content__block">
                        <input  type="file"        
                                className="feedPostPhotoModal-content__file"
                                onChange={changePhotohandler}
                                ></input>
                        <div className="feedPostPhotoModal-content__btns">
                            <button className="feedPostPhotoModal-content__close">Չեղարկել</button>
                            <button className="feedPostPhotoModal-content__success">Հաստատել</button>
                        </div>
                    </div>
                    <div className="feedPostPhotoModal-content__container">
                        {
                            [...users].filter((u) => u.id === currentUser).map((e) => {
                                return <div className="feedPostPhotoModal-content__header"
                                            key={e.id}>
                                            <img    src={e.logo} 
                                                    alt="" 
                                                    className="feedPostPhotoModal-content__header-img"></img>
                                            <div className="feedPostPhotoModal-content__header-group">
                                                <p className="feedPostPhotoModal-content__header-name">{e.name}</p>
                                                <select className="feedPostPhotoModal-content__header-hideen">
                                                    <option>Բոլորի համար</option>
                                                </select>
                                            </div>
                                        </div>
                            })
                        }
                        <div className="feedPostPhotoModal-content__view">
                            <input  type="text" 
                                    placeholder="   Ինչով եք ուզում կիսվել"
                                    onChange={changeTexthandler}
                                    value={changeText}
                                    className="feedPostPhotoModal-content__view-about"></input>
                            
                            <FontAwesomeIcon    icon={faClose} 
                                                className="feedPostPhotoModal-content__view-close"
                                                onClick={closePhotoHandler}
                                                />
                            {
                                filePhoto &&
                                <img    src={filePhoto} 
                                        alt="" 
                                        className="feedPostPhotoModal-content__view-photo"></img>
                            }         
                        </div>
                    </div>
                </div>
                <div className="feedPostPhotoModal-footer">
                    <button className="feedPostPhotoModal-footer__btn"
                            onClick={postPhotoHandler}>Տեղադրել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostPhotoModal;