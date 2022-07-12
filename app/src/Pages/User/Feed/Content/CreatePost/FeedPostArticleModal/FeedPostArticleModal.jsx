import React,{useState,useCallback} from "react";
import './feedPostArticleModal.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { useDispatch,useSelector } from "react-redux";

import { addPost } from "../../../../../../Redux/slices/post.slices";

const FeedPostArticleModal = (
    {   feedPostArticleModal,
        setFeedPostArticleModal   }
    ) => {
    
    const {users} = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const currentUser = 4;

    const [changePostArcticel,setChangePostArcticel] = useState();

    const postArcticelHandler = useCallback ( async () => {
        
        await   dispatch(addPost( { 
                    id:Math.floor(Math.random() * 3000),
                    userId:currentUser , 
                    desc:changePostArcticel,
                }))
                setChangePostArcticel('')
                setFeedPostArticleModal(false)
        
    },[currentUser,changePostArcticel])

    return (
        <div className={feedPostArticleModal ? "feedPostArticleModal active" : "feedPostArticleModal"} 
             onClick={() => {setFeedPostArticleModal(false)}} >
            <div className="feedPostArticleModal-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="feedPostArticleModal-header">
                    <h2 className="feedPostArticleModal-header__title">Գրել Հոդված</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostArticleModal(false)}} 
                                     className="feedPostArticleModal-header__icon"
                                     />
                </div>
                <div className="feedPostArticleModal-content">
                    <div className="feedPostArticleModal-content__container">
                        {users.filter((u) => u.id === currentUser).map((e) => {
                            return    <div    className="feedPostArticleModal-content__header"
                                                key={e.id}>
                                        <img    src={e.logo} 
                                                alt="" 
                                                className="feedPostArticleModal-content__header-img"></img>
                                        <div className="feedPostArticleModal-content__header-group">
                                            <p className="feedPostArticleModal-content__header-name">{e.name}</p>
                                            <select className="feedPostArticleModal-content__header-hideen">
                                                <option>Բոլորի համար</option>
                                            </select>
                                        </div>
                                    </div>     
                        })}
                        <div className="feedPostArticleModal-content__view">
                            <p className="feedPostArticleModal-content__view-title">Ինչով եք ուզում կիսվել `</p>
                            <textarea   className="feedPostArticleModal-content__view-about"
                                        onChange={(e) => {setChangePostArcticel(e.target.value)}}
                                        value={changePostArcticel}
                                        ></textarea>
                        </div>
                    </div>
                </div>
                <div className="feedPostArticleModal-footer">
                    <button     className="feedPostArticleModal-footer__btn"
                                onClick={postArcticelHandler}>Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostArticleModal;