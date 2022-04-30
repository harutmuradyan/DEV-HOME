import React,{useState} from "react";
import './asd.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Asd = () => {

    const [modal,setModal] = useState(true);

    return (
        <div className={modal ? "asd" : "asd active"} onClick={() => {setModal(false)}} >
            <div className="asd-b" onClick={(e) => {e.stopPropagation()}}>
                <div className="asd-y">
                    <h2>Title</h2>
                    <FontAwesomeIcon icon={faClose} onClick={() => {setModal(false)}} />
                </div>
                <div className="asd-l">
                    <p>Content</p>
                </div>
            </div>
        </div>
    )
}

export default Asd;