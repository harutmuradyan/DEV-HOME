import React from "react";
import './feedPostArticleModal.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useCreatePost } from "../../../Utils/Hooks/useCreatePost";

const FeedPostArticleModal = (
    {   feedPostArticleModal,
        setFeedPostArticleModal   }
    ) => {
    
    const {users} = useSelector((state) => state.user);
    const currentUser = 4;
    const { textPostArcticel,
            addPostArcticelHandler,
            changeTextPostArcticelhandler,
            stopPropagation   } = useCreatePost();

    return (
        <div className={feedPostArticleModal ? "feedPostArticleModal active" : "feedPostArticleModal"} 
             onClick={() => {setFeedPostArticleModal(false)}} >
            <div className="feedPostArticleModal-container" 
                 onClick={stopPropagation}>
                <div className="feedPostArticleModal-header">
                    <h2 className="feedPostArticleModal-header__title">Գրել Հոդված</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setFeedPostArticleModal(false)}} 
                                     className="feedPostArticleModal-header__icon"
                                     />
                </div>
                <div className="feedPostArticleModal-content">
                    <div className="feedPostArticleModal-content__container">
                        {[...users].filter((u) => u.id === currentUser).map((e) => {
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
                                        onChange={changeTextPostArcticelhandler}
                                        value={textPostArcticel}
                                        ></textarea>
                        </div>
                    </div>
                </div>
                <div className="feedPostArticleModal-footer">
                    <button     className="feedPostArticleModal-footer__btn"
                                onClick={addPostArcticelHandler}>Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default FeedPostArticleModal;