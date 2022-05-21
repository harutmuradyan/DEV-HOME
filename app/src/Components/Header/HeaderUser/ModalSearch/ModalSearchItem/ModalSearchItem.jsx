import React from "react";
import './modalSearchItem.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ModalSearchItem = () => {
    return (
        <div className="modalSearchItem">
            <FontAwesomeIcon    className="modalSearchItem-icon" 
                                icon={faSearch}/>
            <h2 className="modalSearchItem-name">Ղազարյան Անդրանիկ</h2>
            <p className="modalSearchItem-profession">Frontend Developer</p>
            <img    className="modalSearchItem-img" 
                    src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" 
                    alt=""></img>
        </div>
    )
}

export default ModalSearchItem;