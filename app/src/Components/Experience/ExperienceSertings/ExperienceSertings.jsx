import React,{useState,useCallback} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch , useSelector } from "react-redux";

import { addExperiance } from "../../../Redux/slices/experience.slices" 
import './experienceSertings.scss';

const ExperienceSertings = (
    {   experienceSertings,
        setExperienceSertings   }
    ) => {

    const {companyes} = useSelector((state) => state.company);
    const dispatch = useDispatch();
    const [companyName,setCompanyName] = useState();
    const [startWork , setStartWork] = useState();
    const [endWork , setEndWork] = useState();
    const [profession , setProfession] = useState();
    const currentUser = 4;
    const date = "12/06/22"
    const addExperianceHandler = useCallback ( async () => {
        
        await   dispatch(addExperiance( { 
                    id:Math.floor(Math.random() * 3000),
                    userId:currentUser , 
                    companyName : companyName,
                    profession : profession,
                    createDate : date,
                    startWork : startWork,
                    endWork : endWork,
                }))
                setCompanyName('')
                setProfession('')
                setStartWork('')
                setEndWork('')
                setExperienceSertings(false)
        
    },[dispatch, companyName, profession, startWork, endWork, setExperienceSertings])
    
    return (
        <div className={experienceSertings ? "experienceSertings active" : "experienceSertings "} 
             onClick={() => {setExperienceSertings(false)}} >
            <div className="experienceSertings-container" 
                 onClick={(e) => {e.stopPropagation()}}>
                <div className="experienceSertings-header">
                    <h2 className="experienceSertings-header__title">Ավելացնել՝ ԱՇԽԱՏԱՆՔԱՅԻՆ ՓՈՐՁ</h2>
                    <FontAwesomeIcon icon={faClose} 
                                     onClick={() => {setExperienceSertings(false)}} 
                                     className="experienceSertings-header__icon"
                                     />
                </div>
                <div className="experienceSertings-content">
                    <p>Կազմակերպության անվանումը</p>
                    <input  className="experienceSertings-input"
                            onChange={(e) => {setCompanyName(e.target.value)}}
                    />
                    {
                        companyes.filter((c) => c.name === companyName).map((c) =>(
                            <img    src={c.logo} 
                                    alt=""
                                    key={c.id}></img>
                        ))
                    }
                    <p>Մասնագիտության</p>
                    <input  className="experienceSertings-input"
                            onChange={(e) => {setProfession(e.target.value)}}
                    />
                    <p>Սկիզբ</p>
                    <input  className="experienceSertings-input"
                            onChange={(e) => {setStartWork(e.target.value)}}
                    />
                    <p>Ավարտ</p>
                    <input  className="experienceSertings-input"
                            onChange={(e) => {setEndWork(e.target.value)}}
                    />
                </div>
                <div className="experienceSertings-footer">
                    <button className="experienceSertings-footer__btn"
                            onClick={addExperianceHandler
                            }>Հաստատել</button>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSertings;