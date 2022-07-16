import React from "react";
import './feed.scss';

import {useSelector} from 'react-redux'

import Content from "./Content/Content";
import GoNewSkill from "./GoNewSkill/GoNewSkill";
import SidebarFooter from "../../../Components/SidebarFooter/SidebarFooter";
import Background from "./Background/Background";
import Befriend from "../../../Components/Befriend/Befriend";

const Feed = () => {

    const {users} = useSelector((state) => state.user);

    const currentUser = 4;

    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-container__leftBlock">
                    {   
                        [...users].filter((elem) => elem.id === currentUser).map((el) => {
                            return  <Background     key={el.id}
                                                    userId={el.id}
                                                    name={el.name} 
                                                    profession={el.profession}
                                                    cover={el.cover}
                                                    logo={el.logo}
                                                    /> 
                        })
                    }
                    <GoNewSkill/>
                </div>
                <div className="feed-container__content">
                    <Content/>
                </div>
                <div className="feed-container__rightBlock">
                    <Befriend/>
                    <SidebarFooter/>
                </div>
            </div>
        </div>
    )
}

export default Feed;