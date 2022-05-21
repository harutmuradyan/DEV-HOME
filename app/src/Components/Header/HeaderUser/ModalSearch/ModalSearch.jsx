import React from "react";
import './modalSearch.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import ModalSearchItem from "./ModalSearchItem/ModalSearchItem";


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
                                     className="modalSearch-header__icon"
                                     />
                </div>
                <div className="modalSearch-content">
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                    <ModalSearchItem />
                </div>
                <div className="modalSearch-footer">
                    <button className="modalSearch-footer__btn">Դիտել ավելին</button>
                </div>
            </div>
        </div>
    )
}

export default ModalSearch;