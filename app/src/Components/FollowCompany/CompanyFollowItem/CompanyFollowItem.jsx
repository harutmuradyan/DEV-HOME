import React,{useState , useCallback} from "react";
import './companyFollowItem.scss';

import { Link } from "react-router-dom";

import DarkBtn from "../../UI/DarkBtn/DarkBtn";
import LightBtn from "../../UI/LightBtn/LightBtn";


const CompanyFollowItem = ({ name , shpere , logo ,id}) => {

    const [followCompany,setFollowCompany] = useState(false);

    const followHandler = useCallback( () => {
        if (followCompany === true) {
            setFollowCompany(false)
        }else {
            setFollowCompany(true)
        }
    },[followCompany])

    return (
        <div className="companyFollowItem">
            <Link to={{pathname:`/company/${id}` , id}}>
                <div className="companyFollowItem-content">
                    <div className="companyFollowItem-content__img">
                        <img src={logo}
                            alt=""></img>
                    </div>
                    <div className="companyFollowItem-content__info">
                        <h2>{name}</h2>
                        <p>{shpere}</p>
                        <p>700 Հետևորդ</p>
                        {
                        followCompany   ? <LightBtn text="Հետևում եք" 
                                                    followHandler={followHandler}/> 
                                        : <DarkBtn  text="Հետևեք"
                                                    followHandler={followHandler}
                                    />
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CompanyFollowItem;