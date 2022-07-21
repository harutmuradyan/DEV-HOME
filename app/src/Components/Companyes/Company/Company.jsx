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
        <div className="companyItem">
            <div className="companyItem-block">
                <img    className="companyItem-block__cover"
                        alt=""
                        src={cover}>
                </img>
                <img    className="companyItem-block__logo" 
                        src={logo} 
                        alt=""></img>
            </div>
            <h2 className="companyItem-name">{name}</h2>
            <p className="companyItem-sphere">{shpere}</p>
            <div className="companyItem-follow">
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
