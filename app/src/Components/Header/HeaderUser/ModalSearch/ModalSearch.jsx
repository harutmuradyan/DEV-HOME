import React from "react";
import './modalSearch.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const ModalSearch = (
    {   modalSearch,
        setModalSearch   }
    ) => {
    
    return (
        <div className={modalSearch ? "modalSearch active" : "modalSearch"} 
             onClick={() => {setModalSearch(false)}} >
            <div className="modalSearch-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="modalSearch-header">
                    <h2 className="modalSearch-header__title">Փնտրեք</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setModalSearch(false)}} 
                                     className="feedPostArticleModal-header__icon"
                                     />
                </div>
                <div className="modalSearch-content">
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                    <p>Content</p>
                </div>
                <div className="modalSearch-footer">
                    <button className="modalSearch-footer__btn">Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ModalSearch;