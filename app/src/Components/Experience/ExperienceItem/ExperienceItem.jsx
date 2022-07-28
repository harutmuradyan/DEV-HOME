import React from "react";
import { useSelector} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPen } from "@fortawesome/free-solid-svg-icons";
import './experienceItem.scss';

const ExperienceItem = ({   companyName , 
                            startWork , 
                            endWork , 
                            profession ,
                            id   }) => {

    const {companyes} = useSelector((state) => state.company);

    return (
        <div className="experienceItem">
            <div className="experienceItem-content">
                {
                    companyes.filter((c) => c.name === companyName).map((c) =>(
                        <div    className="experienceItem-content__img" 
                                key={c.id}>
                            <img    src={c.logo} 
                                    alt=""></img>
                        </div>
                    ))
                }
                <div className="experienceItem-content__info">
                    <h2>{companyName}</h2>
                    <p>{profession}</p>
                    <p>Սկինբ {startWork} - ավարտ {endWork}</p>
                </div>
                <button className="experienceItem-content__btn">
                    <FontAwesomeIcon    className="experienceItem-content__icon" 
                                        icon={faPen}/>
                </button>
                <button className="experienceItem-content__btn">
                    <FontAwesomeIcon    className="experienceItem-content__icon" 
                                        icon={faClose}/>
                </button>
            </div>
        </div>
    )
}

export default ExperienceItem;