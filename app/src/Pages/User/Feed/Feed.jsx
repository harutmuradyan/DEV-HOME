import React from "react";
import './feed.scss';

import {useSelector} from 'react-redux'

import Content from "./Content/Content";
import GoNewSkill from "./GoNewSkill/GoNewSkill";
import Sidebar from "./Sidebar/Sidebar";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import Background from "./Background/Background";

const Feed = () => {

    const {users} = useSelector((state) => state.user);

    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-container__leftBlock">
                    {   
                        [...users].filter((elem) => elem.id === 4).map((el) => {
                            return  <Background     key={el.id}
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
                    <Sidebar/>
                    <SidebarFooter/>
                </div>
            </div>
        </div>
    )
}

export default Feed;