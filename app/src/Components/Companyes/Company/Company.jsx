import React,{useState,useCallback} from "react";
import './company.scss';

import DarkBtn from "../../UI/DarkBtn/DarkBtn";
import LightBtn from "../../UI/LightBtn/LightBtn";

const Company = ({name,shpere,logo,cover}) => {

    const [followCompany,setFollowCompany] = useState(false);

    const followHandler = useCallback( () => {
        if (followCompany === true) {
            setFollowCompany(false)
        }else {
            setFollowCompany(true)
        }
    },[followCompany])

    return (
        <div className="company">
            <div className="company-block">
                <img    className="company-block__cover"
                        alt=""
                        src={cover}>
                </img>
                <img    className="company-block__logo" 
                        src={logo} 
                        alt=""></img>
            </div>
            <h2 className="company-name">{name}</h2>
            <p className="company-sphere">{shpere}</p>
            <div className="company-follow">
                {
                    followCompany   ? <LightBtn text="Հետևում եք" 
                                                followHandler={followHandler}/> 
                                    : <DarkBtn  text="Հետևեք"
                                                followHandler={followHandler}
                                />
                }
            </div>
        </div>
    )
}

export default Company;
