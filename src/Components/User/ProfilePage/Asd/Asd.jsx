import React,{useState} from "react";
import './asd.scss';

const Asd = () => {

    const [modal,setModal] = useState(true);

    return (
        <div className={modal ? "asd" : "asd active"} onClick={() => {setModal(false)}} >
            <div className="asd-b" onClick={(e) => {e.stopPropagation()}}>
                <h2 onClick={() => {setModal(false)}}>asd</h2>
            </div>
        </div>
    )
}

export default Asd;