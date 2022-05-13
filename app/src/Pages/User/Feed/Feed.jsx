import React from "react";
import './feed.scss';

import Content from "./Content/Content";
import GoNewSkill from "./GoNewSkill/GoNewSkill";
import Sidebar from "./Sidebar/Sidebar";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import Background from "./Background/Background";


const Feed = () => {

    return (
        <div className="feed">
            <div className="feed-container">
                <div className="feed-container__leftBlock">
                    <Background/>
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