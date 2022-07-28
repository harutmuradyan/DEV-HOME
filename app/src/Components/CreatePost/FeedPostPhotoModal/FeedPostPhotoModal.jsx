import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import './feedPostPhotoModal.scss';
import { useCreatePost } from "../../../Utils/Hooks/useCreatePost";

const FeedPostPhotoModal = (
    {   feedPostPhotoModal,
        setFeedPostPhotoModal   }
    ) => {    

    const { addPostPhotoHandler,
            changeTextPostPhotohandler,
            closeFilePostHandler,
            changePhotoPosthandler,
            stopPropagation,
            filePostPhoto,
            textPostPhoto  } = useCreatePost();
    
    const {users} = useSelector((state) => state.user)

    const currentUser = 4;

    return (
        <div className={feedPostPhotoModal ? "feedPostPhotoModal active" : "feedPostPhotoModal"} 
             onClick={() => {setFeedPostPhotoModal(false)}} >
            <div className="feedPostPhotoModal-container" 
                 onClick={stopPropagation}>
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
                                onChange={changePhotoPosthandler}
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
                                    onChange={changeTextPostPhotohandler}
                                    value={textPostPhoto}
                                    className="feedPostPhotoModal-content__view-about"></input>
                            
                            <FontAwesomeIcon    icon={faClose} 
                                                className="feedPostPhotoModal-content__view-close"
                                                onClick={closeFilePostHandler}
                                                />
                            {
                                filePostPhoto &&
                                <img    src={filePostPhoto} 
                                        alt="" 
                                        className="feedPostPhotoModal-content__view-photo"></img>
                            }         
                        </div>
                    </div>
                </div>
                <div className="feedPostPhotoModal-footer">
                    <button className="feedPostPhotoModal-footer__btn"
                            onClick={addPostPhotoHandler}>Տեղադրել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostPhotoModal;