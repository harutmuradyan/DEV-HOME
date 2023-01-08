import React,{useState} from "react";
import './aboutDesc.scss';

import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutDescUpdate from "./AboutDescUpdate/AboutDescUpdate";



const AboutDesc = () => {

    const [aboutDescUpdate,setAboutDescUpdate] = useState(false);

    return (
        <div className="aboutDesc">
            <div className="aboutDesc-container">
                <div className="aboutDesc-block">
                    <h2 className="aboutDesc-block__title">Ընդհանուր տեղեկություններ</h2>
                    <button className="aboutDesc-block__add"
                            onClick={() => {setAboutDescUpdate(true)}}>
                        <FontAwesomeIcon    className="aboutDesc-background__update-btn" 
                                            icon={faAdd}/>
                    </button>
                </div>
                <p className="aboutDesc-text">Այստեղ պետք է լինի Ձեր մասին , Ձեր կոմիղ տրամադրված ինքնակենսագրականը</p>
            </div>
            <AboutDescUpdate    aboutDescUpdate={aboutDescUpdate} 
                                setAboutDescUpdate={setAboutDescUpdate}/>
        </div>
    )
}

export default AboutDesc;